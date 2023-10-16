/* Get inputs from drop down menus */
var date = d3.selectAll("#date_select").node();
var beach = d3.selectAll("#beach_select").node();

/* Define variables needed for API request */
var curRoot = window.location.href;
var predictURL = `${curRoot}predict`;
var xhttpReq = new XMLHttpRequest();

/* Initalize API request */
xhttpReq.open("POST", predictURL, true);
xhttpReq.setRequestHeader('Content-type', 'application/json');

/* Function that makes request to predict route in flask and returns the prediciton/ call back to a div on the webpage */
xhttpReq.onreadystatechange = function () {
  if (xhttpReq.readyState === XMLHttpRequest.DONE) {
    var status = xhttpReq.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      // The request has been completed successfully
      console.log("this is my prediction :: ", xhttpReq.responseText); /* responseText is the return from flask */
      
      /* Returns values to HTML page by id */
      document.getElementById("avgMax")
        .innerText = JSON.parse(xhttpReq.responseText).avgMax;
      document.getElementById("avgLow")
        .innerText = JSON.parse(xhttpReq.responseText).avgLow;
      document.getElementById("avgAvg")
        .innerText = JSON.parse(xhttpReq.responseText).avgAvg;
      document.getElementById("sumPrecip")
        .innerText = JSON.parse(xhttpReq.responseText).sumPrecip;
        
      /* Add chart JavaScript here created by Bianca */
      $(function () {/* w ww. j  a  v a 2s. c om*/
        $('#gauge').highcharts({
          chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            height: 200
          },
          title: {
            text: 'Bacteria Risk Level'
          },
          pane: {
            center: ['50%','100%'],
            startAngle: -90,
            endAngle: 90,
            background: null,
            size: '200%'
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
            name: 'Risk Level',
            data: [JSON.parse(xhttpReq.responseText).prediction_value]
          }]
        });
      });
    } else {
      alert("WARNING :: REQUEST ERROR !!!");
    }
  }
};
xhttpReq.onerror = err => console.log(`Send Request Error:\n${err}`);

/* Variable to send data from drop down menus to predict route */
var sendPkg = {
  date_index: date.value,
  station_id: beach.value
};

/* Operation to send above variable to predict route */
xhttpReq.send(JSON.stringify(sendPkg));
console.log("===>JSON :: ", JSON.stringify(sendPkg))

/* Function to Assign to the prediction button to update prediction */
function update_prediction() {
  var date = d3.selectAll("#date_select").node();
  var beach = d3.selectAll("#beach_select").node();
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
        
        /* Returns values to HTML page by id */
        document.getElementById("avgMax") 
          .innerText = JSON.parse(xhttpReq.responseText).avgMax; 
        document.getElementById("avgLow") 
          .innerText = JSON.parse(xhttpReq.responseText).avgLow;
        document.getElementById("avgAvg") 
          .innerText = JSON.parse(xhttpReq.responseText).avgAvg;
        document.getElementById("sumPrecip") 
          .innerText = JSON.parse(xhttpReq.responseText).sumPrecip;

        /* Add chart JavaScript here*/
        $(function () {/* w ww. j  a  v a 2s. c om*/
          $('#gauge').highcharts({
            chart: {
              type: 'gauge',
              plotBackgroundColor: null,
              plotBackgroundImage: null,
              plotBorderWidth: 0,
              plotShadow: false,
              height: 200
            },
            title: {
              text: 'Bacteria Risk Level'
            },
            pane: {
              center: ['50%', '100%'],
              startAngle: -90,
              endAngle: 90,
              background: null,
              size: '200%'
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
              name: 'Risk Level',
              data: [JSON.parse(xhttpReq.responseText).prediction_value]
            }]
          });
        });
      } else {
        alert("WARNING :: REQUEST ERROR !!!");
      }
    }
  };
  xhttpReq.onerror = err => console.log(`Send Request Error:\n${err}`);

  /* Variable to send data from drop down menus to predict route */
  var sendPkg = {
    date_index: date.value,
    station_id: beach.value
  };

  /* Operation to send above variable to predict route */
  xhttpReq.send(JSON.stringify(sendPkg));
  console.log("===>JSON :: ", JSON.stringify(sendPkg))
}