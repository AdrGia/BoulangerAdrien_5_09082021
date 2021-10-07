

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

const checkContact = {
                firstName: firstName.value,
                lastName: lastName.value,
                address: address.value,
                city: city.value,
                email: mail.value,
            }

 const checkProducts = [];
            for (stockCamera of stockCameras) {
                let productsId = stockCamera.cameraId;
                products.push((productsId));
            }

const checkSend = {

                checkContact,
                checkProducts,
}