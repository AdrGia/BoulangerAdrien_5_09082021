// Récupération des données de l'API //

fetch("http://localhost:3000/api/cameras")
.then((response) => response.json())
.then((cameras) => cameras)
.catch((error) => { alert("Erreur de connexion avec le serveur")})