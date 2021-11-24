var xyValues = [
    {x:1, y:1},
    {x:5, y:60},
    {x:10, y:9999},

  ];
  
  new Chart("myChart", {
    type: "scatter",
    data: {
      datasets: [{
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        data: xyValues
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        xAxes: [{ticks: {min: 1, max:60}}],
        yAxes: [{ticks: {min: 1, max:60}}],
      }
    }
  });