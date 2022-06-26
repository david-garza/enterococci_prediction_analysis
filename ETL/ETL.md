# ETL

## Importing Data

- Our raw data was consisted of five datasets in CSV files;
- The CSV files were stored on Google Drive;


## Beach Attribute Dataset

- Columns that had the same value were dropped;
- Column "year" was dropped since we already had a column called "date" and it wasn't adding any additional information;
- Duplicated rows were dropped;
- There were still many beaches that were appearing twice on the dataframe;
    - Upon inspection, all the data is the same except for the BeachLength column;
    - This was fixed by dropping the "BeachLength (Mi)" column.
    - The duplicate rows that were left were then dropped as well.
- The name of the columns were standardized to match the table schema on pgAdmin in preparation for loading the data to the database.


## Water Quality Dataset

- The columns that had unique values were equal to zero or one were dropped, as they are not relevant for the analysis.
- A new column was created to hold the "risk_level" obtain from the column "bacteria_counts", where upon online research it was possible to identify what are the bacteria levels that are considered low, medium, and high risk.
- Necessary datatypes were converted from object to datetime, and then repositioned on the dataframe.
- Columns for "week" and "month" were created out of the date column in case we would need it for the machine learning predictions.
- The name of the columns were standardized to match the table schema on pgAdmin in preparation for loading the data to the database.


## Main Weather Station Dataset

- Null values were dropped;
- Necessary datatypes were converted from object to datetime, and then repositioned on the dataframe.
- The name of the columns were standardized to match the table schema on pgAdmin in preparation for loading the data to the database.


## Weather Station 18

- Null values were dropped;
- Null and unnecessary columns were dropped;
- Necessary datatypes were converted from object to datetime, and then repositioned on the dataframe.
- The name of the columns were standardized to match the table schema on pgAdmin in preparation for loading the data to the database.

## Weather Station 54

- Null values were dropped;
- Null and unnecessary columns were dropped;
- Necessary datatypes were converted from object to datetime, and then repositioned on the dataframe.
- The name of the columns were standardized to match the table schema on pgAdmin in preparation for loading the data to the database.


## Load the Data into the Database

- To load the datasets one load function was created for each dataset;
    - Where a connection to PostgreSql was created using an AWS RDS endpoint.
    - SQLAlchemy was used to create the engine to load the dataframes into PostgreSQL tables.
