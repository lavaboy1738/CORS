const request = new XMLHttpRequest();
request.open("GET", "http://localhost:8888/information.json");
request.onreadystatechange = () =>{
    if(request.readyState === 4 && request.status === 200){
        console.log(request.response)
    }
}

request.send();