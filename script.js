const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const headerTwo = document.getElementById('messaging')
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
    fetchCatImage()
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
        console.log(totalRunningScore)
    } else if (totalRunningScore < 11) {
        questionContainerElement.classList.add('hide')
        questionElement.classList.add('hide')
        answerButtonsElement.classList.add('hide')
        headerTwo.innerHTML = "You are TouLouse!"
        let image = document.getElementById("cat-image")
        image.src = "https://static.wixstatic.com/media/58d105_d0838e19f66d4c5d88517a3dc2066504~mv2.png/v1/fill/w_754,h_572,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/58d105_d0838e19f66d4c5d88517a3dc2066504~mv2.png"
        console.log(totalRunningScore)
    } else if (totalRunningScore < 15) {
        questionContainerElement.classList.add('hide')
        questionElement.classList.add('hide')
        answerButtonsElement.classList.add('hide')
        headerTwo.innerHTML = "You are Berlioz!"
        let image = document.getElementById("cat-image")
        image.src = "https://static.wixstatic.com/media/58d105_c869a439da5c4196be9082da0b23b526~mv2.png/v1/fill/w_696,h_768,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/58d105_c869a439da5c4196be9082da0b23b526~mv2.png"
        console.log(totalRunningScore)
    } else if (totalRunningScore < 17) {
        questionContainerElement.classList.add('hide')
        questionElement.classList.add('hide')
        answerButtonsElement.classList.add('hide')
        headerTwo.innerHTML = "You are Thomas O'Malley!"
        let image = document.getElementById("cat-image")
        image.src = "https://static.wixstatic.com/media/58d105_6b8553dd31454d169815baf422fdf005~mv2.png/v1/fill/w_728,h_768,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/58d105_6b8553dd31454d169815baf422fdf005~mv2.png"
        console.log(totalRunningScore)
    } else if (totalRunningScore < 18) {
        questionContainerElement.classList.add('hide')
        questionElement.classList.add('hide')
        answerButtonsElement.classList.add('hide')
        headerTwo.innerHTML = "You are Marie!"
        let image = document.getElementById("cat-image")
        image.src = "https://static.wixstatic.com/media/58d105_2e959917d8ae4f0aa50d49b09be1122d~mv2.png/v1/fill/w_554,h_768,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/58d105_2e959917d8ae4f0aa50d49b09be1122d~mv2.png"
        console.log(totalRunningScore)
    } else {
        questionContainerElement.classList.add('hide')
        questionElement.classList.add('hide')
        answerButtonsElement.classList.add('hide')
        headerTwo.innerHTML = "You are Duchess!"
        let image = document.getElementById("cat-image")
        image.src = "https://static.wixstatic.com/media/58d105_afcabc5053b4499d9b0802469761adcd~mv2.png/v1/fill/w_662,h_768,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/58d105_afcabc5053b4499d9b0802469761adcd~mv2.png"
        console.log(totalRunningScore)
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct')
        totalRunningScore++
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong')
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
            { text: 'kneading', correct: false },
            { text: 'snurgling', correct: true }
    ]
    },
    {
        question: 'How many different sounds can a cat make?',
        answers: [
            { text: '22', correct: false },
            { text: '100', correct: true }
    ]
    },
    {
        question: 'What year was the first major cat show held in the United States?',
        answers: [
            { text: '1921', correct: false},
            { text: '1895', correct: true}
        ]
    },
    {
        question: 'What is the normal body temperature for a cat?',
        answers: [
            { text: '102 degrees fahrenheit', correct: true},
            { text: '98 degrees fahrenheit', correct: false}
        ]
    },
    {
        question: 'What breed of cat has a reputation for being cross-eyed?',
        answers: [
            { text: 'Egyptian Mau', correct: false},
            { text: 'Siamese', correct: true}
        ]
    },
    {
        question: 'What breed of cat has no tail?',
        answers: [
            { text: 'Snowshoe', correct: false},
            { text: 'Manx', correct: true}
        ]
    }
]

function fetchCatImage() {
    let image = document.getElementById("cat-image")
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(json => image.src = json[0].url)
}
