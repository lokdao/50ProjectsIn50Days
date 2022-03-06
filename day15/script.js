const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    // Adding a "+" sign changes the type string to number
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
    
        const increment = target / 250

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            // Waits for 1 milisecond before calling the function again
            setTimeout(updateCounter, 1)
        }
    }
     
    updateCounter()
})