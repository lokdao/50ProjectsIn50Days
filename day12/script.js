const toggles = document.querySelectorAll('.faq-toggle')
const faqTitles = document.querySelectorAll('.faq-title')

// Added similar logic to toggle FAQ
// by clicking on the title
faqTitles.forEach(title => {
    title.addEventListener('click', () => {
        title.parentNode.classList.toggle('active')
    })

    console.log(title.parentNode)

})


toggles.forEach(toggle => {   
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })

})