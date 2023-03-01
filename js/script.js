const charts=document.querySelectorAll('.chart');
charts.forEach(function(chart){
    var ctx=chart.getContext("2d");
    var myChart=new Chart(ctx,{
        type:"bar",
        data:{
            labels:["Red","Green","Yellow","Green","Purple","Orange"],
            datasets:[
                {
                    label:"# of votes",
                    data:[12,19,3,5,2,3],
                    backgroundColor:[
                        "rgba(255,99,132,0.2)",
                        "rgba(54,162,235,0.2)",
                        "rgba(255,286,86,0.2)",
                        "rgba(255,286,86,0.2)",
                        "rgba(153,102,235,0.2)",
                        "rgba(255,159,64,0.2)",
                    ],
                    borderColor:[
                        "rgba(255,99,132,0.2)",
                        "rgba(54,162,235,0.2)",
                        "rgba(255,286,86,0.2)",
                        "rgba(255,286,86,0.2)",
                        "rgba(153,102,235,0.2)",
                        "rgba(255,159,64,0.2)",
                    ],
                    borderWidth:1,
                },
            ],
        },
        options:{
            scales:{
                y:{
                    beginAtZero:true,
                },
            },
        },
    });
});


$(document).ready(function () {
    $('#example').DataTable();
});