from flask import Flask, redirect, render_template, request, url_for
from .drop_down_list_setup import get_dates_list

app = Flask(__name__)

@app.route('/')
def index():
    data = get_dates_list()
    return render_template('index.html',data=data)

@app.route("/predict" , methods=['GET','POST'])
def predict():
    #if request.method == 'POST':
        # date_select = request.form.get('date_select')
        # beach_select = request.form.get('beach_select')

    request_from_js = request.get_json()

        # response = {'date':date_select,'station':beach_select}
        #return render_template('results.html',response=response)

    return request_from_js

if __name__=="__main__":
    app.run(debug=True)
