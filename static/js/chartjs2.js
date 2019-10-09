var ctx = document.getElementById('map2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Honda  Odyssey LX',	'Jeep  Wrangler Sport',	'Subaru  Outback 2.5i',	'Mazda  CX-3 Sport',	'Honda  HR-V LX',	'Honda  CR-V LX',	'Jeep  Renegade Sport',	'Ford  Escape S',	'Subaru  Forester 2.5i',	'Jeep  Compass Sport'

        ],
        datasets: [{
            label: 'Lowest Ten Average Rates',
            data: [1298,	1304,	1306,	1307,	1325,	1333,	1338,	1344,	1347,	1349
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