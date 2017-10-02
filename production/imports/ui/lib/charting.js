import chart from 'chart.js';

// Chart options
Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.enabled = true;
drawChart = function(chartId, mark){
    //$( "canvas#"+chartId ).replaceWith( "<canvas id='" + chartId + "'></canvas>" );
    let color;
    if(mark >= 95){
        color = "#009688";
    }else if(mark >= 90){
        color = "#4caf50";
    }else if(mark >=85){
        color = "#8bc34a";
    }else if(mark >=80){
        color = "#cddc39";
    }else if(mark >=75){
        color = "#ffeb3b";
    }else if(mark >=70){
        color = "#ffc107";
    }else if(mark >=60){
        color = "#ff9800";
    }else if(mark >=55){
        color = "#ff5722";
    }else if(mark < 55){
        color = "#f44336";
    }
    let ctx = document.getElementById(chartId).getContext("2d");
    //This will get the first returned node in the jQuery collection.
    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                "Achievements",
                "Losts"
            ],
            datasets: [
                {
                    data: [mark, (100-mark).toFixed(1)],
                    backgroundColor: [
                        color,
                        "#A9A9A9"
                    ],
                    hoverBackgroundColor: [
                        color,
                        "#A9A9A9"
                    ]
                }]
        }
    });
}

drawSmallChartSide = function(chartId, mark, color){
    $( "canvas#"+chartId ).replaceWith( "<canvas id="+chartId+" width='20' height='20'></canvas>" );
    //Get context with jQuery - using jQuery's .get() method.
    var ctx = document.getElementById(chartId).getContext("2d");
    //This will get the first returned node in the jQuery collection.
    myNewChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                "Achievements",
                "Losts"
            ],
            datasets: [
                {
                    data: [mark, (100-mark).toFixed(1)],
                    backgroundColor: [
                        color,
                        "#A9A9A9"
                    ],
                    hoverBackgroundColor: [
                        color,
                        "#A9A9A9"
                    ]
                }]
        },
        options: {
            animation: false
        }
    });
}

drawSmallChart = function(chartId, mark, color){
    $( "canvas#"+chartId ).replaceWith( "<canvas id="+chartId+"></canvas>" );
    //Get context with jQuery - using jQuery's .get() method.
    var ctx = document.getElementById(chartId).getContext("2d");
    //This will get the first returned node in the jQuery collection.
    var myNewChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                "Achievements",
                "Losts"
            ],
            datasets: [
                {
                    data: [mark, (100-mark).toFixed(1)],
                    backgroundColor: [
                        color,
                        "#A9A9A9"
                    ],
                    hoverBackgroundColor: [
                        color,
                        "#A9A9A9"
                    ]
                }]
        },
        options: {
            animation: false
        }
    });
}

drawPolyChart = function(chartId, assignments, marks){

    //Get context with jQuery - using jQuery's .get() method.
    var ctx = document.getElementById(chartId).getContext("2d");

    var data = {
        labels: assignments,
        datasets: [
            {
                label: "M.A.T.A.",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                data: marks,
                spanGaps: false,
            }
        ]
    };
    //This will get the first returned node in the jQuery collection.
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        display: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        display: true
                    }
                }]
            }
        }
    });
}

drawPerformChart = function(chartId, assignments, k, t, c, a){

    //Get context with jQuery - using jQuery's .get() method.
    var ctx = document.getElementById(chartId).getContext("2d");

    var data = {
        labels: assignments,
        datasets: [
            {
                label: "Knowledge",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(255,193,7,0.4)",
                borderColor: "rgba(255,193,7,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(255,193,7,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(255,193,7,1)",
                pointHoverBorderColor: "rgba(255,193,7,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                data: k,
                spanGaps: true,
            },
            {
                label: "Thinking",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(76,175,80,0.4)",
                borderColor: "rgba(76,175,80,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(76,175,80,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(76,175,80,1)",
                pointHoverBorderColor: "rgba(76,175,80,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                data: t,
                spanGaps: true,
            },
            {
                label: "Communication",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(103,58,183,0.4)",
                borderColor: "rgba(103,58,183,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(103,58,183,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(103,58,183,1)",
                pointHoverBorderColor: "rgba(103,58,183,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                data: c,
                spanGaps: true,
            },
            {
                label: "Application",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(255,87,34,0.4)",
                borderColor: "rgba(255,87,34,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(255,87,34,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(255,87,34,1)",
                pointHoverBorderColor: "rgba(255,87,34,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                data: a,
                spanGaps: true,
            }
        ]
    };
    //This will get the first returned node in the jQuery collection.
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        display: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        display: true
                    }
                }]
            }
        }
    });
}


drawHalfChart = function(chartId, mark, total, color){
    var data = {
        labels: [
            "Achievements",
            "Losts"
        ],
        datasets: [{
            data: [mark, total-mark],
            backgroundColor: [
                color,
                "#A9A9A9"
            ],
            hoverBackgroundColor: [
                color,
                "#A9A9A9"
            ]
        }]
    };


    var ctx = document.getElementById(chartId).getContext("2d");

// And for a doughnut chart
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            cutoutPercentage: 70,
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            animation: false
        }
    });
}

drawHalfChartSide = function(chartId, mark, total, color){
    $( "canvas#"+chartId ).replaceWith( "<canvas id="+chartId+"></canvas>" );
    var data = {
        labels: [
            "Achievements",
            "Losts"
        ],
        datasets: [{
            data: [mark, total-mark],
            backgroundColor: [
                color,
                "#A9A9A9"
            ],
            hoverBackgroundColor: [
                color,
                "#A9A9A9"
            ]
        }]
    };

    var ctx = document.getElementById(chartId).getContext("2d");

// And for a doughnut chart
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            cutoutPercentage: 70,
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            animation: false
        }
    });
}

drawPolyChartSide = function(chartId, assignments, marks){
    $( "canvas#"+chartId ).replaceWith( "<canvas id="+chartId+"></canvas>" );
    //Get context with jQuery - using jQuery's .get() method.
    var ctx = document.getElementById(chartId).getContext("2d");

    var data = {
        labels: assignments,
        datasets: [
            {
                label: "M.A.T.A.",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                data: marks,
                spanGaps: false,
            }
        ]
    };
    //This will get the first returned node in the jQuery collection.
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        display: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        display: false
                    }
                }]
            }
        }
    });
}