var request = new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",true);

request.send();

request.onload=function(){

var data=JSON.parse(request.response);

for(let i in data)
  {
  let currency = data[i].currencies;
  for(let j=0;j<currency.length;j++){
    if(currency[j].code=="USD")
    {
      console.log(data[i].name);
    }
  }
 }
}