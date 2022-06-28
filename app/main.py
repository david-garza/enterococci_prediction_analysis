from flask import Flask, render_template

app = Flask(__name__)

test = "Heroku and Flask deplotyment test"

@app.route("/")
def index():
    return render_template('index.html',test)