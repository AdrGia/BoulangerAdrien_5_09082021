

const cameras = async () => {
  //récupération des données de l'API//
  response = await fetch("http://localhost:3000/api/cameras/");
  return response.json();
};

const displayListing = (cameras) => {

  if(cameras.length === 0) {
    console.error("Data is empty!");
    return;
  }
  for (let camera of cameras) {
          const article = document.getElementById("cameras");
          //création section//
          const camerasSection = document.createElement("section");
          article.appendChild(camerasSection);
          camerasSection.className = "cameras";
          //création lien vers produit.html pour chaque section//
          const productLink = document.createElement("a");
          productLink.href = "produit.html?id=" + camera._id;
          camerasSection.appendChild(productLink);
          //création image//
          const cameraImg = document.createElement("img");
          productLink.appendChild(cameraImg);
          cameraImg.setAttribute("src", camera.imageUrl);
          cameraImg.setAttribute("alt", "Camera vintage" + camera.name);
          cameraImg.setAttribute("title", "Camera vintage" + camera.name);
          //création div cameraRef//
          const camerasRef = document.createElement("div");
          productLink.appendChild(camerasRef);
          camerasRef.className = "cameras_ref";
          //création h4 cameraRef//
          const h4CamerasRef = document.createElement("h4");
          camerasRef.appendChild(h4CamerasRef);
          h4CamerasRef.textContent = camera.name;
          //création p cameraRef//
          const pCamerasRef = document.createElement("span");
          camerasRef.appendChild(pCamerasRef);
          pCamerasRef.textContent = camera.price / 100 + "€";        
  }
}

cameras().then(data => {
  displayListing(data)
})