// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
// Draw the chart and set the chart values
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['STATUS', 'PERCENTAGE'],
        ['PASS', 305],
        ['FAIL', 18],
        ]);
    // Optional; add a title and set the width and height of the chart
    var options = {
        'width':400, 
        'height':380, 
        'colors': ["#6bd19c", "#c4435d"],
        'legend':{
        'position':'bottom'
        },
        'backgroundColor':'transparent'
    };
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

