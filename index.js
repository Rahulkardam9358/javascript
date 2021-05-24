function run(){
    let url = document.getElementById('input').value;
    fetch(url, { mode: 'no-cors'})
    .then(function(resp){
        return resp.json();
    })
    .then(function(json_data){
        Highcharts.chart('container',json_data);
    });
};
