from flask import Flask, render_template

app = Flask(__name__)

test = {"text":"Heroku and Flask deplotyment test"}

@app.route("/")
def index():
    return render_template('index.html',test=test)