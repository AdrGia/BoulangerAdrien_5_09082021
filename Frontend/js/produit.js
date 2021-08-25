
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);

const getCameras = async function(){

	try {

		let response = await fetch("http://localhost:3000/api/cameras/" + id);

    	if (response.ok) {
        let camera = await response.json();
        console.log(camera);
    	
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
      formDiv.className = "lens_name";

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
      addCamera.textContent = "Ajouter au panier"

    }  

  }
    catch (error) {
    	alert("Erreur :" + error);
    }
	     
}

getCameras();    	