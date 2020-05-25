 google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('timeofday', 'Time of Day');
      data.addColumn('number', 'Emails Received');

      data.addRows([
        [[8, 30, 45], 5],
        [[9, 0, 0], 10],
        [[10, 0, 0, 0], 12],
        [[10, 45, 0, 0], 13],
        [[11, 0, 0, 0], 15],
        [[12, 15, 45, 0], 20],
        [[13, 0, 0, 0], 22],
        [[14, 30, 0, 0], 25],
        [[15, 12, 0, 0], 30],
        [[16, 45, 0], 32],
        [[16, 59, 0], 42]
      ]);

      var options = {
        title: 'Total Emails Received Throughout the Day',
        height: 450
      };

      var chart = new google.charts.Bar(document.getElementById('chart_div'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
   google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('timeofday', 'Time of Day');
      data.addColumn('number', 'Emails Received');

      data.addRows([
        [[8, 30, 45], 5],
        [[9, 0, 0], 10],
        [[10, 0, 0, 0], 12],
        [[10, 45, 0, 0], 13],
        [[11, 0, 0, 0], 15],
        [[12, 15, 45, 0], 20],
        [[13, 0, 0, 0], 22],
        [[14, 30, 0, 0], 25],
        [[15, 12, 0, 0], 30],
        [[16, 45, 0], 32],
        [[16, 59, 0], 42]
      ]);

      var options = {
        title: 'Total Emails Received Throughout the Day',
        height: 450
      };

      var chart = new google.charts.Bar(document.getElementById('chart_div'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
   google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('timeofday', 'Time of Day');
      data.addColumn('number', 'Emails Received');

      data.addRows([
        [[8, 30, 45], 5],
        [[9, 0, 0], 10],
        [[10, 0, 0, 0], 12],
        [[10, 45, 0, 0], 13],
        [[11, 0, 0, 0], 15],
        [[12, 15, 45, 0], 20],
        [[13, 0, 0, 0], 22],
        [[14, 30, 0, 0], 25],
        [[15, 12, 0, 0], 30],
        [[16, 45, 0], 32],
        [[16, 59, 0], 42]
      ]);

      var options = {
        title: 'Total Emails Received Throughout the Day',
        height: 450
      };

      var chart = new google.charts.Bar(document.getElementById('chart_div'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('timeofday', 'Time of Day');
    data.addColumn('number', '');

    data.addRows([
        [[8, 30, 45], 5],
        [[9, 0, 0], 10],
        [[10, 0, 0, 0], 12],
        [[10, 45, 0, 0], 13],
        [[11, 0, 0, 0], 15],
        [[12, 15, 45, 0], 20],
        [[13, 0, 0, 0], 22],
        [[14, 30, 0, 0], 25],
        [[15, 12, 0, 0], 30],
        [[16, 45, 0], 32],
        [[16, 59, 0], 42]
    ]);

    var options = {
        title: 'Registrations Throughout the Day',
        height: 300
    };

    var chart = new google.charts.Bar(document.getElementById('bar'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}
