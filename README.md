## Instagram Data Visualization
This project is a simple web application for visualizing Instagram data, including metrics like impressions and likes. It uses Plotly for Python visualizations and Chart.js for web-based visualizations, with data parsing facilitated by Papa Parse.

## Features
Load and parse CSV files containing Instagram data.
Visualize the relationship between impressions and likes using scatter plots.
Interactive web interface to upload and visualize custom data sets.

## Dependencies
Python Libraries: Pandas, Plotly, Numpy, Matplotlib, Seaborn
Web Technologies: HTML, CSS, JavaScript
JavaScript Libraries: Chart.js, Papa Parse

## Setup
Python Visualization
1. Ensure Python 3.x is installed on your system.
2. Install required Python libraries:

      pip install pandas plotly numpy matplotlib seaborn

3. Run the visualizer.py script to generate the plot:
python visualizer.py

## Web Visualization
No installation is required. Simply open the visualizer.html file in a modern web browser.
Use the file input to upload a CSV file and visualize the data.

## Usage
Preparing Your Data
Ensure your CSV file is structured with the following columns:

- First column: Impressions
- Second column: Likes

Example:
Impressions,Likes
100,10
150,20
200,25

## Web Application
Open visualizer.html in your browser.
Click on "Choose File" and select your CSV file.
The data will be automatically parsed and visualized as a scatter plot.

## Contributing
We welcome contributions to this project! Please feel free to fork the repository, make your changes, and submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
