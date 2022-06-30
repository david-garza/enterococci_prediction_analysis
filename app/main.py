from flask import Flask, redirect, render_template, request, url_for
from .drop_down_list_setup import data_return

app = Flask(__name__)

@app.route('/')
def index():
    data = data_return()
    return render_template('index.html',data=data)

@app.route("/predict" , methods=['GET', 'POST'])
def test():
    if request.method == 'POST':
        date_select = request.form.get('date_select')
        beach_select = request.form.get('beach_select')

        response = date_select + ' ' + beach_select

        return (response)
    
    