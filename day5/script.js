const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

// Call the blurring function every 30 milliseconds
let int = setInterval(blurring, 30)

function blurring () {
    load++

    if(load > 99) {
        // Stop calling the function once we reach 100%
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    // Every time our "load" value increments
    // we decrease the opacity of the text (from )
    // and decrease the blur of the background (from 30 to 0)
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// Maps a range of number to another range of numbers
// If the input "num" increases on every call
// the output of this function will be a decreasing number
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}