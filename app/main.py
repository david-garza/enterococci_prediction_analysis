from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

d = {"date":['monday','tuesday','wednesday']}
df = pd.DataFrame(data=d)
@app.route("/")
def index():
    return render_template('index.html',table=df)