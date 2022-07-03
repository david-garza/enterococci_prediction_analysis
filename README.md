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

# Team Communications Protocols

## Zoom Meeting
The team will meet weekly via zoom at 9:00 AM on Monday to map out a work plan and duties for the coming week.

## Slack
Primary channel for real time communications between team members and instructional staff.

## GitHub
Team will comment on pull request and issues to create a record of work specific to changes in the repo.

## Project Outline

### ETL

ETL was performed on CSV files listed in data sources above. All of the ETL work was performed in python using pandas. The connection to the database was established through SQLAlchemy.

Details of the ETL process can be found in this [Juypter Notebook](ETL/ETL.ipynb).

### Database

An instance of PostgreSQL on AWS is used to hold the transformed CSV files. The database contains 5 tables containing information about beach properties, bacteria sample records, and historical data from three different weather stations. The tables were joined to create a view in PostgreSQL that can be accessed by the machine learning model via SQLAlchemy.

The detailed information on the database can be found in the [datbase folder](Database).

### Explorartory Analysis

Exploratory analysis was done using Tableau. The findings were used to enhance and narrow the machine learning options.

The Tableau story can be found [here](https://public.tableau.com/app/profile/bianca.taise.pommerening/viz/new_join_galveston_beach_bacteria/WaterQualityatGalvestonIslandBeaches).

### Machine Learning

The machine learning model evolved from a regression model to a classifier from feed back in model performance and findings in the exploratory analysis. 

A detailed write up of the machine learning model evolution can be found [here](machine_learning/README.md). 

### GSlides

The slide presentation can be found [here](https://docs.google.com/presentation/d/1el09AXHnyRaLuhO7MKxmYrAIeOkY54n6twwczkmwBEo/edit?usp=sharing).
### Dashboard

Draft dashboard is a website that allows users to interactively explore the data.

Information can be found in the [website folder](website).

# Interactive Website

[Beach Bacteria Risk Prediction](https://dev-bacteria.herokuapp.com/)
