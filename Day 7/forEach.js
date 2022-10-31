
var request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all',true);

request.send();

request.onload = function(){
    
var data = JSON.parse(request.response)

var result = data.forEach(element=>
console.log(`country : ${element.name.common} 
Capital : ${element.capital}
flag    : ${element.flags.png}`))
    
}

  
