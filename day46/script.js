const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
]

const quiz = document.getElementById('quiz')
const answers = document.querySelectorAll('.answer')
const question = document.getElementById('question')
const answerA = document.getElementById('answer-a')
const answerB = document.getElementById('answer-b')
const answerC = document.getElementById('answer-c')
const answerD = document.getElementById('answer-d')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer == quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered correctly ${score} out of ${quizData.length} questions</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    question.innerHTML = currentQuizData.question
    answerA.innerHTML = currentQuizData.a
    answerB.innerHTML = currentQuizData.b
    answerC.innerHTML = currentQuizData.c
    answerD.innerHTML = currentQuizData.d
}

function deselectAnswers() {
    answers.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {

    let answer

    answers.forEach(answerEl => {
        if(answerEl.checked) {
            console.log(answerEl.id)
            answer = answerEl.id
        }
    })

    return answer
}