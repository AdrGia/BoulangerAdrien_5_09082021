//récupération de l'id de la commande//
const orderId = localStorage.getItem("responseOrder");
//récupération du prix total de la commande//
const totalPrice = localStorage.getItem("totalPrice");
//création de la page de confirmation//
const article = document.getElementById("page_product");
const cameraDiv = document.createElement("div");
article.appendChild(cameraDiv);
cameraDiv.className = "camera_confirm";

const cameraH3 = document.createElement("h3");
cameraDiv.appendChild(cameraH3);
cameraH3.textContent = "OriCam vous remercie pour la commande !";

const cameraP = document.createElement("p");
cameraDiv.appendChild(cameraP);
cameraP.textContent = "Nous avons le plaisir de vous informer que votre commande a bien été enregistrée.";

const cameraP2 = document.createElement("p");
cameraDiv.appendChild(cameraP2);
cameraP2.innerHTML = "Votre commande arrive bientôt chez vous.<br /> Vous trouverez ci-dessous le récapitulatif de votre comande.";

const cameraP3 = document.createElement("p");
cameraDiv.appendChild(cameraP3);
cameraP3.textContent = "Nous espérons vous revoir très vite chez OriCam !";

const cameraDivConfirm = document.createElement("div");
cameraDiv.appendChild(cameraDivConfirm);
cameraDivConfirm.clasName = "confirm";

const cameraH3Bis = document.createElement("h3");
cameraDivConfirm.appendChild(cameraH3Bis);
cameraH3Bis.textContent = "Récapitulatif de la commande : ";

const cameraP5 = document.createElement("p");
cameraDivConfirm.appendChild(cameraP5);
cameraP5.textContent = "Numéro de commande : " + orderId;
cameraP5.className = "confirm_p";

const cameraP6 = document.createElement("p");
cameraDivConfirm.appendChild(cameraP6);
cameraP6.textContent = "Montant total de la commande : " + totalPrice + "€";
cameraP6.className = "confirm_p";
//buton du clear du LocalStorage//
document.querySelector('.button-return').addEventListener('click', () => {
    localStorage.clear();
})

