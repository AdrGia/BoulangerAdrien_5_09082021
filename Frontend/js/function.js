
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
