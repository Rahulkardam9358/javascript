fetch(window.location.href+"/data.json", { mode: 'no-cors'})
    .then(function(resp){
        return resp.json();
    })
    .then(function(json_data){
        console.log(json_data);
    });
