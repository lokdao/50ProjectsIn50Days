const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

// Could have used "dblclick"
// which would have made the code simpler
// Here we basically code our own double click
loveMe.addEventListener('click', (e) => {
    if(clickTime == 0) {
        clickTime = new Date().getTime()
    } else {
        // Register as a double click if both clicks
        // are within less than 800 millisecond
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
        } else {
            console.log(456)
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    
    // Construct a set of coordinates
    // so that wherever we clicked on the image
    // the coordinates are relative to the image's frame
    // and not to the viewport
    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}