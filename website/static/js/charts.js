date = ['2022-06-05', '2022-06-06', '2022-06-07', '2022-06-08', '2022-06-09',
'2022-06-10', '2022-06-11', '2022-06-12', '2022-06-13', '2022-06-14',
'2022-06-15', '2022-06-16', '2022-06-17', '2022-06-18', '2022-06-19',
'2022-06-20', '2022-06-21', '2022-06-22', '2022-06-23', '2022-06-24']

beach_name = ['Steward Beach', '25th Street Beach', '45th Street Beach', '61st Street Beach']

function init1() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset1");

  // Use the list of sample names to populate the select options
  date.forEach((sample) => {
    selector
    .append("option")
    .text(sample)
    .property("value", sample);
  })

    // Use the first sample from the list to build the initial plots
    var firstSample = date[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
};
// Initialize the dashboard
init1();



function init2() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset2");

  // Use the list of sample names to populate the select options
  beach_name.forEach((sample1) => {
    selector
    .append("option")
    .text(sample1)
    .property("value", sample1);

  })

  // Use the first sample from the list to build the initial plots
  var firstSample1 = beach_name[0];
  buildCharts(firstSample1);
  buildMetadata(firstSample1);
  };

// Initialize the dashboard
init2();


function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Result Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}





// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {


  // 3. Create a variable that holds the samples array. 
    var samplesArray = data.samples; 
    console.log(samplesArray);

  // 4. Create a variable that filters the samples for the object with the desired sample number.
    var resultArray = samplesArray.filter(sampleObj => sampleObj.id == sample);
    console.log(resultArray);


    //  5. Create a variable that holds the first sample in the array.
    var result = resultArray[0];
    console.log(result);

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIds = result.otu_ids;
    console.log(otuIds);

    var otuLabels = result.otu_labels;
    console.log(otuLabels);

    var sampleValues = result.sample_values;
    console.log(sampleValues);




////////////////////////////    GAUGE CHART     /////////////////////////



    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadata = data.metadata;
    var metadataArray = metadata.filter(sampleObj => sampleObj.id == sample);
 
    // 2. Create a variable that holds the first sample in the array.
    var metaresults = metadataArray[0];

    // 3. Create a variable that holds the washing frequency.
    var risk_level = metaresults.wfreq;

    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      domain: {x: [0, 1], y: [0, 1]},
      value: risl_level,
      title: {text: "Is it Safe to Swim?</b><br>Unsafe Levels of Bacteria are Present?"},
      type: "indicator",
      mode: "gauge+number",
      gauge: {
          axis: {range:[0, 1] },
          steps: [

            {range:[0], color:"lightseagreen"},
            {range:[1], color:"orange"}
         
          ],
          bar: { color: "darkslategrey" }
      }

    }];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      paper_bgcolor: "41bad83a"
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout, {responsive:true});
  });

};

