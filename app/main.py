from flask import Flask, flash, redirect, render_template, request, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template(
        'index.html',
        data=[{'name':'red'}, {'name':'green'}, {'name':'blue'}])

@app.route("/test" , methods=['GET', 'POST'])
def test():
    if request.method == 'POST':
        select = request.form.get('comp_select')
        return (str(select))
    
    