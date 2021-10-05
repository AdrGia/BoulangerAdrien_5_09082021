
const stockCameras = JSON.parse(localStorage.getItem("newArticle"));
console.log(stockCameras);

const article = document.getElementById("page_product");
const cameraDiv = document.createElement("div");
page_product.appendChild(cameraDiv);
cameraDiv.className = "camera_ref";

const cameraDivBasket = document.createElement("div");
cameraDiv.appendChild(cameraDivBasket);
cameraDivBasket.className = "camera_basket";

const cameraH3 = document.createElement("h3");
cameraDivBasket.appendChild(cameraH3);
cameraH3.textContent = "Votre commande :";


if(stockCameras == null || stockCameras.length === 0){

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

        const iconDelectButton = document.createElement("i");
        delectButton.appendChild(iconDelectButton);
        iconDelectButton.className = "fas fa-trash-alt";
    };

      let delectButton = document.getElementsByClassName("delect_button");
    for (let i = 0 ; i < delectButton.length; i++) {
        delectButton[i].addEventListener("click" , function (event) { 
            event.preventDefault();
            let id = this.closest(".camera_price").id;

            stockCameras.splice(id, 1);

            localStorage.setItem('newArticle', JSON.stringify(stockCameras));
            JSON.parse(localStorage.getItem('newArticle'));

            alert('Cet article a bien été supprimé !');
            window.location.href = "panier.html";   
        }); 
    };
}



    let calculPrice = []
    for (stockCamera of stockCameras) {
        let article = stockCamera.cameraPrice;
        calculPrice.push(article);
    }


const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const totalPrice = calculPrice.reduce(reducer, 0);
    console.log(totalPrice);

    const total = document.createElement("p");
    cameraDivBasket.appendChild(total);
    total.className = "total";
    total.textContent = "Le montant total : " + totalPrice + "€";

    const suppress = document.createElement("button");
    cameraDivBasket.appendChild(suppress);
    suppress.className = "icon_suppress";

    const basketLink = document.createElement("a");
    suppress.appendChild(basketLink);
    basketLink.href = "panier.html";
    basketLink.id = "basket_link";
    basketLink.title = "Vider le panier";
    basketLink.textContent = "Vider mon panier ";

    const icon = document.createElement("i");
    basketLink.appendChild(icon);
    icon.className = "fas fa-trash-alt";

    suppress.addEventListener("click", function(event){
        event.preventDefault();
        localStorage.removeItem("newArticle");
        alert("Votre panier est vide ! ");
        window.location.href = "panier.html";
});


    const form = document.createElement("form");
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

const createTpl = (contact_details) => {


const divFirstName = document.createElement("div");
    form.appendChild(divFirstName);
    divFirstName.className = "div_name";

    const labelFirstName = document.createElement("label");
    divFirstName.appendChild(labelFirstName);
    labelFirstName.setAttribute("for", "prénom");
    labelFirstName.textContent = "Prénom : ";

    const firstName = document.createElement("input");
    divFirstName.appendChild(firstName);
    firstName.setAttribute("type", "text");
    firstName.setAttribute("class", "name");
    firstName.name = "Prénom";
    firstName.required = true;

    const divLastName = document.createElement("div");
    form.appendChild(divLastName);
    divLastName.className = "div_name";

    const labelLastName = document.createElement("label");
    divLastName.appendChild(labelLastName);
    labelLastName.setAttribute("for", "nom");
    labelLastName.textContent = "Nom : ";

    const lastName = document.createElement("input");
    divLastName.appendChild(lastName);
    lastName.setAttribute("type", "text");
    lastName.setAttribute("class", "name");
    lastName.name = "Nom";
    lastName.required = true;

    const divAddress = document.createElement("div");
    form.appendChild(divAddress);
    divAddress.className = "div_name";

    const labelAddress = document.createElement("label");
    divAddress.appendChild(labelAddress);
    labelAddress.setAttribute("for", "adresse");
    labelAddress.textContent = "Adresse : ";

    const address = document.createElement("input");
    divAddress.appendChild(address);
    address.setAttribute("type", "text");
    address.setAttribute("class", "name");
    address.name = "Adresse";
    address.required = true;

    const divCity = document.createElement("div");
    form.appendChild(divCity);
    divCity.className = "div_name";

    const labelCity = document.createElement("label");
    divCity.appendChild(labelCity);
    labelCity.setAttribute("for","ville");
    labelCity.textContent ="Ville : ";

    const city = document.createElement("input");
    divCity.appendChild(city);
    city.setAttribute("type", "text");
    city.setAttribute("class", "name");
    city.name = "Ville";
    city.required = true;

    const divMail = document.createElement("div");
    form.appendChild(divMail);
    divMail.className = "div_name";

    const labelMail = document.createElement("label");
    divMail.appendChild(labelMail);
    labelMail.setAttribute("for", "email");
    labelMail.textContent = "Adresse mail : ";

    const mail = document.createElement("input");
    divMail.appendChild(mail);
    mail.setAttribute("type", "text");
    mail.setAttribute("class", "name");
    mail.name = "Adresse mail";
    mail.required = true;


};    

    const divValid = document.createElement("div");
    form.appendChild(divValid);
    divValid.className = "div_name";

    let valid = document.createElement("button");
    divValid.appendChild(valid);
    valid.type = "submit";
    valid.name = "add";
    valid.id = "valid";
    valid.textContent = "Valider votre commande";

const createSelect = (send) => {

    try {

    valid.addEventListener('click', ((event) => {
    if(validName(firstName.value) && validName(lastName.value) && validAddress(address.value) && validName(city.value) && validMail(mail.value)) {
     event.preventDefault();
    localStorage.setItem("totalPrice", totalPrice);
   const storagePrice = localStorage.getItem("totalPrice");
   console.log(storagePrice);

  const contact = checkContact();
  const products = checkProducts();
  const send = checkSend();
  post(send).then((data) =>{
    redirect(data);

  })

  };

})

} catch(error) {
    console.error(error);
};     

const post = async function(data) => {

     try {
             const request = ("http://localhost:3000/api/cameras/" + order, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                            "Content-Type": "application/json"
                }

            });
                if(response.ok) {
                    let data = await response.json();
                     console.log(data.orderId);
                    localStorage.setItem("responseOrder", data.orderId);
                    window.location = "confirmation.html";
                    localStorage.removeItem("newArticle");
                 } else {
                     event.preventDefault();
                    console.error("Retour du serveur: ", response.status);
                    alert("Erreur rencontrée : " + response.status);
                }
            } catch (error) {
                alert("Erreur :" + error);
            }
    };  
}; 

post(send);   