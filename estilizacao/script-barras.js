google.charts.load('current',{packages: ['corechart']});
//current - ultima versão disponivel - 45.1
//
google.charts.setOnLoadCallback(initGoogleVisualization); //callback

function initGoogleVisualization(){
    drawChart();
    var btnInsertTable = document.getElementById('btn-insert-table');
    var btnDrawChart = document.getElementById('btn-draw-chart');
    btnInsertTable.removeAttribute('disabled');
    btnDrawChart.removeAttribute('disabled');
}

function drawChart(){
    var data = makeDataTable();

    var options = {
        title: 'Qual autor você prefere?',
        width: 600,
        height: 300,
        legend: 'top',
        isStacked: true,
        colors: ['#000000','yellow','blue','purple','brown','grey'],
        hAxis: {
            title: 'Número de votos',
            titleTextStyle: {
                bold: true,
                fontSize: 16,
                color: 'brown'
            },
            textStyle: {
                bold: true,
                fontSize: 12,
                color: 'brown'
            }
        },
        vAxis: {
            title: 'Autores',
            titleTextStyle: {
                bold: true,
                fontSize: 16,
                color: 'purple'
            },
            textStyle: {
                bold: true,
                fontSize: 12,
                color: '#848484'
            }
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('my-chart'));
    chart.draw(data,options);
}

function makeDataTable(){
    var table = document.getElementById('my-table');
    var rows = table.getElementsByTagName('tbody')[0].children;
    var data = new google.visualization.DataTable();

    data.addColumn('string','Autores');
    data.addColumn('number', 'Prefer. 2016');
    data.addColumn('number', 'Prefer. 2017');


    for(var i=0;i<rows.length;i++){
        var author = rows[i].cells[0].innerHTML;
        var value2016 = parseInt(rows[i].cells[1].innerHTML);
        var value2017 = parseInt(rows[i].cells[2].innerHTML);
        data.addRow([author,value2016,value2017]);
    }

    return data;
}