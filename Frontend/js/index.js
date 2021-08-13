// Récupération des données de l'API //

const getCameras = async function(){
}

function getCamera() {

  return fetch("https://localhost:3000/api/cameras")
    .then(function(reponse){
      return reponse.json()
    })

    .then(function(cameras){
      return cameras
    })

    .catch(function(error){
      alert(error)
    })
}

