const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // Retrieves the mouse coordinate in the viewport
        // when the button is clicked
        const x = e.clientX
        const y = e.clientY

        // Get button top left corner coordinate
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)
        
        // Remove the circle div after 500ms
        setTimeout(() => circle.remove(), 500)
    })
})