document.getElementById('fileInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    
    Papa.parse(file, {
        complete: function(results) {
            console.log("Parsed data:", results.data);
            var dataPoints = results.data.map(function(row) {
                return {
                    x: parseInt(row['Impressions'], 10),
                    y: parseInt(row['Likes'], 10)
                };
            }).filter(point => !isNaN(point.x) && !isNaN(point.y)); // Filter out any rows that don't contain numeric data
            
            var ctx = document.getElementById('chart').getContext('2d');
            if (window.myChart) {
                window.myChart.destroy();
            }
            window.myChart = new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: "Likes vs Impressions",
                        data: dataPoints,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Impressions'
                            },
                            beginAtZero: true
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Likes'
                            },
                            beginAtZero: true
                        }
                    }
                }
            });
        },
        header: true 
    });
});
