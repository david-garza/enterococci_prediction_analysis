# Database Work Log

## Segment 1 - Bianca Taise Pommerening

Our data consists of twelve datasets in CSV format files; which two of them hold beach attributes and water quality while the other ten represent weather stations on Galveston Island.

## Database Mockup Design:

- Three out of the twelve datasets were used;
- Google Drive is temporarily storing the datasets;
- Pandas library was used for some basic ETL;
- SQLalchemy was used to create the engine to connect and load the dataframes to a PostgreSQL database;
- AWS RDS instance was used as our Relational Database Solution;
- PgAdming was used to manage the tables in the database.


## Loading Test

Below we can see the three tables loaded on pgAdmin without problems:

### **Beach Attributes**

![Beach_Attributes](./Resources/Beach_Attributes.png)

- Names of the columns were standardized for easier readability and compatibility.

### **Water Quality**


![Water_Quality](./Resources/Water_Quality.png)

- Names of the columns were standardized for easier readability and compatibility.

### **Weather Station 1**

![Weather_Station1](./Resources/Weather_Station1.png)

- Names of the columns were standardized for easier readability and compatibility.
- It was decided not to drop any columns of the Weather_Station1 table because prior to that we need to further investigate the other weather_station files to see if we will combine them in any way.

## Entity Relationship Diagram - ERD

![QuickDBD-final_project_schema](./Resources/QuickDBD-final_project_schema.png)

- The Entity Relationship Diagram is at its very first stage where the tables have not been connected because we don't have unique keys yet.


## Second Segment Suggestions

- Dataframes:
	- Clean and investigate Datasets further.
	- Decide which columns to drop and whether we are combining these datasets in any other way.


- ERD and Database Schema
	- Try to find a combination of features that make a combined unique key after further cleaning and investigating the datasets.

