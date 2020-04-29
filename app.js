//api key to het country wise data 
// https://corona.lmao.ninja/v2/countries/:query?yesterday=true&strict=true&query

// api to get india's data
// https://api.covid19india.org/state_district_wise.json

const country=document.querySelector("#country");
const input=document.querySelector('input');
const table=document.querySelector('table');
const header=document.querySelector('th');
const total=document.querySelector('#total');
const recovered=document.querySelector('#recovered');
const deaths=document.querySelector('#deaths');
const today=document.querySelector("#today");
const perMillion=document.querySelector("#perMillion");

function showData(){
    const name=country.value;
    const url= "https://corona.lmao.ninja/v2/countries/" + name + "?yesterday=true&strict=true&query";
    fetch(url)
    .then(data=>data.json())
    .then((data)=>{
            printData(data);
    })
    .catch((err)=>{
        console.log("Something Went Wrong");
        console.log(err);
    });

};

input.addEventListener("keydown", (event)=>{
    if(event.keyCode===13)
    showData();
});

function printData(data){

    if(data.message==="Country not found or doesn't have any cases"){
        alert("Please Enter A Valid Country Name");
        return;
    }

    if(country.value==="")
    return;
    
    header.textContent=country.value.toUpperCase();
    table.style.display= "block";   
    total.textContent=data.cases;
    recovered.textContent=data.recovered;
    deaths.textContent=data.deaths;
    perMillion.textContent=data.testsPerOneMillion;
    today.textContent=data.todayCases;
}

