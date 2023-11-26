// Use D3 to fetch data from JSON
const samplesURL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Function to update all plots based on demos selected 
function optionChanged(selectedSample) {
  d3.json(samplesURL).then(function(data) {
    console.log(data);

    // Create arrays for OTU values that updates
    let sampleValues = data.samples.find(sample => sample.id === selectedSample).sample_values;
    let otuIds = data.samples.find(sample => sample.id === selectedSample).otu_ids;
    let otuLabels = data.samples.find(sample => sample.id === selectedSample).otu_labels;

    // Horizontal bar chart 
    // Sort data in descending order
    let indices = sampleValues.map((_, i) => i);
    indices.sort((a, b) => sampleValues[b] - sampleValues[a]);

    // Trace data while slicing and reversing for Plotly's defaults 
    let trace1 = {
      x: sampleValues.filter((value, i) => indices.includes(i)).slice(0, 10).reverse(),
      y: otuIds.filter((value, i) => indices.includes(i)).map(id => `OTU ${id}`).slice(0, 10).reverse(),
      text: otuLabels.filter((value, i) => indices.includes(i)).slice(0, 10).reverse(),
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

    // Render the plot to the div tag with id "bar"
    Plotly.newPlot("bar", plotData, layout);

    // Bubble chart
    // Trace data 
    let trace2 = {
      x: data.samples.find(sample => sample.id === selectedSample).otu_ids,
      y: data.samples.find(sample => sample.id === selectedSample).sample_values,
      mode: 'markers',
      marker: {
        size: data.samples.find(sample => sample.id === selectedSample).sample_values,
        color: data.samples.find(sample => sample.id === selectedSample).otu_ids,
        colorscale: 'Viridis'
      },
      text: data.samples.find(sample => sample.id === selectedSample).otu_labels
    };

    // plotData array for bubble chart
    let plotDataBubble = [trace2];

    // Apply title to the layout
    let layoutBubble = {
      title: 'Bubble Chart for Each Sample',
      xaxis: { title: 'OTU IDs' },
      yaxis: { title: 'Sample Values' },
      showlegend: false
    };

    // Render the plot to the div tag with id "bubble"
    Plotly.newPlot('bubble', plotDataBubble, layoutBubble);

    // Display sample metadata
    let metadata = data.metadata.find(entry => entry.id == selectedSample);
    let demographicInfo = "";
    Object.entries(metadata).forEach(([key, value]) => {
      demographicInfo += `<p><strong>${key}:</strong> ${value}</p>`;
    });
    document.getElementById('sample-metadata').innerHTML = demographicInfo;

  }).catch(function(error) {
    console.log(error);
  });
}

// Initialize dropdown options when the page loads
d3.json(samplesURL).then(function(data) {
  let dropdown = d3.select("#selDataset");
  data.names.forEach(function(name) {
    dropdown.append("option").text(name).property("value", name);
  });

  // Call the optionChanged function with the first sample to initialize the page
  optionChanged(data.names[0]);
}).catch(function(error) {
  console.log(error);
});
