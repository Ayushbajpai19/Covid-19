fetch('https://corona.lmao.ninja/v2/countries/India')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    document.getElementById("flag").src= data.countryInfo.flag;
    document.getElementById("country").innerHTML = data.country.toLocaleString();
    document.getElementById("cases").innerHTML = data.cases.toLocaleString();
    document.getElementById("critical").innerHTML = data.critical.toLocaleString();
    document.getElementById("death").innerHTML = data.deaths.toLocaleString();
    document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
    document.getElementById("tests").innerHTML = data.tests.toLocaleString();
    document.getElementById("active").innerHTML = data.active.toLocaleString();

})
