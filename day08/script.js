const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        // Split each letter into an array
        // Put each letter into a span
        // and add a transition delay unique to each letter
        // Turn back the letter into a string
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})