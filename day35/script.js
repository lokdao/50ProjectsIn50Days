const carousel = document.querySelector('#imgs')
const prevBtn = document.querySelector('#left')
const nextBtn = document.querySelector('#right')
const imgs = document.querySelectorAll('#imgs img')

let idx = 0
let interval = setInterval(run, 2000)


prevBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

nextBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

// Prevents the interval to "fight"
// against the user pressing "prev" or "next" buttons
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > imgs.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = imgs.length - 1
    }

    carousel.style.transform = `translateX(${idx * -500}px)`
}