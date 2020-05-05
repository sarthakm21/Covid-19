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

var ctx = document.getElementById('myChart').getContext('2d');


var allCountries;

fetch("https://corona.lmao.ninja/v2/countries/")
    .then(data=>data.json())
    .then((data)=>{
        allCountries=data;
    })
    .catch((err)=>{
        console.log("Something Went Wrong");
        console.log(err);
    });

// let maxTestRate,maxDeathRate,minTestRate,minDeathRate,minRecoveryRate,maxRecoveryRate;

// maxTestRate=Math.max.apply(Math, allCountries.map(function(o) { return o.testsPerOneMillion; }));
// maxDeathRate=Math.max.apply(Math, allCountries.map(function(o) { return o.deaths/o.cases; }));
// maxRecoveryRate=Math.max.apply(Math, allCountries.map(function(o) { return o.recovered/o.cases; }));
// minDeathRate=Math.min.apply(Math, allCountries.map(function(o) { return o.deaths/o.cases; }));
// minTestRate=Math.min.apply(Math, allCountries.map(function(o) { return o.testsPerOneMillion; }));
// minRecoveryRate=Math.max.apply(Math, allCountries.map(function(o) { return o.recovered/o.cases; }));


// for(let i in allCountries){
//     if((allCountries[i].deaths*100/allCountries[i].cases) > maxDeathRate){
//         maxDeathRate=(allCountries[i].deaths*100/allCountries[i].cases);
//     }

//     if(allCountries[i].recovered*100/allCountries[i].cases > maxRecoveryRate)
//     maxRecoveryRate=allCountries[i].recovered*100/allCountries[i].cases

//     if(allCountries[i].testsPerOneMillion>maxTests)
//     maxTests=allCountries[i].testsPerOneMillion;

//     if(allCountries[i].cases > maxCases)
//     maxCases=allCountries[i].cases;

// }

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

// var searchedTestRate=0;
// var searchedRecoveryRate=0;

function printData(data){

    if(data.message==="Country not found or doesn't have any cases"){
        alert(data.message);
        return;
    }

    if(country.value==="")
    return;

    // searchedTestRate=data.testsPerOneMillion;
    // searchedRecoveryRate=data.recovered*100/data.cases;

    header.textContent=country.value.toUpperCase();
    table.style.display= "block";
    total.textContent=data.cases;
    recovered.textContent=data.recovered;
    deaths.textContent=data.deaths;
    perMillion.textContent=data.testsPerOneMillion;
    today.textContent=data.todayCases;

    // plotDeath(data.deaths/data.cases);
    // plotRecovery(data.recovered/data.cases);
    // plotTest(data.testsPerOneMillion);
}

// function plotDeath(rate){
//     var myChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: ['Lowest Death Rates', 'Country\'s Death Rate', 'Highest Death Rates'],
//             datasets: [{
//                 label: '# of Votes',
//                 data: [minDeathRate, rate, maxDeathRate],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)'
//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         beginAtZero: true
//                     }
//                 }]
//             }
//         }
//     });
// }


// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Lowest Death Rates', 'Country\'s Death Rate', 'Highest Death Rates'],
//         datasets: [{
//             label: '# of Votes',
//             data: [minDeathRate, rate, maxDeathRate],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });