/* notes */

select * from beach_attributes;
select * from water_quality;
select * from weather_station1



select count(distinct snowfall1)
from weather_station1
/* There are 6 distinct results from the snowfall1 column. 
Two of those results being 0 and null 
that leaves a remainder of 4 snowfall days of the 16983 records */

/* ATTEMPT TO CHANGE THE DATE1 COLUMN NAME IN WEATHER_STATION1 TO DATE*/
EXECUTE sp_rename 'weather_station1.date1', 'date', 'COLUMN';

/* RIGHT JOIN SO THAT DATA IS EXCLUDED FROM BEACH ATTRIBUTES IF THERE IS NOT A MATCH IN WATER QUALITY, ALL ROWS IN WATER QUALITY WILL BE INCLUDED AND WILL*/

CREATE VIEW galveston_data_join as
SELECT beach_attributes.beach_id, beach_attributes.beach_name, start_lat, start_long, end_lat, end_long, waterbody_type, station_id, station_name, bacteria_count, risk_level, water_quality.date, week, month, year, avg_temp1, max_temp1, min_temp1, precipitation1, precipitation54, precipitation18
FROM beach_attributes
RIGHT JOIN water_quality 
ON beach_attributes.beach_id = water_quality.beach_id
LEFT JOIN weather_station1
ON water_quality.date = weather_station1.date1
LEFT JOIN weather_station54
ON water_quality.date = weather_station54.date54
LEFT JOIN weather_station18
ON water_quality.date = weather_station18.date18
WHERE start_lat>29.083384 AND end_lat<29.335302 AND start_long>-95.115837 AND end_long<-94.732335;


