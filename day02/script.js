// Get all HTML elements from the DOM
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

// "Next" button logic
next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

// "Prev" button logic
prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    // Update each circle style
    // based on the number of active elements
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    // Get all active elements from the DOM
    const actives = document.querySelectorAll('.active')

    // Set the progress bar to blue based
    progress.style.width = (actives.length -1 ) / (circles.length - 1) * 100 + '%'

    // Logic to display previous & next buttons
    // in a disabled state
    if(currentActive == 1) {
        prev.disabled = true
    } else if(currentActive == circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}