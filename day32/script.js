const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

// Add an event listener to each checkbox, trackinh a change
toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOn) {
    if(good.checked && cheap.checked && fast.checked) {
        if(good == theClickedOn) {
            fast.checked = false
        } else if (cheap == theClickedOn) {
            good.checked = false
        } else if (fast == theClickedOn) {
            cheap.checked = false
        }
    }
}