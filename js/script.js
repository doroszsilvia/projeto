(function() {
    /**
     * Draws the outline of the svg circle to the percent set in data attr
     */
    function drawCharts() {
      
      var circles = document.querySelectorAll('.percent-circle');
  
      circles.forEach(function(el) {
        //pull the percentage and turn it into a fraction
        var percent = el.dataset.percent / 100;
        //work out the circumference from the width
        var diameter = el.offsetWidth;
        var circumference = Math.ceil(diameter * Math.PI);
        //now we have the circumference, we know how long the ouline should be
        var stroke = Math.ceil(circumference * percent);
        //also workout how long the line doesn't exist for
        var diff = circumference - stroke;
  
        //now add the strok dash array for the first two values
        //TODO : could this all be done with css?
        el.querySelector('.percent-circle-inner').style.strokeDasharray = stroke +'px '+ diff +'px';
      });
    }
    
    document.addEventListener('DOMContentLoaded', drawCharts);
  })();

  var ctx = document.getElementById("myChart");
  const mq = window.matchMedia( "(max-width: 428px)" );

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Conhecidos da Família", "Avô, Primos", "Pai", "Padrasto",],
        datasets: [{
            label: '# of Votes',
            data: [60, 15, 15, 10],
            backgroundColor: [
                '#EDBF09',
                '#2274A5',
                '#2F2F2F',
                '#E7DFC6',
            ],
            borderColor: [
              '#EDBF09',
              '#2274A5',
              '#2F2F2F',
              '#E7DFC6',
          ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      gridLines: {
        display: false,
        drawBorder: false,
    },
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true,
                  callback: function(value, index, values) {
                      return '';
                  },
              },
              gridLines: {
                  display: false,
                  drawBorder: false,
              },
          }],
          xAxes: [{
              ticks: {
                  beginAtZero: true,
                  callback: function(value, index, values) {
                      return '';
                  },
              },
              gridLines: {
                  display: false,
                  drawBorder: false,
              },
          }],
      },
    }
});


var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Conhecidos da Família", "Avô, Primos", "Pai", "Padrasto",],
        datasets: [{
            label: '# of Votes',
            data: [60, 15, 15, 10],
            backgroundColor: [
                '#EDBF09',
                '#2274A5',
                '#2F2F2F',
                '#E7DFC6',
            ],
            borderColor: [
              '#EDBF09',
              '#2274A5',
              '#2F2F2F',
              '#E7DFC6',
          ],
            borderWidth: 5
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
            left: 50,
            right: 50,
            top: 0,
            bottom: 0
        }},
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true,
                  callback: function(value, index, values) {
                      return '';
                  },
              },
              gridLines: {
                  display: false,
                  drawBorder: false,
              },
          }],
          xAxes: [{
              ticks: {
                  beginAtZero: true,
                  callback: function(value, index, values) {
                      return '';
                  },
              },
              gridLines: {
                  display: false,
                  drawBorder: false,
              },
          }],
      },
    }
});