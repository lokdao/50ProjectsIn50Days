const codes = document.querySelectorAll('.code')

// Set the focus on the first input when entering the webpage
codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <= 9) {
            // Clears the input before moving to the next one
            codes[idx].value = ''
            setTimeout(() => codes[idx + 1].focus(), 10)
        } else if(e.key == 'Backspace') {
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
} )