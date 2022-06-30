from flask import Flask, redirect, render_template, request, url_for
from .drop_down_list_setup import get_dates_list

app = Flask(__name__)

@app.route('/')
def index():
    data = get_dates_list()
    return render_template('index.html',data=data)

@app.route("/predict" , methods=['POST'])
def predict():
    if request.method == 'POST':
        date_select = request.form.get('date_select')
        beach_select = request.form.get('beach_select')

        response = date_select + ' ' + beach_select

        return (response)
    
    