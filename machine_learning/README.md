# Machine Learning Work Log

## Stage 1 - Laura Grander
*Updated from Laura by e-mail on 6/12/2022*

### Dependencies 
- import pandas as pd- this dependency brings the pandas data analysis library into our current environment and gives it the alias of pd.
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
- Dropped unnecessary data from the data set- our proposal is to predict the weather temperature (avg,min,max) and precipitation affect the bacteria counts. However, it could be possible that beach type or location may affect bacteria counts as well. Different beach types vary in water dept and utilizing beach names could help us determine if proximity to the city plays any role in bacteria levels. 
- Converted beach name and beach type into integer values- beach type and beach name are features in our matrix therefore they need to be changed from strings to integers. 
- Scaled data so numeric values were standardized- The variance in numbers could have caused errors in the analysis. We scaled the data prior to fitting it to the machine learning model. The algorithm will converge faster when features are relatively smaller or closer to a normal distribution.
- Split the data into training and testing data sets- this is necessary to determine how well your linear regression is fit to the data.
### Modeling
- Fit a linear regression model- regression is used to predict a number, in this case the number of bacteria.  Regressions are the simplest from of regression model algorithmically and visually. 
- Made predictions using the testing data.
- Evaluated the model using R-square score - our modeling score is -0.15 this means that our model, when utilizing the mock data, this means that there might be a correlation between bacteria count and weather. Had our R-squared value been 0, it would tell us weather can’t be used to predict bacteria counts.