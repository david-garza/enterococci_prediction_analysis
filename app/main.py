from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

d = {"date":['2022-06-23','2022-06-22','2022-06-21']}
df = pd.DataFrame(data=d)
@app.route("/")
def index():
    return render_template('index.html',table=df)