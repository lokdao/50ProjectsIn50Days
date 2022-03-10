// For notes storage
// sessionStorage will purge notes when browser is closed
// localStorage will keep the notes even after browser is closed

const addBtn = document.getElementById('add')

// Fetch notes from local storage
// and displays them
const notes = JSON.parse(localStorage.getItem('notes'))
if(notes) {
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')
    
    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `

    const editBtn = note.querySelector('.edit')
    const delteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    textArea.value = text
    // Use marked function not working
    // Issue with the Markdown import
    // main.innerHTML = marked(text)
    main.innerHTML = text

    delteBtn.addEventListener('click', () => {
        note.remove()

        // Refresh local storage
        // essentially will remove the note from local storage
        // that just got deleted
        updateLS()
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    // Logic to refresh the "main" div
    // to ensure text we entered in edit mode
    // is displayed after we finish editing the note
    textArea.addEventListener('input', (e) => {
        const { value } = e.target
        // Use marked function not working
        // Issue with the Markdown import
        // main.innerHTML = marked(value)
        main.innerHTML = value

        updateLS()
    })
    document.body.appendChild(note)
}

// Store notes in the browser's local storage 
function updateLS() {
    const notesText = document.querySelectorAll('textarea')
    const notes = []

    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes))
}