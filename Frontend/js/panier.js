
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

	
}