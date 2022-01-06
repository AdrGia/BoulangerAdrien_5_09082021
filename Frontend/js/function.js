
const requestApi = async(urlApi) => {
  return await fetch(urlApi).then( (response) => response.json()).catch(error => {
      console.error(error);
      throw new Error(`Error: ${error.message}`);
    });
}

const addBasket = (camerasPicked, ...basket) => {
  if(!camerasPicked?.cameraId) {
    console.error("Invalid object");
    return;
  }
  basket.push(camerasPicked);
  localStorage.setItem("newArticle", JSON.stringify(basket));
}


const confirmProduct = (camerasPicked) => {
    if(!camerasPicked?.cameraId) {
    console.error("Invalid object");
    return;
  }
  const select = document.querySelector("#select_1");
  const message = `${camerasPicked.name} ${select.value} a bien été ajouté. Souhaitez vous consulter votre panier ?`;
  return window.confirm(message);
}

const createTplForm = () => {

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
    firstName.setAttribute("class", "firstName");
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
    lastName.setAttribute("class", "lastName");
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
    address.setAttribute("class", "address");
    address.name = "Adresse";
    address.required = true;

    const divCity = document.createElement("div");
    form.appendChild(divCity);
    divCity.className = "div_name";

    const labelCity = document.createElement("label");
    divCity.appendChild(labelCity);
    labelCity.setAttribute("for", "ville");
    labelCity.textContent = "Ville : ";

    const city = document.createElement("input");
    divCity.appendChild(city);
    city.setAttribute("type", "text");
    city.setAttribute("class", "city");
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
    mail.setAttribute("class", "email");
    mail.name = "Adresse mail";
    mail.required = true;
};