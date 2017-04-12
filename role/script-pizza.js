google.charts.load('current', {packages: ['corechart']});
//current - ultima versão disponivel - 45.1
//
google.charts.setOnLoadCallback(initGoogleVisualization); //callback

function initGoogleVisualization() {
    drawChart();
}

function drawChart() {
    var data = makeDataTable();

    var options = {
        title: 'Pesquisa eleitoral',
        width: 600,
        height: 300,
        legend: 'top',
        //is3D: true,
        pieHole: 0.1,
        //colors: ['#000000','yellow','blue','purple','brown','grey'],
        slices: {
            0: {color: 'green'},
            1: {color: 'yellow'},
            2: {color: 'red'},
        },
        sliceVisibilityThreshold: 0.15
    };

    var chart = new google.visualization.PieChart(document.getElementById('my-chart'));
    chart.draw(data, options);
}

function makeDataTable() {
    var data = new google.visualization.arrayToDataTable([
        ['Autores', 'Intenção de Votos'],
        ['Machado de Assis', 10],
        ['Manoel de Barros', 15],
        ['Guimarães Rosa', 25],
    ]);

    //Data Role - papel da coluna

    //data.addColumn('string','Autores'); //Implicit role domain
    //data.addColumn({role: 'domain', type: 'string'},'Autores');
    //data.addColumn('number', 'Intenção de votos'); //Implicit role series
    //data.addColumn({role: 'series', type: 'number'},'Intenção de votos');

    return data;
}