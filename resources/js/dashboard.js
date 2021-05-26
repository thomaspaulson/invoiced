/**
 * We'll load chart.js & feather-icons
 */

try {    
    
    window.Chart = require('chart.js');
    window.feather = require('feather-icons')
    
} catch (e) {}


window.addEventListener('DOMContentLoaded', (event) => {

  //console.log('DOM fully loaded and parsed:/resources/js/bootstarp');

  feather.replace()

  // var ctx = document.getElementById('myChart')
  // // eslint-disable-next-line no-unused-vars
  // var myChart = new Chart(ctx, {
  //   type: 'line',
  //   data: {
  //     labels: [
  //       'Sunday',
  //       'Monday',
  //       'Tuesday',
  //       'Wednesday',
  //       'Thursday',
  //       'Friday',
  //       'Saturday'
  //     ],
  //     datasets: [{
  //       data: [
  //         15339,
  //         21345,
  //         18483,
  //         24003,
  //         23489,
  //         24092,
  //         12034
  //       ],
  //       lineTension: 0,
  //       backgroundColor: 'transparent',
  //       borderColor: '#007bff',
  //       borderWidth: 4,
  //       pointBackgroundColor: '#007bff'
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero: false
  //         }
  //       }]
  //     },
  //     legend: {
  //       display: false
  //     }
  //   }
  // })


});

