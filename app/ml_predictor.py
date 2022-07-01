# Import dependencies needed to make prediction
import requests
import pandas as pd
from datetime import datetime
from joblib import load
import os
from flask import jsonify

# This model expects a dictionary input of 
# input = {'date_index': 16998, 'station_id': 'GAL048'}
# Model outputs the following dictionary of data
# {'prediction_label': 'low_risk', 'prediction_value': 25}

def predictor(input):
    # Needed for path names to model files
    # absolute path to this file
    FILE_DIR = os.path.dirname(os.path.abspath(__file__)) 

    # Set URL for API call
    url ="https://www.ncei.noaa.gov/access/past-weather/USW00012923/data.json"

    # Call the API and set the data
    try:
        weather_data = requests.get(url)
        weather_data = weather_data.json()
        weather_data = weather_data['data']
        weather_data_df = pd.DataFrame(weather_data)
    except:
        return ("weather data could not be reached")
    
    # Process the returned data
    weather_data_df = weather_data_df.transpose()
    weather_data_df = weather_data_df.reset_index()
    weather_data_df = weather_data_df.drop(columns=["SNOW", "SNWD"])
    weather_data_df.rename(columns={"index":"date"}, inplace = True)

    # Change the data types for further processing
    weather_data_df["date"] = weather_data_df["date"].apply(lambda x:datetime.strptime(x,"%Y-%m-%d"))

    cols = ['TMAX', 'TMIN', 'TAVG']
    weather_data_df[cols] = weather_data_df[cols].apply(pd.to_numeric, errors='coerce', axis=1)

    weather_data_df['PRCP'] = weather_data_df['PRCP'].astype(str).astype(float)

    # Compute 5 day rolling averages and totals for columns
    weather_data_df['5_day_temp_max'] = weather_data_df['TMAX'].rolling(5).mean()
    weather_data_df['5_day_temp_min'] = weather_data_df['TMIN'].rolling(5).mean()
    weather_data_df['5_day_temp'] = weather_data_df['TAVG'].rolling(5).mean()
    weather_data_df['5_day_precip1'] = weather_data_df['PRCP'].rolling(5).sum()

    # Sort the weather data
    weather_data_df = weather_data_df.sort_values(by="date",ascending=False)

    # Take only the first 20 rows
    weather_data_df = weather_data_df.head(20)

    # Drop the columns that are not needed for the ML model
    weather_data_df.drop(columns=["TMAX","TMIN","PRCP","TAVG"],inplace=True)

    # Extract the week from the "date" column" and create a separate column for that.
    weather_data_df['week'] = pd.to_datetime(weather_data_df['date']).dt.week


    # Shift column "month" to the second position
    second_column = weather_data_df.pop("week")

    # Insert column using insert(position,column_name,first_column) function
    weather_data_df.insert(1, "week", second_column)

    # Add the station columns
    weather_data_df['station_id_GAL034'] = 0
    weather_data_df['station_id_GAL035'] = 0
    weather_data_df['station_id_GAL036'] = 0
    weather_data_df['station_id_GAL037'] = 0
    weather_data_df['station_id_GAL038'] = 0
    weather_data_df['station_id_GAL039'] = 0
    weather_data_df['station_id_GAL040'] = 0
    weather_data_df['station_id_GAL041'] = 0
    weather_data_df['station_id_GAL042'] = 0
    weather_data_df['station_id_GAL044'] = 0
    weather_data_df['station_id_GAL045'] = 0
    weather_data_df['station_id_GAL046'] = 0
    weather_data_df['station_id_GAL047'] = 0
    weather_data_df['station_id_GAL048'] = 0
    weather_data_df['station_id_GAL049'] = 0
    weather_data_df['station_id_GAL050'] = 0

    # Drop the date column
    weather_data_df = weather_data_df.drop(columns= ["date"])

    # Verify the order of the columns match what ML model expects
    weather_data_df = weather_data_df[['week', '5_day_precip1', '5_day_temp', '5_day_temp_max',
       '5_day_temp_min', 'station_id_GAL034', 'station_id_GAL035',
       'station_id_GAL036', 'station_id_GAL037', 'station_id_GAL038',
       'station_id_GAL039', 'station_id_GAL040', 'station_id_GAL041',
       'station_id_GAL042', 'station_id_GAL044', 'station_id_GAL045',
       'station_id_GAL046', 'station_id_GAL047', 'station_id_GAL048',
       'station_id_GAL049', 'station_id_GAL050']]

    ##### Machine Learning Model Execution #########

    # Select row by date index
    input_row=weather_data_df.loc[[input['date_index']]]

    # Set the proper beach station location using user input
    station_column = 'station_id_'+input['station_id']
    input_row[station_column]=1

    # Build paths to the files locations
    scaler_path=os.path.join(FILE_DIR,'static','models','scale4.joblib')
    model_path=os.path.join(FILE_DIR,'static','models','ada4_model.joblib')
    le_path=os.path.join(FILE_DIR,'static','models','labelencoder.joblib')

    # Load Machine models needed for scaling, model, and labelencoding
    try:
        scaler = load(scaler_path)
    except:
        return jsonify({'error':'Failed to load model'})
    ada_model = load(model_path)
    le = load(le_path)
    
    # Scale the input data to match what ML expects
    input_row_scaled = scaler.transform(input_row)

    # Predict
    prediction = ada_model.predict(input_row_scaled)

    # Convert the prediction to high / low risk lable
    prediction_label=le.inverse_transform(prediction)

    # Convert the prediciton 0/1 into 25/75 for JS graphic
    if prediction == 0:
        prediction_value = 75
    elif prediction == 1:
        prediction_value = 25

    # Create the dictionary of values
    prediction_dict={"prediction_label":prediction_label[0],"prediction_value":prediction_value}

    return (prediction_dict)