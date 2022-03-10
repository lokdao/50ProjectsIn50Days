const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')

let userRating = 'Satisfied'

// Using event bubbling vs having a forEach loop
// Adding an event listener on the panel
// will fire off whenever any sub element is clicked on
ratingsContainer.addEventListener('click', (e) => {
    // Retrieves the container parent of the image that was clicked on
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        userRating = e.target.nextElementSibling.innerHTML
        console.log(userRating)
    }
})

function removeActive() {
    ratings.forEach(rating => rating.classList.remove('active'))
}

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${userRating}</strong>
        <p>We'll use yout feedback to improve our customer support</p>
    `
})