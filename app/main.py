from flask import Flask, render_template

app = Flask(__name__)

test = {"date":['2022-06-23','2022-06-22','2022-06-21']}

@app.route("/")
def index():
    return render_template('index.html',test=test)