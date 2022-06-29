from flask import Flask, render_template

app = Flask(__name__)

d = {"date":['monday','tuesday','wednesday']}
@app.route("/")
def index():
    return render_template('index.html',table=d)