const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

// Fill all cups up to (and including( the one clicked
// or unfill (if they were already filled)
function highlightCups(idx) {
    const lastFull = smallCups[idx].classList.contains('full') && idx == smallCups.length - 1
    // Toggle the clicked element
    // If the element clicked is full but the next one is not
    // or if we are at the last one and it is full
    // we want to empty the clicked element
    if(lastFull){
        idx--
    } else {
        const nextEmpty = smallCups[idx].classList.contains('full') 
        && !smallCups[idx].nextElementSibling.classList.contains('full')
        
        if(nextEmpty) {
            idx--
        }
    }
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups == 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    // Remove the "Remaining" text if the big cup is full
    if(fullCups == totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}