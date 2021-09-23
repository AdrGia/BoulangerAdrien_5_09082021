const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);


const request = async (urlRequest) => {
  response = await fetch(urlRequest + id);
  return response.json();
}

const createTpl = (camera) => {

     const article = document.getElementById("page_product");

      const cameraDiv = document.createElement("div");
      page_product.appendChild(cameraDiv);
      cameraDiv.className = "camera_ref";

      const cameraImg2 = document.createElement("img");
      page_product.appendChild(cameraImg2);
      cameraImg2.setAttribute("src", camera.imageUrl);
      cameraImg2.setAttribute("alt", "Caméra vintage" + camera.name);
      cameraImg2.setAttribute("title", "Caméra vintage" + camera.name);

      const cameraDivInfo = document.createElement("div");
      page_product.appendChild(cameraDivInfo);
      cameraDivInfo.className = "camera_info";

      const cameraH4 = document.createElement("h4");
      page_product.appendChild(cameraH4);
      cameraH4.textContent = camera.name;

      const cameraP = document.createElement("p");
      page_product.appendChild(cameraP);
      cameraP.textContent = camera.description;

      const cameraPrice = document.createElement("p");
      page_product.appendChild(cameraPrice);
      cameraPrice.textContent = "Son prix : " + camera.price / 100 + "€";

     const form = document.createElement("form");
      page_product.appendChild(form);

      const formDiv = document.createElement("div");
      form.appendChild(formDiv);
      formDiv.className = "lenses_name";

      const label = document.createElement("label");
      formDiv.appendChild(label);
      label.textContent = "Choix de la lentille : ";
      label.setAttribute("for", "Choix de la lentille " + camera.name);

      const select = document.createElement("select");
      formDiv.appendChild(select);
      select.setAttribute("name", "Choix de la lentille" + camera.name);
      select.setAttribute("id", "select_1" );

      let addCamera = document.createElement("button");
      form.appendChild(addCamera);
      addCamera.type = "submit";
      addCamera.name = "add";
      addCamera.id = "submit";
      addCamera.textContent = "Ajouter au panier";
}
      const createTpl2 = (lenses) => {


      for (i = 0; i < lenses.length; i++) {
        const selectOption = document.createElement("option");
        select.appendChild(selectOption);
        selectOption.textContent = lenses[i];
        selectOption.setAttribute=("value", lenses[i]);
      }
}

addCamera.addEventListener("click", function (event) {
                event.preventDefault();

                let camerasPicked = {
                    cameraName: camera.name,
                    cameraId: camera._id,
                    cameraLenses: select.value,
                    quantity: 1,
                    cameraPrice: camera.price / 100,
                };
                console.log(camerasPicked);

                let stockCameras = JSON.parse(localStorage.getItem('newArticle'));
                const cameraLenses = select.value;
                if(stockCameras) {
                    stockCameras.push(camerasPicked);
                    localStorage.setItem("newArticle", JSON.stringify(stockCameras));
                    console.log(stockCameras);
                    if (window.confirm(camera.name + " " + cameraLenses + ' a bien été ajouté. Souhaitez vous consulter votre panier ?')) { 
                        window.location.href = "panier.html";
                    } else {
                        window.location.href = "index.html";
                    }
                } else {
                    stockCameras = [];
                    stockCameras.push(camerasPicked);
                    localStorage.setItem('newArticle', JSON.stringify(stockCameras));
                    console.log(stockCameras);
                    if (window.confirm(cameras.name + " " + cameralenses + ' a bien été ajouté. Souhaitez vous consulter votre panier ?')) { 
                        window.location.href = "panier.html";
                    } else {
                        window.location.href = "index.html";
                    }
                }
});