from flask import Flask, render_template

app = Flask(__name__)

test = {"message":"Test message to confirm that it is working"}
def index():
    return render_template('index.html',test=test)