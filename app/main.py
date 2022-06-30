from unittest import result
from flask import Flask, flash, redirect, render_template, request, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template(
        'index.html',
        dates=[{'name':'red'}, {'name':'green'}, {'name':'blue'}])

@app.route("/test" , methods=['GET', 'POST'])
def test():
    if request.method == 'POST':
        date_select = request.form.get('date_select')
        beach_select = request.form.get('beach_select')

        response = str(date_select) + ' ' + str(beach_select)
        
        return (str(response))
    
    