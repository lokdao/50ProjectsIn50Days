const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    // Append the class hold to the element being dragged
    this.className += ' hold'

    // Hide the image in the original box while it is being dragged
    setTimeout(() => this.className = 'invisible', 0)

}

function dragEnd() {
    this.className = 'fill'
}

// Prevent default behaviour of this function from happening
function dragOver(e) {
    e.preventDefault()

}

// Prevent default behaviour of this function from happening
function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}