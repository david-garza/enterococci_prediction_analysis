from flask import Flask, redirect, render_template, request, url_for
from .drop_down_list_setup import get_dates_list
from .ml_predictor import predictor

app = Flask(__name__)

@app.route('/')
def index():
    data = get_dates_list()
    return render_template('index.html',data=data)

@app.route("/predict" , methods=['GET','POST'])
def predict():
    if request.method == 'POST':
        date_index = request.form.get('date_select')
        station_id = request.form.get('beach_select')

        # Create expected dictionary for function
        # input = {'date_index': date_index, 'station_id': station_id}

        input = {'date_index': int(date_index), 'station_id': station_id}
        prediction = predictor(input)
        return render_template('results.html',prediction=prediction)


    # request_from_js = request.get_json()
    # return request_from_js

# if __name__=="__main__":
#     app.run(debug=True)
