var ctx = document.getElementById('map1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Nissan  GT-R',	'Mercedes  Maybach S650',	'Porsche  Panamera',	'Mercedes  AMG GT R',	'BMW  M760i xDrive',	'BMW  M6 Gran Coupe',	'BMW  I8',	'Mercedes  S65 AMG',	'Mercedes  SL63 AMG',	'Mercedes  S560 4MATIC'
        ],
        datasets: [{
            label: 'Highest Ten Average Rates',
            data: [3941,	3917,	3887,	3751,	3705,	3637,	3603,	3585,	3549,	3514
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 12062, 235, 0.2)',
                'rgba(255, 159, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 206, 64, 0.2)',
                'rgba(35, 160, 64, 0.2)',
                'rgba(85, 159, 64, 0.2)',
                'rgba(155, 159, 64, 0.2)',
                'rgba(255, 255, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 12062, 235, 0.2)',
                'rgba(255, 159, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 206, 64, 0.2)',
                'rgba(35, 160, 64, 0.2)',
                'rgba(85, 159, 64, 0.2)',
                'rgba(155, 159, 64, 0.2)',
                'rgba(255, 255, 64, 0.2)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});