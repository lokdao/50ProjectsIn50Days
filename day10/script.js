const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

const config = {
    headers: { Accept: 'application/json' }
}

generateJoke()

jokeBtn.addEventListener('click', generateJoke)

// Makes the function asynchronous
async function generateJoke() {
    const res = await fetch('https://icanhazdadjoke.com', config)
    
    const data = await res.json()

    jokeEl.innerHTML = data.joke
}

// This function is synchronous
// function generateJoke() {
//     fetch('https://icanhazdadjoke.com', config)
//     .then(res => res.json())
//     .then(data => {
//         jokeEl.innerHTML = data.joke
//     })
// }
