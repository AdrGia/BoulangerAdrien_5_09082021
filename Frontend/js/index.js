// Récupération des données de l'API //

async function article() {
  const cameras = await getCameras()

  for (camera of cameras) {
    diplayCameras(camera)
  }
}

fetch("http://localhost:3000/api/cameras")
.then((response) => response.json())
.then((cameras) => cameras)
.catch((error) => { alert("Erreur de connexion avec le serveur")})


function displayCameras(camera) {
  const templateElt = document.getElementById("camera")
  const cloneElt = document.importNode(templateElt.content, true)

  cloneElt.getElementById("camerasLink")
  cloneElt.getElementById("camerasImage").src = camera.imageUrl
  cloneElt.getElementById("camerasName").textContent = camera.name
  cloneElt.getElementById("camerasPrice").textContent = camera.price 
  cloneElt.getElementById("camerasDescription").textContent = camera.description

  document.getElementById("article").appendChild(cloneElt)