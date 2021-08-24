
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);

const getCameras = async function(){

	try {

		let response = await fetch("http://localhost:3000/api/cameras/" + id);

    	if (response.ok) {
        let cameras = await response.json();
        console.log(camera);
    	
      const article = document.getElementById("page_product");

    	const cameraDiv = document.createElement("div");
    	page_product.appendChild(cameraDiv);
    	cameraDiv.className = "camera_ref";

    	const cameraImg = document.createElement("img");
    	page_product.appendChild(cameraImg);
    	cameraImg.setAttribute("src", camera.imageUrl);
    	cameraImg.setAttribute("alt", "Caméra vintage" + camera.name);
    	cameraImg.setAttribute("title", "Caméra vintage" + camera.name);

    	const cameraDivInfo = document.createElement("div");
    	page_product.appendChild(cameraDivInfo);
    	cameraDivInfo.className = camera_info;

      const cameraH4 = document.createElement("h4");
      page_product.appendChild(cameraH4);
      cameraH4.className = "camera_h4";

      const cameraP = document.createElement("p");
      page_product.appendChild(cameraP);
      cameraP.textContent = "camera.name";
    }  

  }
    catch (error) {
    	alert("Erreur :" + error);
    }
	     
}

getCameras();    	