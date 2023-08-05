let countryGrid = document.getElementById("country-grid");
let count = 0;
fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital")
	.then((res) => res.json())
	.then((data) => {
		// console.log(data);
        if (count > 8) return
		data.forEach((country) => {
			addCountry(country);
        });
        count++
	});
function addCountry(data) {
	let countryCard = document.createElement("div");
	countryCard.className = "country-card";
	countryGrid.appendChild(countryCard);

	let countryFlag = document.createElement("img");
	countryFlag.className = "country-flag";
	countryFlag.src = data.flags.svg;
	countryFlag.alt = "country-flag";

	let countryWrapper = document.createElement("div");
	countryWrapper.className = "country-wrapper";

	let countryName = document.createElement("h3");
	countryName.className = "country-name";
	countryName.innerHTML = data.name.common;

	let countryPopulation = document.createElement("p");
	countryPopulation.className = "country-population";
	countryPopulation.innerHTML = `<b>Population:</b> ${data.population}`;

	let countryRegion = document.createElement("p");
	countryRegion.className = "country-region";
	countryRegion.innerHTML = `<b>Region:</b> ${data.region}`;

	let countryCapital = document.createElement("p");
	countryCapital.className = "country-capital";
	countryCapital.innerHTML = `<b>Capital:</b> ${data.capital[0]}`;

	countryCard.appendChild(countryFlag);
	countryCard.appendChild(countryWrapper);
	countryWrapper.appendChild(countryName);
	countryWrapper.appendChild(countryPopulation);
	countryWrapper.appendChild(countryRegion);
	countryWrapper.appendChild(countryCapital);

	/*
    <div class="country-card">
        <img class="country-flag" alt="country-flag"/>
        <h3 class="country-name">country-name</h3>
        <p class="country-population"><b>Population:</b> 0</p>
        <p class="country-region"><b>Region:</b> Region</p>
        <p class="country-capital"><b>Capital:</b> Capital</p>
    </div>
    */
}
