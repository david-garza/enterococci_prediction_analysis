from flask import Flask

app = Flask(__name__)

test = {"text":"Test message to confirm that it is working"}
def index():
    return "only flask no rendering"