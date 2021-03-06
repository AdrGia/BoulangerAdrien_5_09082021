//récupération données LocalStorage//
const stockCameras = JSON.parse(localStorage.getItem("newArticle"));

const article = document.getElementById("page_product");
const cameraDiv = document.createElement("div");
article.appendChild(cameraDiv);
cameraDiv.className = "camera_ref";

const cameraDivBasket = document.createElement("div");
cameraDiv.appendChild(cameraDivBasket);
cameraDivBasket.className = "camera_basket";

const cameraH3 = document.createElement("h3");
cameraDivBasket.appendChild(cameraH3);
cameraH3.textContent = "Votre commande :";

const calculatePrice = (products) => {
    //calcul du montant total//
    let priceQuantity = [];
    for (let stockCamera of products) {
        priceQuantity.push(stockCamera.cameraPrice * stockCamera.quantity);
    }
    return priceQuantity;
}

if (stockCameras == null || stockCameras.length === 0) {
    //si le panier est vide//
    const blankBasket = document.createElement("p");
    cameraDivBasket.appendChild(blankBasket);
    blankBasket.className = "blank_basket";
    blankBasket.textContent = "Votre panier est vide."
} else {
    //récupération des éléments du panier//
    let i = 0;
    for (let stockCamera of stockCameras) {
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
        price.textContent = (stockCamera.cameraPrice * stockCamera.quantity) + " € "
        //création du bouton supprimer//
        const delectButton = document.createElement("button");
        cameraPrice.appendChild(delectButton);
        delectButton.className = "delect_button";

        const iconDelectButton = document.createElement("i");
        delectButton.appendChild(iconDelectButton);
        iconDelectButton.className = "fas fa-trash-alt";
    }

    let delectButton = document.getElementsByClassName("delect_button");
    for (let i = 0; i < delectButton.length; i++) {
        delectButton[i].addEventListener("click", function (event) {
            event.preventDefault();
            let id = this.closest(".camera_price").id;

            stockCameras.splice(id, 1);

            localStorage.setItem('newArticle', JSON.stringify(stockCameras));
            JSON.parse(localStorage.getItem('newArticle'));

            alert('Cet article a bien été supprimé !');
            window.location.href = "panier.html";
        });
    }

    const totalPrice = calculatePrice(stockCameras).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const total = document.createElement("p");
    cameraDivBasket.appendChild(total);
    total.className = "total";
    total.textContent = "Le montant total : " + totalPrice + "€";
}

const suppress = document.createElement("button");
cameraDivBasket.appendChild(suppress);
suppress.className = "icon_suppress";
//création du bouton pour vider le panier//
const basketLink = document.createElement("a");
suppress.appendChild(basketLink);
basketLink.href = "panier.html";
basketLink.id = "basket_link";
basketLink.title = "Vider le panier";
basketLink.textContent = "Vider mon panier ";

const icon = document.createElement("i");
basketLink.appendChild(icon);
icon.className = "fas fa-trash-alt";

suppress.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem("newArticle");
    alert("Votre panier est vide ! ");
    window.location.href = "panier.html";
});

//création du formulaire//
const form = document.createElement("form");
form.className = "contact_form";
cameraDivBasket.appendChild(form);

const cameraH3bis = document.createElement("h3");
form.appendChild(cameraH3bis);
cameraH3bis.textContent = "Remplir ce formulaire pour valider votre commande : ";
createTplForm();
//création fonctions de validité nom//
function validName(value) {
    return /^[A-Z-a-z\s]{3,40}$/.test(value);
}
// création fonctions de validité adresse//
function validAddress(value) {
    return /^[A-Z-a-z-0-9\s]{5,80}$/.test(value);
}
//création fonctions de validité mail//
function validMail(value) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}

//création bouton validation//
const divValid = document.createElement("div");
form.appendChild(divValid);
divValid.className = "div_name";

let valid = document.createElement("button");
divValid.appendChild(valid);
valid.type = "submit";
valid.name = "add";
valid.id = "valid";
valid.textContent = "Valider votre commande";

//envoie des données panier 
valid.addEventListener('click', ((event) => {
    event.preventDefault();
    const firstName = document.querySelector('.firstName');
    const lastName = document.querySelector('.lastName');
    const address = document.querySelector('.address');
    const city = document.querySelector('.city');
    const email = document.querySelector('.email');
    if (!validName(firstName.value)
        && !validName(lastName.value)
        && !validAddress(address.value)
        && !validName(city.value)
        && !validMail(email.value)
    ) {

    }

    const contact = {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        city: city.value,
        email: email.value,
    }

    let products = [];
    for (let stockCamera of stockCameras) {
        products.push((stockCamera.cameraId));
    }

    post({contact, products}).then((data) => {
        localStorage.setItem('totalPrice',
            calculatePrice(stockCameras)
                .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        );
        localStorage.setItem('responseOrder', data.orderId);
        location.href = 'confirmation.html';
    }).catch((error) => {
        console.error(error);
    });


}))
//envoie des données au serveur//
const post = async (data) => {
    return await fetch("http://localhost:3000/api/cameras/order", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json());
}
 

