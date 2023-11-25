// Use D3 to fetch the data from the JSON file
const samplesURL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

d3.json(samplesURL).then(function(data) {
  console.log(data);

  // Horizontal bar chart with a dropdown menu to display the top 10 OTUs

  // Creating arrays for OTU values 
  let sample_values = data.samples.map(sample => sample.sample_values);
  let otu_ids = data.samples.map(sample => sample.otu_ids);
  let otu_labels = data.samples.map(sample => sample.otu_labels);

  // Sort data in descending order
  let indices = sample_values[0].map((_, i) => i); 
  indices.sort((a, b) => sample_values[0][b] - sample_values[0][a]);

  // Slice the first 10 objects for plotting
  let slicedIndices = indices.slice(0, 10);

  // Reverse array for Plotly's defaults 
  slicedIndices.reverse();

  // Trace data
  let trace1 = {
    x: sample_values[0].filter((value, i) => slicedIndices.includes(i)),
    y: otu_ids[0].filter((value, i) => slicedIndices.includes(i)).map(id => `OTU ${id}`),
    text: otu_labels[0].filter((value, i) => slicedIndices.includes(i)),
    type: "bar",
    orientation: "h"
  };

  // plotData array
  let plotData = [trace1];

  // Apply a title to the layout
  let layout = {
    title: "Top 10 OTUs per Individual",
    margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
      }
  };

  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("bar", plotData, layout);

}).catch(function(error) {
  console.log(error);
});
