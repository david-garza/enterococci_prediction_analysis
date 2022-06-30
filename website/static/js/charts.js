
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
      data: [1]
    }]
  });
});