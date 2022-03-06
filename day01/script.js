// Retrieve all "panel" div elements from the page
const panels = document.querySelectorAll('.panel')

// Action executed when a click takes place on one of the panels
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        // Change a "panel" div to an "panel active" div
        panel.classList.add('active')
    })
})

// Remove the "active" class from all panels
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}