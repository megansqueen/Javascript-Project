const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let totalRunningScore = 0
let shuffledQuestions, currentQuestionIndex


document.addEventListener("DOMContentLoaded", () => {
    fetchCatImage()
})

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

// function seeResults(totalRunningScore) {
//     if (totalRunningScore >= 2) {
//         let image = document.getElementById("cat-image")
//         image.src = 
//     }
// }

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Results'
        questionContainerElement.classList.add('hide')
        questionElement.classList.add('hide')
        answerButtonsElement.classList.add('hide')
        {
            startButton.addEventListener('click', seeResults)
        }
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong')
}

function trackScore(totalRunningScore) {
    if(questions.answers.correct === true) {
        totalRunningScore++
        console.log(totalRunningScore)
    }
}

const questions = [
    {
        question: 'What is the proper term for a group of kittens?',
        answers: [
            { text: 'kindle', correct: true },
            { text: 'Kaboodle', correct: false }
    ]
    },
    {
        question: 'All cats are born with what color eyes?',
        answers: [
            { text: 'black', correct: false },
            { text: 'blue', correct: true }
    ]
    },
    {
        question: "What percentage of a cat's bones are in its tail?",
        answers: [
            { text: '20%', correct: false },
            { text: '10%', correct: true }
    ]
    },
    {
        question: 'What is it called when a cat kneads the ground?',
        answers: [
            { text: 'kneading', correct: true },
            { text: 'snurgling', correct: false }
    ]
    },
    {
        question: 'How many different sounds can a cat make?',
        answers: [
            { text: '22', correct: false },
            { text: '100', correct: true }
    ]
    }
]

function fetchCatImage() {
    let image = document.getElementById("cat-image")
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(json => image.src = json[0].url)
}
