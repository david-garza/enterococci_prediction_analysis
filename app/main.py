from flask import Flask, redirect, render_template, request, url_for

app = Flask(__name__)


data = [{'name':'red'}, {'name':'green'}, {'name':'blue'}]

@app.route('/')
def index():
    return render_template(
        'index.html',
        data=data)

@app.route("/test" , methods=['GET', 'POST'])
def test():
    if request.method == 'POST':
        date_select = request.form.get('date_select')
        beach_select = request.form.get('beach_select')

        response = date_select + ' ' + beach_select

        return (response)
    
    