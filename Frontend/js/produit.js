
let params = new URL(document.location).searchParams;
let id = params.get("id");
const getCameras = async function(){

	try {

		let response = await fetch("http://localhost:3000/api/cameras/" + id);

    	if (response.ok) {
        let cameras = await response.json();
        console.log(camera);
    	}	
    }
    catch (error) {
    	alert("Erreur :" + error);
    }
	     
}    	