let assignValuesToRandomArticle = (title, description, url) => {
 let targetTitle = document.getElementById('randomTitle')
 targetTitle.innerHTML = title

 let targetDescription = document.getElementById('randomDescription')
 targetDescription.innerHTML = description

 let targetURL = document.getElementById('randomUrl')
 targetURL.setAttribute('href', url)
 targetURL.setAttribute('target', "_blank")
 targetURL.innerHTML = `(${url})`

 let article_div = document.getElementsByClassName('article_div')[0]
 article_div.setAttribute('class', 'article_div')

 errorDiv.setAttribute('class', 'hidden error_div')
}

let createSubmitButton = () => {
 let newButton = document.createElement('a')
 newButton.innerHTML = "Submit an Article"
 newButton.setAttribute('class', 'button')
 newButton.setAttribute('href', '/articles/new')

 let buttonDiv = document.getElementsByClassName('button_div')[0]
 buttonDiv.appendChild(newButton)

 randomButton.setAttribute('class', "button hidden")
}

let changeRandomButtonText = () => {
 randomButton.innerHTML = "More Random!"
}

let fetchRandomArticle = () => {
 fetch('/api/v1/articles/random')
   .then ( response => {
     if ( response.ok ) {
       return response;
     } else {
       let errorMessage = `${response.status} (${response.statusText})`;
       let error = new Error(errorMessage);
       throw(error);
     }
   })
   .then ( response => response.json())
   .then ( response => {
     if (response.length > 1) {
       assignValuesToRandomArticle(response[1], response[2], response[3])
       changeRandomButtonText()
     } else {
       errorDiv.setAttribute('class', 'error_div')
       createSubmitButton()
     }
   })
   .catch ( error => console.error(`Error in fetch: ${error.message}`) );
}

document.addEventListener('DOMContentLoaded', () =>{
 randomButton.addEventListener('click', () => {
   console.log("clicked")
   fetchRandomArticle()
 })
})

let randomButton = document.getElementById('randomTarget')
let errorDiv = document.getElementById('random_error')
