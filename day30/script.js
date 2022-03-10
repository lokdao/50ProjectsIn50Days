const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'

let idx = 1
let speed = 300 / speedEl.value

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)

writeText()

function writeText() {
    // Cut the text and get a range of letters
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}