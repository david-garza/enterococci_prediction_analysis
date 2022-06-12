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


### Future Work / Suggestions

- Data frames:
	- Clean and investigate Datasets further.
	- Decide which columns to drop and whether we are combining these datasets in any other way.


- ERD and Database Schema
	- Try to find a combination of features that make a combined unique key after further cleaning and investigating the datasets.

## Machine Learning

Machine learning items can be found [here](machine_learning).

### Stage 1 Work

1.	Imported Dependencies.
2.	Loaded mock CSV file.
3.	Examined head and tail of data verify read.
4.	Pre-Processing
    1.	Checked data types.
    2.	Dropped unnecessary data from the data set.
    3.	Converted beach name and beach type into integer values.
    4.	Scaled data so numeric values were standardized.
    5.	Split the data into training and testing data sets.
5.	Modeling
    1.	Fit a linear regression model.
    2.	Made predictions using the testing data.
    3.	Evaluated the model using R-square score.