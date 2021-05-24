function plot(name){
    fetch(window.location.href+name, { mode: 'no-cors'})
    .then(function(resp){
        return resp.json();
    })
    .then(function(json_data){
        Highcharts.chart('container',json_data);
    });
};