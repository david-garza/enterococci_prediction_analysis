from flask import Flask, render_template

app = Flask(__name__)

days = {"value": [1, 2, 3], "day":['monday','tuesday','wednesday']}
@app.route("/")
def index():
    return render_template('index.html',days=days)