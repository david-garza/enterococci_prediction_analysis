# JaveScript Version
from flask import Flask, redirect, render_template, request, url_for
from logging.config import dictConfig
import logging
from time import sleep

# Custom packages
from drop_down_list_setup import get_dates_list
from ml_predictor import predictor

application = Flask(__name__)

@application.route('/')
def index():
    data = get_dates_list()
    return render_template('index.html',data=data)

@application.route("/predict" , methods=['GET','POST'])
def predict():
    if request.method == 'POST':
        request_from_js = request.get_json()
        while not request_from_js:
            sleep(1)       # code is running faster than flask can received response. Use sleep to wait for flask to get the package from postman or JS http request
        application.logger.debug("%s <<=== received debug from postman :: ", request_from_js)
        
        # Data for testing flask to JS communications
        # prediction = {'prediction_label': 'low_risk', 'prediction_value': 42}

        prediction = predictor(request_from_js)
        return prediction
    else:
        return "Nothing to return"
if __name__=="__main__":
    application.run(debug=False)