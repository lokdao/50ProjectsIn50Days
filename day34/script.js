const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

function resetDOM() {
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')

    nums.forEach((num) => num.classList.value= '')

    nums[0].classList.add('in')
}

replay.addEventListener('click', resetDOM)

function runAnimation() {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1

        num.addEventListener('animationend', (e) => {
            // Set the animation to move out the current number
            if(e.animationName == 'goIn' && idx != nextToLast) {
                num.classList.remove('in')
                num.classList.add('out')
                // Set the next number to move in
            } else if (e.animationName == 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            // The last number from the countdown is being displayed
            // We can now display the final message
            } else {
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
    })
}