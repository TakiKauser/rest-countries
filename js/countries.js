// load countrys' information/data from API
const loadCountries = () => {
    fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(jsonData => displayCountries(jsonData))
}
// showing info in UI
const displayCountries = countries => {
    // console.log(countries[0]);
    const countriesContainer = document.getElementById("countries");

    const countryHTML = countries.map(country => getCountryHTML(country));
    // setting formatted data
    countriesContainer.innerHTML = countryHTML.join(" ");
    // console.log(countryHTML[0]);
}
// getting necessary data with HTML structure
const getCountryHTML = country => {
    const { name, capital, flag } = country;
    return `
        <div class="country">
            <h2>${name}</h2>
            <h4>Capital: ${capital}</h4>
            <img src="${flag}">
        </div>
    `
}
loadCountries();