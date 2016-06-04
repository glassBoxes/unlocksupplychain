$(function () {

  'use strict';

  /* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   */

  //-----------------------
  //- MONTHLY SALES CHART -
  //-----------------------

  // Get context with jQuery - using jQuery's .get() method.
  var salesChartCanvas = $("#salesChart").get(0).getContext("2d");
  // This will get the first returned node in the jQuery collection.
  var salesChart = new Chart(salesChartCanvas);

  var salesChartData = {
    labels: ["DIMANCHE 01/05", "LUNDI 02/05 ", "MARDI 03/05", "MERCREDI 04/05", "JEUDI 05/05", "VENDREDI 06/05", "SAMEDI 07/05", "DIMANCHE 08/05", "LUNDI 09/05", "MARDI 10/05", "MERCREDI 11/05", "JEUDI 12/05", "VENDREDI 13/05", "SAMEDI 14/05", "DIMANCHE 15/05", "LUNDI 16/05", "MARDI 17/05", "MERCREDI 18/05", "JEUDI 19/05", "VENDREDI 20/05", "SAMEDI 21/05", "DIMANCHE 22/05", "LUNDI 23/05 ", "MARDI 24/05 ", "MERCREDI 25/05", "JEUDI 26/05 ", "VENDREDI 27/05", "SAMEDI 28/05", "DIMANCHE 29/05", "LUNDI 30/05", "MARDI 31/05"],
    datasets: [
      {
        label: "Malcolm",
        lineColor: "rgb(240,35,17)",
        fillColor: "rgb(240,35,17)",
        strokeColor: "rgb(240,35,17)",
        pointColor: "rgb(240,35,17)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgb(220,220,220)",
        data: [5, 50, 55, 36, 33, 54, 7, 5, 50, 53, 36, 40, 39, 1, 3, 42, 45, 36, 43, 40, 7, 3, 59, 42, 40, 35, 36, 3, 2, 49, 46]
      },
      {
        label: "Moyenne",
        lineColor: "rgba(102,102,102, 1)",
        fillColor: "rgba(102,102,102, 1)",
        strokeColor: "rgba(102,102,102, 1)",
        pointColor: "#555",
        pointStrokeColor: "rgba(102,102,102,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,200,1)",
        data: [3, 40, 38, 37, 34, 42, 5, 3, 38, 42, 36, 39, 37, 2, 4, 40, 34, 32, 31, 35, 3, 1, 39, 34, 35, 33, 37, 1, 0, 41, 37]
      }
    ]
  };

  var salesChartOptions = {
    //Boolean - If we should show the scale at all
    showScale: true,
    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: false,
    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(0,0,0,.05)",
    //Number - Width of the grid lines
    scaleGridLineWidth: 1,
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,
    //Boolean - Whether the line is curved between points
    bezierCurve: true,
    //Number - Tension of the bezier curve between points
    bezierCurveTension: 0.3,
    //Boolean - Whether to show a dot for each point
    pointDot: false,
    //Number - Radius of each point dot in pixels
    pointDotRadius: 4,
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,
    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: 20,
    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,
    //Boolean - Whether to fill the dataset with a color
    datasetFill: true,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",
    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: true,
    //Boolean - whether to make the chart responsive to window resizing
    responsive: true,
  };

  //Create the line chart
  salesChart.Line(salesChartData, salesChartOptions);

  legend(document.getElementById("js-legend"), salesChartData);


  //---------------------------
  //- END MONTHLY SALES CHART -
  //---------------------------

// CALENDAR

//The Calender
  $("#calendar").datepicker({
    "multidate": true,
    "defaultViewDate": {
      "year": 2016,
      "month": 6,
      "day": 5
    }
  });

});