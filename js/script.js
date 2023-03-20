// https://catfact.ninja/fact

// const api = "https://catfact.ninja/fact";
/* const api = "https://randomuser.me/api/";

*/
const insertData = document.querySelector("#catFact");
/* function getData() {
	fetch(api)
		.then((res) => res.json())
		.then(
			(data) =>
				(insertData.innerHTML = `
        <img src="${data.results[0].picture.large}" />
        `)
		);
}

getData(); */

const place = document.querySelector("#location").addEventListener("input", setCity);
let city = "";

function setCity(e) {
	city = e.target.value;
	getData();
}

function getData() {
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "afe0dc92f5msh7ad62a30b14e5a9p1a5589jsne11e490d9b55",
			"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
		},
	};

	fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
		.then((response) => response.json())
		.then((response) => {
			insertData.innerHTML = `
			<div class="flex flex-column">
				<div class="flex-center">
					<h1>${response.location.name}</h1> 
					<div class="flex-center flex-column space-x">
						<img src=${response.current.condition.icon}  width="50" height="auto" />
						<span>${response.current.condition.text} </span>
					</div>
				</div>
			<div>
			<span >${response.location.region}<span>
			<p> Temperatur: ${response.current.temp_c} grader </p>
			<p>Føles som: ${response.current.feelslike_c} grader</p>
			`;
		})
		.catch((insertData.innerHTML = `<p class="error">Fant dessverre ingen by som heter "${city}"</p>`));
}
