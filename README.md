# Beach Bacteria Prediction Modeling Project

## Problem

Texas beaches are a great place to relax and have fun, but there are potential dangers in the water. Bacteria levels can exceed safe levels causing the state to close beaches and loss of revenue for locals or at worst make bathers sick. 

The state currently tests and reports bacteria levels for several beaches and displays bacteria counts at [TexasBeachWatch.com](https://cgis.glo.texas.gov/Beachwatch/#).

The problem is that testing occurs weekly or biweekly, there is a delay time of at least three if not more days from when the sample is taken and finally reported to the public. By the time results come back, bacteria levels may have risen to unsafe levels.

## Proposal

Using historical bacteria sample and weather records, we propose to train a regression model that estimates the bacteria counts when provided weather information. If successful, the delay from testing to reporting to the public would be greatly reduced.

## Data Sources

- Beach Advisory and Closing On-line Notification historical bacteria levels [example](https://beacon.epa.gov/ords/beacon2/f?p=121:38:16858900653526::::). (CSV download)

- Historical Weather Data [example](https://www.ncei.noaa.gov/access/past-weather/Galveston%2C%20Texas). (CSV download)

## Appendix

- [Texas Beaches May Be Filthier Than We Realize - Texas Monthly](https://www.texasmonthly.com/news-politics/texas-beaches-filthy-feces-testing/)

# Team Communications Protocols

## Zoom Meeting
The team will meet weekly via zoom at 9:00 AM on Monday to map out a work plan and duties for the coming week.

## Slack
Primary channel for real time communications between team members and instructional staff.

## GitHub
Team will comment on pull request and issues to create a record of work specific to changes in the repo.

# Deliverables Update

## Database

Our data consists of twelve datasets in CSV format files, which two of them hold beach attributes and water quality while the other ten represent weather stations on Galveston Island.

Database items can be found [here](Database).

### Database Mockup Design

- Three out of the twelve datasets were used.
- Google Drive is temporarily storing the datasets.
- Pandas library was used for some basic ETL.
- SQLalchemy was used to create the engine to connect and load the data frames to a PostgreSQL database.
- AWS RDS instance was used as our Relational Database Solution.
- PgAdmin was used to manage the tables in the database.

### Loading Test

Below we can see the three tables loaded on pgAdmin without problems:

#### **Beach Attributes**

![Beach_Attributes](Database/Resources/Beach_Attributes.png)

- Names of the columns were standardized for easier readability and compatibility.

#### **Water Quality**


![Water_Quality](Database/Resources/Water_Quality.png)

- Names of the columns were standardized for easier readability and compatibility.

#### **Weather Station 1**

![Weather_Station1](Database/Resources/Weather_Station1.png)

- Names of the columns were standardized for easier readability and compatibility.
- It was decided not to drop any columns of the Weather_Station1 table because prior to that we need to further investigate the other weather station files to see if we will combine them in any way.

### Entity Relationship Diagram - ERD

![QuickDBD-final_project_schema](Database/Resources/QuickDBD-final_project_schema.png)

- The Entity Relationship Diagram is at its very first stage where the tables have not been connected because we don't have unique keys yet.

### Joining data to Prep for Machine Learning

Tables:

- beach_attributes
- water_quality
- weather_station1
- weather_station18
- weather_station54

Utilized SELECT Count ( distint snowfall1) to examine the number of snowfall days in weather_station1. Of the 16983 records only 4 days registard snowfall. This lead to the teams decision to drop the dnowfall1 column and not use it as part of our analysis. 



### Future Work / Suggestions


- ERD and Database Schema
	- Try to find a combination of features that make a combined unique key after further cleaning and investigating the datasets.

## Machine Learning

Machine learning items can be found [here](machine_learning).

### Stage 1 Work

### Dependencies 
- imported pandas as pd- this dependency brings the pandas data analysis library into our current environment and gives it the alias of pd.
- from pathlib import Path- makes the CSV Path class available to our program
- import matplotlib.pyplot as plt- allows the use of a module within matplotlib to be utilized to make plots by calling on the alias plt
- from sklearn.linear_model import LinearRegression- LinearRegression fits a linear model with coefficients w = (w1, …, wp) to minimize the residual sum of squares between the observed targets in the dataset, and the targets predicted by the linear approximation.
- from sklearn.preprocessing import OneHotEncoder- This encoding is needed for feeding categorical data to many scikit-learn estimators, notably linear models and SVMs with the standard kernels.
- from sklearn.preprocessing import StandardScaler-  is utilized to standardize features by removing the mean and scaling to unit variance.
- from sklearn.model_selection import train_test_split- is used to split arrays or matrices into random train and test subsets.

### Read In CSV
- Currently, we are utilizing a mock CSV file- At this stage in our project our CSV file in not ready to be read into our machine learning model. The Mock CSV is reflective of all the data that will be analyzed in our final CSV.
- Examined head and tail of data to ensure data frame had not been distorted.

### Pre-Processing
- View data types- some of our data was in the form of integers and other columns were strings. We needed to convert the strings to integers in order to analyze the data. There was also a large difference in the size of integers in our data set. We had temperatures which were large numbers relative to the decimal parts per million bacteria levels in the water. This had to be remedied by scaling the data prior to analysis. 
- Dropped unnecessary data from the data set- our proposal is to bacteria counts using weather information. However, it could be possible that beach type or location may affect bacteria counts as well. Different beach types vary in water dept and utilizing beach names could help us determine if proximity to the city plays any role in bacteria levels. 
- Converted beach name and beach type into integer values- beach type and beach name are features in our matrix therefore they need to be changed from strings to integers. 
- Scaled data so numeric values were standardized- The variance in numbers could have caused errors in the analysis. We scaled the data prior to fitting it to the machine learning model. The algorithm will converge faster when features are relatively smaller or closer to a normal distribution.
- Split the data into training and testing data sets- this is necessary to determine how well your linear regression is fit to the data.
### Modeling
- Fit a linear regression model- regression is used to predict a number, in this case the number of bacteria.  Regressions are the simplest from of regression model algorithmically and visually. 
- Made predictions using the testing data.
- Evaluated the model using R-square score - our modeling score is -0.15 this means that our model, when utilizing the mock data, this means that there might be a correlation between bacteria count and weather. Had our R-squared value been 0, it would tell us weather can’t be used to predict bacteria counts.
