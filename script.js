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
        height: 300
    };

    var chart = new google.visualization.BarChart(document.getElementById('my-chart'));
    chart.draw(data,options);
}

function insertTable(){

    var author = document.getElementById('author').value;
    var value2016 = document.getElementById('value-2016').value;
    var value2017 = document.getElementById('value-2017').value;
    var table = document.getElementById('my-table');
    var numRows = table.getElementsByTagName('tbody')[0].children.length;
    var row = table.insertRow(numRows+1);

    var cellAuthor =  row.insertCell(0);
    cellAuthor.outerHTML = '<th scope="row">'+author+'</th>';
    var cellValue2016 =  row.insertCell(1);
    cellValue2016.innerHTML = value2016;
    var cellValue2017 =  row.insertCell(2);
    cellValue2017.innerHTML = value2017;
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