const getCameras = async function() {

  try {

    let response = await fetch("http://localhost:3000/api/cameras/");
    if (response.ok) {
        let cameras = await response.json();
        console.log(cameras);

        for (let camera of cameras) {
          const article = document.getElementById("cameras");

          const camerasSection = document.createElement("section");
          article.appendChild(camerasSection);
          camerasSection.className = "cameras";

          const productLink = document.createElement("a");
          productLink.href = "produit.html?id=" + camera._id;
          camerasSection.appendChild(productLink);

          const cameraImg = document.createElement("img");
          productLink.appendChild(cameraImg);
          cameraImg.setAttribute("src", camera.imageUrl);
          cameraImg.setAttribute("alt", "Camera vintage" + camera.name);
          cameraImg.setAttribute("title", "Camera vintage" + camera.name);

          const camerasRef = document.createElement("div");
          productLink.appendChild(camerasRef);
          camerasRef.className = "cameras_ref";

          const h4CamerasRef = document.createElement("h4");
          camerasRef.appendChild(h4CamerasRef);
          h4CamerasRef.textContent = camera.name;

          const pCamerasRef = document.createElement("p");
          camerasRef.appendChild(pCamerasRef);
          pCamerasRef.textContent = camera.price / 100 + "€";        
        }

       } else {
        console.error("Retour du serveur : ", response.status);
        alert("Erreur rencontrée : " + response.status); 
    }

  } catch (error) {
    alert("Erreur :" + error);
  }
}

getCameras();