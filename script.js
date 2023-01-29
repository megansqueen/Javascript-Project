
//fetches
function fetchCatImage() {
    let image = document.getElementById("cat-image")
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(json => image.src = json[0].url)
}

function fetchQuestion() {
     fetch('http://localhost:3000/catFacts')
    .then(res => res.json())
    .then(data => {
        let questionObject = data[currentQuestionIndex]
        pullQuestions(questionObject)
    }
    )
}

//Variables
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const headerTwo = document.getElementById('messaging')
let totalRunningScore = 0
let currentQuestionIndex = 0 
let right, wrong

//event listeners
startButton.addEventListener("mouseover", mouseOverFunction, false);
startButton.addEventListener("mouseout", mouseOutFunction, false);

function mouseOverFunction() {
    startButton.setAttribute("style", "background-color:purple;")
}

function mouseOutFunction() {
    startButton.setAttribute("style", "background-color:hsl(var(--hue), 100%, 50%);")
}

document.addEventListener("DOMContentLoaded", () => {
    fetchCatImage()
})

startButton.addEventListener('click', startGame) 

nextButton.addEventListener('click', () => {
    setNextQuestion()
})

//functions
function startGame() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function pullQuestions(questionObject) {
    let question = questionObject.catFact
    let answers = questionObject.possibleAnswers
    let correctAnswer = questionObject.correctAnswer[0]
    currentQuestionIndex++
    questionElement.innerText = question
    answers.forEach(answer => {
        createButtons(answer, correctAnswer)
    })
}

function createButtons(answer, correctAnswer) {
    const button = document.createElement('button')
    button.innerText = answer
    button.classList.add('btn')
        if (answer === correctAnswer) {
            button.classList.add('.correct')
            right = button.innerText
        } else if (answer !== correctAnswer) {
            button.classList.add('.wrong')
            wrong = button.innerText
        } 
        answerButtonsElement.appendChild(button)
        button.addEventListener('click', selectAnswer)
}

function selectAnswer(e) {
    let selectedButton = e.target
    if (selectedButton.innerText === right) {
        answerButtonsElement.classList = 'btn correct'
        totalRunningScore++
        console.log(totalRunningScore)
        headerTwo.style = "color:green"
        headerTwo.innerHTML = "Great job - you got it right!"
    } else if (selectedButton.innerText === wrong) {
        answerButtonsElement.classList = 'btn wrong'
        headerTwo.style = "color:red"
        headerTwo.innerHTML = "Oops - try again."
    }
    checkIfComplete()
}

function checkIfComplete() {
    if (currentQuestionIndex < 9) {
        nextButton.classList.remove('hide')
    } else {
        finalResults(totalRunningScore)
    }
}

function setNextQuestion() {
    resetState()
    fetchCatImage()
    fetchQuestion()
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
    answerButtonsElement.classList = 'btn'
    headerTwo.style = "color:purple"
    headerTwo.innerHTML = "Which Cat Are You?"
}

function finalResults(totalRunningScore) {
    questionContainerElement.classList.add('hide')
    questionElement.classList.add('hide')
    answerButtonsElement.classList.add('hide')
    let image = document.getElementById("cat-image")
    if (totalRunningScore < 3) {
        headerTwo.innerHTML = "Your score was less than 4 out of 9,\n you know as much about cats as TouLouse!"
        image.src = "https://static.wixstatic.com/media/58d105_d0838e19f66d4c5d88517a3dc2066504~mv2.png/v1/fill/w_754,h_572,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/58d105_d0838e19f66d4c5d88517a3dc2066504~mv2.png"
        console.log(totalRunningScore)
    } else if (totalRunningScore < 4) {
        headerTwo.innerHTML = "Your score was less than 6 out of 9,\n you know as much about cats as Berlioz!"
        image.src = "https://static.wixstatic.com/media/58d105_c869a439da5c4196be9082da0b23b526~mv2.png/v1/fill/w_696,h_768,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/58d105_c869a439da5c4196be9082da0b23b526~mv2.png"
        console.log(totalRunningScore)
    } else if (totalRunningScore < 6) {
        headerTwo.innerHTML = "You scored less than 8,\n you know as much about cats as Thomas O'Malley!"
        image.src = "https://static.wixstatic.com/media/58d105_6b8553dd31454d169815baf422fdf005~mv2.png/v1/fill/w_728,h_768,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/58d105_6b8553dd31454d169815baf422fdf005~mv2.png"
        console.log(totalRunningScore)
    } else if (totalRunningScore < 8) {
        headerTwo.innerHTML = "Great job! Your score was 8 out of 9,\n you know as much about cats as Marie!"
        image.src = "https://static.wixstatic.com/media/58d105_2e959917d8ae4f0aa50d49b09be1122d~mv2.png/v1/fill/w_554,h_768,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/58d105_2e959917d8ae4f0aa50d49b09be1122d~mv2.png"
        console.log(totalRunningScore)
    } else {
        headerTwo.innerHTML = "You know everything about cats!\nJust as much as Duchess!"
        image.src = "https://static.wixstatic.com/media/58d105_afcabc5053b4499d9b0802469761adcd~mv2.png/v1/fill/w_662,h_768,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/58d105_afcabc5053b4499d9b0802469761adcd~mv2.png"
        console.log(totalRunningScore)
    }
}