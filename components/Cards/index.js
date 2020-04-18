// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(function (response) {
    console.log(response);
    const results = response.data.articles
    const java = results.javascript
    const boot = results.bootstrap
    const tech = results.technology
    const jq = results.jquery
    const nodey = results.node

    for(let i=0; i<java.length; i++){
        const final = returny(java[i])
        const appen = document.querySelector('.cards-container')
        appen.appendChild(final)
    }
    for(let i=0; i<boot.length; i++){
        const final = returny(boot[i])
        const appen = document.querySelector('.cards-container')
        appen.appendChild(final)
    }
    for(let i=0; i<tech.length; i++){
        const final = returny(tech[i])
        const appen = document.querySelector('.cards-container')
        appen.appendChild(final)
    }
    for(let i=0; i<jq.length; i++){
        const final = returny(jq[i])
        const appen = document.querySelector('.cards-container')
        appen.appendChild(final)
    }
    for(let i=0; i<nodey.length; i++){
        const final = returny(nodey[i])
        const appen = document.querySelector('.cards-container')
        appen.appendChild(final)
    }
  })
  .catch(function (error) {
    console.log(error);
  });

const returny = function(argument){
  const cardy = document.createElement('div')
  cardy.classList.add('card')

  const heady = document.createElement('div')
  heady.classList.add('headline')
  heady.textContent = argument.headline

  const authory = document.createElement('div')
  authory.classList.add('author')

  const imgy = document.createElement('div')
  imgy.classList.add('img-container')

  const imgy2 = document.createElement('img')
  imgy2.setAttribute('src', argument.authorPhoto)

  const spany = document.createElement('span')
  spany.textContent = argument.authorName

    

  cardy.appendChild(heady)
  cardy.appendChild(authory)

  authory.appendChild(imgy)
  authory.appendChild(spany)
  imgy.appendChild(imgy2)

  return cardy
}