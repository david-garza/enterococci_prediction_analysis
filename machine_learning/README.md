# Machine Learning Overview

Files in this folder
- ml_regression.ipynb: Initial attempt to estimate by regression
- ml_classifier.ipynb: out of box classifier models run on different features
- ml_classifier_opt.ipynb: copy of ml_classifier, but with hyper feature optimization applied to models
- ml_final.ipynb: "Winning" Adabooster model applied to all and city specific beach data

## Preliminary Data Preprocessing

Several attempts at preprocessing were attempted because several different types of models were used to predict the bacteria counts, regression,  or risk level, classifier.

### Encoding

Features that were strings such as beach name or station name had to be encoded. The pandas method get_dummies() was applied to these bariables to transform them into binary categories.

Encoding was used in both the regression and classifier models.

## Scaling

### Regression Models

Initial models attempted to predict the bacteria counts using linear regression models. This immediately required scaling the features data using the standardscaler() function from sklearn.

The target variable distribution skewed hard right. Attempts to transform the target variable via log transforamtion improved R-squared but not significantly.

### Classifier Models

Standard scaler was still applied to the input features, but no longer needed for the target variable.

## Preliminary Feature Engineering and Selection

### Feature Selection

Initial research suggested that E. Coli contamination occurs when rain falls onto land based sources and the run off flows into the ocean. 

To model runoff as best as possible, the following features were included:
- Precipitation from several weather stations as a proxy for specific location rain run off.
- Temperature as a proxy for bacteria grow rate, assuming that bacteria grow faster in warmer weather.
- Beach sample station ids, as a proxy for beach locations.

Later exploratory analysis, would lead to subsetting the beaches that were closets to the statiosn that recorded precipitation. This filtering improved the balanced accuracy of the classifier models.

### Feature Engineering

The main models tested were the classifiers. During classifier fitting and evaluation, the following feature engineering was performed to improve the model accuracy.

#### 5 Day Rolling Averages and Totals

It was proposed that if run off was washing bacteria from land based sources into the ocean there would probably be a delay from when the rain occurs and when the bacteria was detected. For each station that recorded precipitation, a 5 day prior sum of precipitation was engineered to the data set.

A 5 day prior average temperature for average, min, and max temperature was also engineered and added to the data.

Including the past temperature and precipitation data improved the balanced accuracy of the model.

#### Target Variable Level Reduction

Switching to a classifier model improved the accuracy of the model. Initially, the models attempted to classify the target variable into low, medium, and high risk. 

The target variable was reduced to two levels low risk and risky, a bucket of medium and high risk. This bucketing of the target variable imporved the balanced accuracy of the models.

## Training and Testing Split

The function train_test_split() from sklearn was used split the data into train and test sets. The default parameters except for random_state and stratify.

Random state was set to ensure reproducibility during evluation and after feature changes.

The target variable was supplied for startify, because the target variable is not balanced. Low risk classification signifiicantly outnumbers medium and high risk classifications.

## Model Selection

Model selection was very iterative in both input features used and model fitted. 

### Feature Combinations

Ideally, merging all of the weather stations across the island with the bacteria sample data would provide the best data resolution for run off and beach location. 

The problem is that the weather data is patchy historically, therefore, merges would create NAs over non-overlapping periods of time. The greatest date overlap with the bacteria data and other weather stations was with the weather station at Scholes field, station 18, and station 54. 

Data sets were inputed using one, two, or all three stations. Each additional station merged with the data would also reduce the number of viable rows.

Station 18 and 54 are located in the city, therefore, and additional filtered data set of all beaches and city only beaches was also submitted to fitting.

The highest balanced accuracy occurs in the data set with Scholes and startion 18 and filtered to only city beaches. Adding station 54 reduces the accuracy possibly due to the reduction of viable rows.

### Models

Classifier models were fitted using all of the feature combinations listed above into the following models:

1. Linear SVC
2. KNeighbors Classifier
3. SVC

Ensemble Classifiers
1. Random Forest Classifier
2. AdaBoost Classifier
3. Gradient Boosting Classifier

In all combinations of features, AdaBoost always had the highest balanced accuracy.