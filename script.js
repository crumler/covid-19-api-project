let url = 'https://api.covid19api.com/summary';  //info for new confirmed cases / deaths / recoveries, and also a total of these

//DOM MANIPULATION

let newNumbers = document.getElementById('newNumbers');
let totalNumbers = document.getElementById('totalNumbers');

//Fetches the data
function fetchCovidData() {
    fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        displayCovidData(json);
    })
}

fetchCovidData();

//Uses DOM Manipulation to Display the data
function displayCovidData(json) {
    //The ".toLocaleString" method is used to create thousand comma seperators (example: '371468' becomes '371,468')
    newNumbers.innerHTML = 'Cases: ' + (json.Global.NewConfirmed).toLocaleString('en') + ' | ' + 'Deaths: ' + (json.Global.NewDeaths).toLocaleString('en') + ' | ' + 'Recoveries: ' +  (json.Global.NewRecovered).toLocaleString('en');
    totalNumbers.innerHTML = 'Cases: ' + (json.Global.TotalConfirmed).toLocaleString('en') + ' | ' + 'Deaths: ' + (json.Global.TotalDeaths).toLocaleString('en') + ' | ' + 'Recoveries: ' + (json.Global.TotalRecovered).toLocaleString('en');
}