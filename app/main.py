# JaveScript Version
from flask import Flask, redirect, render_template, request, url_for
from logging.config import dictConfig
import logging
from time import sleep

# Custom packages
from .drop_down_list_setup import get_dates_list
from .ml_predictor import predictor

app = Flask(__name__)

@app.route('/')
def index():
    data = get_dates_list()
    return render_template('index.html',data=data)

@app.route("/predict" , methods=['GET','POST'])
def predict():
    if request.method == 'POST':
        request_from_js = request.get_json()
        while not request_from_js:
            sleep(1)       # code is running faster than flask can received response. Use sleep to wait for flask to get the package from postman or JS http request
        app.logger.debug("%s <<=== received debug from postman :: ", request_from_js)
        
        prediction = predictor(request_from_js)
        return render_template('results.html',prediction=prediction)
    else:
        return "Nothing to return"
if __name__=="__main__":
    app.run(debug=True)