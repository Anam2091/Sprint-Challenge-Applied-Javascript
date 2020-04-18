// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const first = document.createElement('div')
    first.classList.add('header')

    const second = document.createElement('span')
    second.classList.add('date')
    second.textContent = 'SMARCH 28, 2019'

    const third = document.createElement('h1')
    third.textContent = 'Lambda Times'

    const fourth = document.createElement('span')
    fourth.classList.add('temp')
    fourth.textContent = '98°'

    first.appendChild(second)
    first.appendChild(third)
    first.appendChild(fourth)

    return first
}
const head = Header()

const container = document.querySelector('.header-container')
container.appendChild(head)