/* Add d3 to select drop items form frontend */
var curRoot = window.location.href;
var predictURL = `${curRoot}predict`;
var xhttpReq = new XMLHttpRequest();
xhttpReq.open("POST", predictURL, true);
xhttpReq.setRequestHeader('Content-type', 'application/json');
xhttpReq.onreadystatechange = function () {
  if (xhttpReq.readyState === XMLHttpRequest.DONE) {
    var status = xhttpReq.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      // The request has been completed successfully
      console.log("this is my prediction :: ", xhttpReq.responseText); /* responseText is the return from flask */
      document.getElementById("resultPrediction") /* set this on the index page to return the data */
        .innerText = JSON.parse(xhttpReq.responseText)['prediction_value']; /*Key inside the json object so value would be prediction_value */
      /* Add chart JavaScript here*/
      $(function () {/* w ww. j  a  v a 2s. c om*/
        $('#gauge').highcharts({
          chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
          },
          title: {
            text: 'Bacteria Risk Level'
          },
          pane: {
            startAngle: -90,
            endAngle: 90,
            background: null
          },
          plotOptions: {
            gauge: {
              dataLabels: {
                enabled: false
              },
              dial: {
                baseLength: '0%',
                baseWidth: 10,
                radius: '100%',
                rearLength: '0%',
                topWidth: 1
              }
            }
          },
          // the value axis
          yAxis: {
            labels: {
              enabled: true,
              distance: 20,
              formatter: function () {
                var value = this.value, string;
                if (value < 50) {
                  string = 'Safe'
                } else if (value > 50) {
                  string = 'Unsafe';
                }
                return string;
              }
            },
            tickPosition: 'outside',
            tickPositions: [0, 50, 100],
            minorTickLength: 0,
            min: 0,
            max: 100,
            plotBands: [{
              from: 0,
              to: 50,
              color: 'rgb(155, 187, 89)', // green
              thickness: '50%'
            }, {
              from: 50,
              to: 100,
              color: 'rgb(192, 0, 0)', // red
              thickness: '50%'
            }]
          },
          series: [{
            name: 'Speed',
            data: [25]
            /*data: [parseInt(xhttpReq.responseText['prediction_value'])]*/
          }]
        });
      });
    } else {
      alert("WARNING :: REQUEST ERROR !!!");
    }
  }
};
xhttpReq.onerror = err => console.log(`Send Request Error:\n${err}`);
var sendPkg = {
  date_index: "16998",
  station_id: "GAL048"
};
xhttpReq.send(JSON.stringify(sendPkg));
console.log("===>JSON :: ", JSON.stringify(sendPkg))