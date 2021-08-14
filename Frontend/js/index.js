// Récupération des données de l'API //

fetch("http://localhost:3000/api/cameras")
    .then(function(reponse){
      console.log("zero")
      return reponse.json()
    })

    .then(function(cameras){
      console.log(cameras)
    })

    .catch(function(error){
      console.log("panier")
      alert(error)
    })