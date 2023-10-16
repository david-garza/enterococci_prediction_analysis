import requests
import pandas as pd

def get_dates_list():

    # Starting URL for Weather API Call.
    url ="https://www.ncei.noaa.gov/access/past-weather/USW00012923/data.json"

    # Get the data
    try:
        weather_data = requests.get(url)
        weather_data = weather_data.json()
        weather_data = weather_data['data']
    except:
       return("Weather data can't be reached")

    # Create a data frame and then transpose it and reset index
    weather_data_df = pd.DataFrame(weather_data)
    weather_data_df = weather_data_df.transpose()
    weather_data_df = weather_data_df.reset_index()

    # drop the snow columns
    weather_data_df = weather_data_df.drop(columns=["SNOW", "SNWD", "TMAX","TMIN","PRCP","TAVG"])

    # rename the columns
    weather_data_df.rename(columns={"index":"date"}, inplace = True)

    # Sort the dates and put them in the right order subset to the 20 most recent days
    date_df=weather_data_df.sort_values('date',ascending=False).head(20)

    # Create a list
    data = []

    # Populate data
    for index, row in date_df.iterrows():
        data.append({'index':index, 'date': row['date']})
        
    return(data)