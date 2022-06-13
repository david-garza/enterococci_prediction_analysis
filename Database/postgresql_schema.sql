-- beach_attributes table
CREATE TABLE beach_attributes (
	Beach_id varchar,
	Beach_Name varchar,
	Tier int,
	Start_lat float,
	Start_long float,
	End_lat float,
	End_long float,
	Waterbody_type varchar
);

-- Select all from Beach_Attributes table
SELECT * FROM beach_attributes;


-- Water_Quality_Table
CREATE TABLE water_quality (
	date date,
	year int,
	beach_id varchar,
	beach_name varchar,
	station_id varchar,
	station_name varchar,
	identifier varchar,
	start_time time,
	zone_code varchar,
	bacteria_count decimal,
	result_measure_unit varchar,
	result_analytical_method_identifier varchar,
	result_analytical_method_name varchar
);
	
	
-- Select all from Water_Quality table
SELECT * FROM water_quality;

-- weather_station1
CREATE TABLE weather_station1 (
	date1 date, 
	avg_temp1 decimal,
	max_temp1 decimal,
	min_temp1 decimal,
	precipitation1 decimal,
	snowfall1 decimal,
	snow_depth1 decimal
);
