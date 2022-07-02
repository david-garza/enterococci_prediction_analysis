
var prediction = JSON.parse('{{ prediction | tojson | safe}}');
$(function() {/* w ww. j  a  v a 2s. c om*/
  $('#container').highcharts({
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
        formatter: function() {
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
      data: prediction.prediction_value
    }]
  });
});


// // create a function called "handleClick" to handle what to do after an input is given.

// function handleClick() {
//   // tell D3 to look for the #datetime id in the HTML tags using d3.select("#datetime").
//   // tell D3 to look for where our date values are stored on the webpage and grab that information and
//   // hold it in the "date" variable using .property("value");
//   let date = d3.select("#datetime").property("value");
//   // set a default filter and save it to a new variable.
//   let filteredData = tableData;
//   // Check to see if a date was entered and filter the
//   // data using that date.
//   if (date) {
//       // Apply `filter` to the table data to only keep the
//       // rows where the `datetime` value matches the filter value
//       filteredData = filteredData.filter(row => row.datetime === date);
//   };
//   if (beach_name) {
//     filteredData = filteredData.filter(row => row. === beach_name)
//   }

//   // Rebuild the table using the filtered data 
//   // NOTE@: If no date was entered, the filteredData will
//   // just be the original tabelData.
//   buildChart(filteredData);
// }

// // Attach  an event to listen for the form button
// d3.selectAll("#filter-btn").on("click", handleClick);

// // Build the table when the page loads
// buildChart(tableData);

