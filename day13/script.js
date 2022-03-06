const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

// Textbox becomes active when the page loads
textarea.focus()

// Triggered everytime the user releases a key from their keyboard
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    // Checks that the key pressed was "Enter"
    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

// Create the tags as the user types them
function createTags(input) {
    const tags = 
        input.split(',')
        // Remove empty strings
        .filter(tag => tag.trim() !== '')
        // Remove empty char between the input value
        .map(tag => tag.trim())

    // Clear any previous tags
    tagsEl.innerHTML = ''

    tags.forEach(val => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = val
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect() {
    // Number of times each tag will be highlighted
    // before stopping on a selection
    const times = 30

    // Continuously highlights tags
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)

    }, 100)

    // Stops the highlighting and highlights a tag
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}