
// Load google charts
    google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'percentage'],
  ['Regitered', 60],
  ['Activated', 20],
  ['Training', 20],
  
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'STATISTICS', 'width':400, 'height':300};

  // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
    }
