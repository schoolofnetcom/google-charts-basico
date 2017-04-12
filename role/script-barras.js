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
        title: 'Qual autor você prefere?',
        width: 600,
        height: 300,
        //legend: 'top',
        legend: {position: 'none'}, //esconder legenda
        isStacked: true,
        //colors: ['#000000', 'yellow', 'blue', 'purple', 'brown', 'grey'],
        colors: ['green','red'],
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
    chart.draw(data, options);
}

function makeDataTable() {
    var data = new google.visualization.arrayToDataTable([
        ['Autores', 'Prefer. 2016',{role: 'style', type:'string'},{role: 'annotation', type:'string'}, 'Prefer. 2017',{role: 'style', type:'string'}],
        ['Machado de Assis', 10,'green','Anotação', 15,'red'],
        ['Manoel de Barros', 15,'green',null, 10,'yellow'],
        ['Guimarães Rosa', 25,'green',null, 30,'red'],
    ]);

    /*data.addColumn('string', 'Autores');
    data.addColumn('number', 'Prefer. 2016');
    data.addColumn('number', 'Prefer. 2017');*/

    return data;
}