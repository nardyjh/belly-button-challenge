# Belly Button Biodiversity Dashboard

## Overview

The Belly Button Biodiversity Dashboard is an interactive web application that allows users to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dashboard includes visualizations such as a horizontal bar chart, a bubble chart, and sample metadata display.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Files and Directory Structure](#files-and-directory-structure)
- [Acknowledgments](#acknowledgments)
- [References](#references)

## Getting Started

To explore the Belly Button Biodiversity Dashboard, follow these steps:

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/your-username/belly-button-challenge.git
   ```

2. Open the index.html file in a web browser.

3. Use the dropdown menu to select different test subjects and explore the interactive charts and demographic information.

## Usage

- Dropdown Menu: Select a test subject from the dropdown menu to view their corresponding data.

- Horizontal Bar Chart: Displays the top 10 operational taxonomic units (OTUs) found in the selected individual. The bar chart uses sample values, OTU IDs as labels, and OTU labels as hovertext.

- Bubble Chart: Visualizes each sample with OTU IDs on the x-axis, sample values on the y-axis, and marker size/color corresponding to sample values and OTU IDs, respectively.

- Demographic Info Panel: Displays key demographic information for the selected test subject.

## Dependencies

- D3.js
- Plotly
- Bootstrap

## Files and Directory Structure

- index.html: The main HTML file that defines the structure of the dashboard.
- static/js/app.js: JavaScript file containing the application logic, data fetching, and chart rendering.
- README.md 

## Acknowledgments
This project is part of a data visualization challenge and utilizes the Belly Button Biodiversity dataset provided by the 2U Data Curriculum Team.
All information provided by University of Toronto. 

## References 

Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/Links to an external site.
