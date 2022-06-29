from flask import Flask, render_template

app = Flask(__name__)



@app.route("/")
def index():
    colors = [{"name":"red"},
        {"name":"green"},
        {"name":"blue"}]
    return render_template("index.html",colors=colors)