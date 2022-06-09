# Real Time Beach Bacteria Prediction Modeling

## Problem

Texas beaches are a great place to relax and have fun, but there are potential dangers in the water. Bacteria levels can exceed safe levels causing the state to close beaches (loss of revenue for locals) or at worst make bathers sick. 

The state currently tests and reports bacteria levels for several beaches and displays bacteria counts at [TexasBeachWatch.com](https://cgis.glo.texas.gov/Beachwatch/#).

The problem is that testing occurs weekly or bi weekly, there is a delay time of at least 3 if not more days in taking the sample, sending the sample to a lab, and then testing the sampe. By the time results come back, bacteria levels may have risen to unsafe levels.

## Proposal

Using historical bacteria testing and weather records, I propose to train a regression model that estimates the bacteria levels for a beach for even given day using current / real time weather conditions. If successful, the delay from testing to reporting to the public would be greatly reduced.