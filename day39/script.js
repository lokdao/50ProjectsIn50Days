const background = document.getElementById('background')
const password = document.getElementById('password')
const submitBtn = document.getElementById('submit')

// "De-blur" the  image based on the length of the string entered
password.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length
    const blurValue = 20 - length * 2

    background.style.filter = `blur(${blurValue}px)`
})
