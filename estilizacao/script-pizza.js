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
        title: 'Pesquisa eleitoral',
        width: 600,
        height: 300,
        legend: 'top',
        //is3D: true,
        pieHole: 0.1,
        colors: ['#000000','yellow','blue','purple','brown','grey'],
        sliceVisibilityThreshold: 0.15
    };

    var chart = new google.visualization.PieChart(document.getElementById('my-chart'));
    chart.draw(data,options);
}

function makeDataTable(){
    var table = document.getElementById('my-table');
    var rows = table.getElementsByTagName('tbody')[0].children;
    var data = new google.visualization.DataTable();

    data.addColumn('string','Autores');
    data.addColumn('number', 'Intenção de votos');


    for(var i=0;i<rows.length;i++){
        var author = rows[i].cells[0].innerHTML;
        var value = parseInt(rows[i].cells[1].innerHTML);
        data.addRow([author,value]);
    }

    return data;
}