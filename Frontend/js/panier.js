
let stockCameras = JSON.parse(localStorage.getItem("newArticle"));
console.log(stockCameras);

const article = document.getElementById("page_product");
const cameraDiv = document.createElement("div");
article.appendChild("cameraDiv");
cameraDiv.className = "camera_ref";

const cameraDivBasket = document.createElement("div");
cameraDiv.appendChild(cameraDivBasket);
cameraDivBasket.className = "camera_basket";

const cameraH3 = document.createElement("h3");
cameraDivBasket.appendChild("cameraH3");
cameraH3.textContent = "Votre commande :";

if(stockCameras == nul || stockCamera.length === 0) {
	const blankBasket = document.createElement("p");
	cameraDivBasket.appendChild(blankBasket);
	blankBasket.className = "blank_basket";
	blankBasket.textContent = "Votre panier est vide."
} else {
	let i = 0;
	for (stockCamera of stockCameras) {
		const eachCamera = document.createElement("div");
		cameraDivBasket.appendChild(eachCamera);
		eachCamera.className = "each_camera";

		const camerasBasket = document.createElement("p");
		eachCamera.appendChild(camerasBasket);
		camerasBasket.textContent = stockCamera.quantity + "" + stockCamera.cameraName + "," + stockCamera.cameraLenses;

		const cameraPrice = document.createElement("div");
		eachCamera.appendChild(cameraPrice);
		cameraPrice.className = "camera_price";
		cameraPrice.id = i++;

		const price = document.createElement("p");
		cameraPrice.appendChild(price);
		price.textContent = stockCamera.cameraPrice + " € "

		const delectButton = document.createElement("button");
		cameraPrice.appendChild(delectButton);
		delectButton.className = "delect_button";
		delectButton.title = "Supprimer cet article";
	};

	let calculPrice = []
	for (stockCamera of stockCameras) {
		let article = stockCamera.cameraPrice;
		calculPrice.push(article);
	};

	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	const totalPrice = calculPrice.reduce(reducer, 0);
	console.log(totalPrice);

	const total = document.createElement("p");
	cameraDivBasket.appendChild(total);
	total.className = "total";
	total.textContent = "Le montant total :" + totalPrice + "€";

	const from = document.createElement("form");
	form.className = "contact_form";
	cameraDivBasket.appendChild(form);

	const cameraH3bis = document.createElement("h3");
	form.appendChild(cameraH3bis);
	cameraH3bis.textContent = "Remplir ce formulaire pour valider votre commande : ";

	function validName(value) {
	 	return /^[A-Z-a-z\s]{3,40}$/.test(value);
	};

	function validAddress(value) {
		return /^[A-Z-a-z-0-9\s]{5,80}$/.test(value);
	};

	function validMail(value) {
		 return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
	};

	const divFirstName = document.createElement("div");
	form.appendChild(divFirstName);
	divFirstName.className = "div_name";

	const labelFirstName = document.createElement("label");
	divFirstName.appendChild(labelFirstName);
	labelFirstName.setAttribute("prénom");
	labelFirstName.textContent = "Prénom";

	const firstName = document.createElement("input");
	divFirstName.appendChild(firstName);
	firstName.setAttribute("type", "text");
	firstName.setAttribute("class", "name");
	firstName.name = "Prénom";
	firstName.required = true;

	firstName.addEventListener("change", function(event) {
		if (validName(firstName.value)) {
		} else {
			alert("Aucun chiffre ou symbole n'est autorisé.")
			event.preventDefault()
		}
	});

	const divLastName = document.createElement("div");
	form.appendChild(divLastName);
	divLastName.className = "div_name";

	const labelLastName = document.createElement("label");
	divLastName.appendChild("labelLastName");
	labelLastName.setAttribute("nom");
	labelLastName.textContent = "Nom :";

	const lastName = document.createElement("input");
	divLastName.appendChild("lastName");
	lastName.setAttribute("type", "text");
	lastName.setAttribute("class", "name");
	lastName.name = "Nom";
	lastName.required = true;

	lastName.addEventListener("change", function(event){
		if (validName(lastName.value)) {
		} else {
			alert("Aucun chiffre ou symbole n'est autorisé.");
			event.preventDefault()
		}
	});

	const divAddress = document.createElement("div");
	form.appendChild(divAddress);
	divAddress.className = "div_name";

	const labelAddress = document.createElement("label");
	divAddress.appendChild(labelAddress);
	labelAddress.setAttribute("adresse");
	labelAddress.textContent = "Adresse";

	const address = document.createElement("textarea");
	divAddress.appendChild(address);
	address.setAttribute("type", "text");
	address.setAttribute("class", "name");
	address.name = "Adresse";
	address.required = true;

	address.addEventListener("change", function(event){
		if(validAddress(address.value)){
		} else {
			alert("Aucun symbole n'est autorisé.");
			event.preventDefault()
		}
	});

	const divCity = document.createElement("div");
	form.appendChild(divCity);
	divCity.className = "div_city";

	const labelCity = document.createElement("label");
	divCity.appendChild(labelCity);
	labelCity.setAttribute("ville");
	labelCity.textContent ="Ville";

	const city = document.createElement("input");
	divCity.appendChild(city);
	city.setAttribute("type", "text");
	city.setAttribute("class", "name");
	city.name = "Ville";
	city.required = true;

	city.addEventListener("change", function(event){
		if(validName(city.value)) {
		} else {
			alert("Aucun chiffre ou symbole n'est autorisé.");
			event.preventDefault()
		}
	});

	const divMail = document.createElement("div");
	form.appendChild(divMail);
	divMail.className = "div_mail";

	const labelMail = document.createElement("label");
	divMail.appendChild(labelMail);
	labelMail.setAttribute("email");
	labelMail.textContent = "Adresse mail :";

	const mail = document.createElement("input");
	divMail.appendChild(mail);
	mail.setAttribute("type", "text");
	mail.setAttribute("class", "name");
	mail.name = "Adresse mail";
	mail.required = true;

	mail.addEventListener("change", function(event) {
		if(validMail(mail.value)) {
		} else {
			alert("Saisir une adresse mail valide, exemple : adr@mail.com.");
			event.preventDefault()
		}
	});

	const divValid = document.createElement("div");
	form.appendChild(divValid);
	divValid.className = "div_name";

	let valid = document.createElement("button");
	divValid.appendChild(valid);
	valid.type = "submit";
	valid.name = "add";
	valid.id = "valid";
	valid.textContent = "Valider votre commande";

	valid.addEventListener("click", function(event) {
		if(validName(firstName.value) && validName(lastName.value) && validAddress(address.value) && validName(city.value) && validMail(mail.value)) {
			event.preventDefault();

			localStorage.setItem("totalPrice", "totalPrice");
			const storagePrice = localStorage.getItem("totalPrice");
			console.log(storagePrice);

			let contact = {
				firstName: firstName.value;
				lastName: lastName.value;
				address: address.value;
				city: city.value;
				mail: mail.value;
			}

			console.log(contact);

			
		}
	})
}	