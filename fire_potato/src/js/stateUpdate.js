function stateUpdate(element){
    if(!element.checked) {
        //console.log(Number(element.name)+1);
        fetch("http://185.162.75.92:3000/baccine/unclear/"+(Number(element.name)+1),{
            method: 'PUT',              
            headers: {
                'Content-Type': 'application/json',
            },
            }).then(response => {
            }).catch(err => {
                alert("error!");
            });
    } else {
        fetch("http://185.162.75.92:3000/baccine/clear/"+(Number(element.name)+1),{
            method: 'PUT',              
            headers: {
                'Content-Type': 'application/json',
            },
            }).then(response => {
            }).catch(err => {
                alert("error!");
            });
    }
}