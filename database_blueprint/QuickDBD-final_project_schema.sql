-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/lImCVd
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Beach_Attributes" (
    "Beach_ID" varchar   NOT NULL,
    "Beach_Name" varchar   NOT NULL,
    "Tier" int   NOT NULL,
    "Start_Lat" float   NOT NULL,
    "Start_Long" float   NOT NULL,
    "End_lat" float   NOT NULL,
    "End_Long" float   NOT NULL,
    "Water_Body_Type" varchar   NOT NULL,
    CONSTRAINT "pk_Beach_Attributes" PRIMARY KEY (
        "Beach_ID"
     )
);

CREATE TABLE "Water_Quality" (
    "Date" date   NOT NULL,
    "Year" int   NOT NULL,
    "Beach_ID" varchar   NOT NULL,
    "Beach_Name" varchar   NOT NULL,
    "Station_ID" varchar   NOT NULL,
    "Station_Name" varchar   NOT NULL,
    "Identifier" varchar   NOT NULL,
    "Start_Time" time   NOT NULL,
    "Zone_Code" varchar   NOT NULL,
    "Bacteria_Count" decimal   NOT NULL,
    "Result_Measure_Unit" varchar   NOT NULL,
    "Result_Analytical_Method_Identifier" varchar   NOT NULL,
    "Result_Analytical_Method_Name" varchar   NOT NULL,
    CONSTRAINT "pk_Water_Quality" PRIMARY KEY (
        "Date","Beach_ID"
     )
);

CREATE TABLE "Weather_Station_1" (
    "Date1" date   NOT NULL,
    "Avg_Temp1" decimal   NOT NULL,
    "Max_Temp1" decimal   NOT NULL,
    "Min_Temp1" decimal   NOT NULL,
    "Precipitation1" decimal   NOT NULL,
    "Snowfall1" decimal   NOT NULL,
    "Snow_Depth1" decimal   NOT NULL,
    CONSTRAINT "pk_Weather_Station_1" PRIMARY KEY (
        "Date1"
     )
);

CREATE TABLE "Weather_Station_2" (
    "Date2" date   NOT NULL,
    "Avg_Temp2" decimal   NOT NULL,
    "Max_Temp2" decimal   NOT NULL,
    "Min_Temp2" decimal   NOT NULL,
    "Precipitation2" decimal   NOT NULL,
    "Snowfall2" decimal   NOT NULL,
    "Snow_Depth2" decimal   NOT NULL,
    CONSTRAINT "pk_Weather_Station_2" PRIMARY KEY (
        "Date2"
     )
);

CREATE TABLE "Weather_Station_3" (
    "Date3" date   NOT NULL,
    "Avg_Temp3" decimal   NOT NULL,
    "Max_Temp3" decimal   NOT NULL,
    "Min_Temp3" decimal   NOT NULL,
    "Precipitation3" decimal   NOT NULL,
    "Snowfall3" decimal   NOT NULL,
    "Snow_Depth3" decimal   NOT NULL,
    CONSTRAINT "pk_Weather_Station_3" PRIMARY KEY (
        "Date3"
     )
);

CREATE TABLE "Weather_Station_4" (
    "Date4" date   NOT NULL,
    "Avg_Temp4" decimal   NOT NULL,
    "Max_Temp4" decimal   NOT NULL,
    "Min_Temp4" decimal   NOT NULL,
    "Precipitation4" decimal   NOT NULL,
    "Snowfall4" decimal   NOT NULL,
    "Snow_Depth4" decimal   NOT NULL,
    CONSTRAINT "pk_Weather_Station_4" PRIMARY KEY (
        "Date4"
     )
);

CREATE TABLE "Weather_Station_5" (
    "Date5" date   NOT NULL,
    "Avg_Temp5" decimal   NOT NULL,
    "Max_Temp5" decimal   NOT NULL,
    "Min_Temp5" decimal   NOT NULL,
    "Precipitation5" decimal   NOT NULL,
    "Snowfall5" decimal   NOT NULL,
    "Snow_Depth5" decimal   NOT NULL,
    CONSTRAINT "pk_Weather_Station_5" PRIMARY KEY (
        "Date5"
     )
);

CREATE TABLE "Weather_Station_6" (
    "Date6" date   NOT NULL,
    "Avg_Temp6" decimal   NOT NULL,
    "Max_Temp6" decimal   NOT NULL,
    "Min_Temp6" decimal   NOT NULL,
    "Precipitation6" decimal   NOT NULL,
    "Snowfall6" decimal   NOT NULL,
    "Snow_Depth6" decimal   NOT NULL,
    CONSTRAINT "pk_Weather_Station_6" PRIMARY KEY (
        "Date6"
     )
);

CREATE TABLE "Weather_Station_7" (
    "Date7" date   NOT NULL,
    "Avg_Temp7" decimal   NOT NULL,
    "Max_Temp7" decimal   NOT NULL,
    "Min_Temp7" decimal   NOT NULL,
    "Precipitation7" decimal   NOT NULL,
    "Snowfall7" decimal   NOT NULL,
    "Snow_Depth7" decimal   NOT NULL,
    CONSTRAINT "pk_Weather_Station_7" PRIMARY KEY (
        "Date7"
     )
);

CREATE TABLE "Weather_Station_8" (
    "Date8" date   NOT NULL,
    "Avg_Temp8" decimal   NOT NULL,
    "Max_Temp8" decimal   NOT NULL,
    "Min_Temp8" decimal   NOT NULL,
    "Precipitation8" decimal   NOT NULL,
    "Snowfall8" decimal   NOT NULL,
    "Snow_Depth8" decimal   NOT NULL,
    CONSTRAINT "pk_Weather_Station_8" PRIMARY KEY (
        "Date8"
     )
);

ALTER TABLE "Water_Quality" ADD CONSTRAINT "fk_Water_Quality_Beach_ID" FOREIGN KEY("Beach_ID")
REFERENCES "Beach_Attributes" ("");

ALTER TABLE "Weather_Station_1" ADD CONSTRAINT "fk_Weather_Station_1_Date1" FOREIGN KEY("Date1")
REFERENCES "Water_Quality" ("");

ALTER TABLE "Weather_Station_2" ADD CONSTRAINT "fk_Weather_Station_2_Date2" FOREIGN KEY("Date2")
REFERENCES "Water_Quality" ("");

ALTER TABLE "Weather_Station_3" ADD CONSTRAINT "fk_Weather_Station_3_Date3" FOREIGN KEY("Date3")
REFERENCES "Water_Quality" ("");

ALTER TABLE "Weather_Station_4" ADD CONSTRAINT "fk_Weather_Station_4_Date4" FOREIGN KEY("Date4")
REFERENCES "Water_Quality" ("");

ALTER TABLE "Weather_Station_5" ADD CONSTRAINT "fk_Weather_Station_5_Date5" FOREIGN KEY("Date5")
REFERENCES "Water_Quality" ("");

ALTER TABLE "Weather_Station_6" ADD CONSTRAINT "fk_Weather_Station_6_Date6" FOREIGN KEY("Date6")
REFERENCES "Water_Quality" ("");

ALTER TABLE "Weather_Station_7" ADD CONSTRAINT "fk_Weather_Station_7_Date7" FOREIGN KEY("Date7")
REFERENCES "Water_Quality" ("");

ALTER TABLE "Weather_Station_8" ADD CONSTRAINT "fk_Weather_Station_8_Date8" FOREIGN KEY("Date8")
REFERENCES "Water_Quality" ("");

