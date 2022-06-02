
const createTpl = (camera) => {
    //création de la template de la page produit//
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
      
      //ajout de la description//
      const cameraP = document.createElement("p");
      page_product.appendChild(cameraP);
      cameraP.textContent = camera.description;
      
      //ajout du prix//
      const cameraPrice = document.createElement("p");
      page_product.appendChild(cameraPrice);
      cameraPrice.textContent = "Son prix : " + camera.price / 100 + "€";

      //création choix des lentilles//
     const form = document.createElement("form");
      page_product.appendChild(form);

      const formDiv = document.createElement("div");
      form.appendChild(formDiv);
      formDiv.className = "lenses_name";

      const label = document.createElement("label");
      formDiv.appendChild(label);
      label.textContent = "Choix de la lentille : ";
      label.setAttribute("for", "Choix de la lentille " + camera.name);

      let addCamera = document.createElement("button");
      form.appendChild(addCamera);
      addCamera.type = "submit";
      addCamera.name = "add";
      addCamera.id = "submit";
      addCamera.textContent = "Ajouter au panier";

   createSelect(camera, formDiv);  
}

const createSelect = (camera, formDiv) => {
  //création ajout des différents lentilles//
  const select = document.createElement("select");
  formDiv.appendChild(select);
  select.setAttribute("name", "Choix de la lentille" + camera.name);
  select.setAttribute("id", "select_lens");
  
  for (i = 0; i < camera.lenses.length; i++) {
    const selectOption = document.createElement("option");
    selectOption.textContent = camera.lenses[i];
    selectOption.setAttribute("value", camera.lenses[i]);
    select.appendChild(selectOption);
  }
}

document.addEventListener("DOMContentLoaded", (event)  => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  //récupération des données de cameras sélectionné par son id//
  const id = urlParams.get('id');
  requestApi(`http://localhost:3000/api/cameras/${id}`).then( (data) => {
    event.preventDefault();
    createTpl(data);

    //création bouton panier//
    const addCamera = document.querySelector("#submit");
    
    addCamera.addEventListener("click", function (event) {
      event.preventDefault();

      const selectLensValue = document.querySelector("#select_lens").value;
      const stockCameras = JSON.parse(localStorage.getItem('newArticle')) ?? [];
      
      let camerasPicked = {
        //stockage des données du/des cameras souhaité dans LocalStorage//
        cameraName: data.name,
        cameraId: data._id,
        cameraLenses: selectLensValue,
        quantity: 1,
        cameraPrice: data.price / 100,
      };

      let newBasket = [];
      if(!hasProductIntoBasket(stockCameras, camerasPicked)) {
          stockCameras.push(camerasPicked);
          newBasket = stockCameras;
          
      } else {
          newBasket = manageProduct(stockCameras, camerasPicked);
      }
      
      localStorage.setItem('newArticle', JSON.stringify(newBasket));
    });
  });
  
});

const hasProductIntoBasket = (basket, camerasPicked) => {
    if(!basket || !camerasPicked) {
        console.error('Missing parameters');
        throw new Error('Bad parameters');
    }
    return basket.find((product) => product.cameraId === camerasPicked.cameraId
        && product.cameraLenses === camerasPicked.cameraLenses);
}

const manageProduct = (basket, camerasPicked) => {
    if(!basket || !camerasPicked) {
        console.error('Missing parameters');
        throw new Error('Bad parameters');
    }
    basket.map((product) => {
        if(product.cameraId === camerasPicked.cameraId && product.cameraLenses === camerasPicked.cameraLenses) {
            product.quantity += 1;
        }
        return product;
    });
    return basket;
}


