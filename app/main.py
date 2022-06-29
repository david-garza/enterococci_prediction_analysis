from flask import Flask

app = Flask(__name__)

def index():
    return "only flask no rendering"