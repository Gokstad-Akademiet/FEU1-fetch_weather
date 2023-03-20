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

function setCity(e) {
	const city = e.target.value;

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
			insertData.innerHTML = `<p>${response.location.name} i ${response.location.region} har ${response.current.temp_c} grader, 
            men det føles som ${response.current.feelslike_c} grader. </p>
            <p>Ikonet for ${response.current.condition.text} er <img src=${response.current.condition.icon} /></p></p>`;
		})
		.catch((insertData.innerHTML = "fant ikke noe by som heter " + city));
}
