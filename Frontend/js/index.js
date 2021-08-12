main()

function main() {
  const article = getArticle()
}
function getArticle(){
  fetch("http://localhost:3000/api/cameras/posts")
    .then(function(response){
      return response.json()
    })
    .then(function(article){
      console.log(article)
    })
    .catch(function(error){
      alert(error)
    })
}
