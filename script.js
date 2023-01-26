const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const headerTwo = document.getElementById('messaging')
let totalRunningScore = 0
let shuffledQuestions, currentQuestionIndex
let userAnswers = []

document.addEventListener("DOMContentLoaded", () => {
    fetchCatImage()
})

startButton.addEventListener('click', startGame) 

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

//this function is called when startbutton is clicked
//after start button is clicked, the 'hide' classList is added which makes the button disappear
//questions array of objs are then shuffled so that the order of the questions is random
//question container element is unhidden
//set next question function is called
function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

//this function triggers a few other unique functions
//reset state - this clears out the answer and colors set from the previous question
//get us a new cute cate image thank-YOU!
//show the next question in the new shuffled question array
function setNextQuestion() {
    resetState()
    fetchCatImage()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

//this function is going to show the next question
//first it adds the specific question as innertext to the element
//next a button variable is created and an element 'button'
//then for each answer (there are two) the button inner text is updated to those answers
//class of 'btn' is assigned so formatting is identical
//then, the if evaluates which answer of the two is "correct" and if it is, defines answer.correct
//button event listener when its clicked will call the select answer function and append the button variable to the answer button element
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

//this function resets the elements
//first it calls the clearStatusClass function (this takes care of removing things and resetting them)
//then the next button is hidden again until an answer is clicked
//a while loop is used to check for the presence of a correct/wrong child on the answer button element and remove if there
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

//This function does a lot - starts by taking in an event and setting two variables, selected button and correct
//also calls back functions setStatusClass and answerAlert
//first checks if the length of the shuffled questions is greater than the lenfth of the current question index plus 1, in other words are we out of questions
//then, if we are NOT out of questions, remove the hidden next button and carry on
//else, if we are at the end of the questions, the total score is pulled in and there are thresholds that determine what final message and image is received
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    answerAlert(e)
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else if (totalRunningScore < 3) {
        questionContainerElement.classList.add('hide')
        questionElement.classList.add('hide')
        answerButtonsElement.classList.add('hide')
        headerTwo.innerHTML = "Your score was less than 4 out of 9,\n you know as much about cats as TouLouse!"
        let image = document.getElementById("cat-image")
        image.src = "https://static.wixstatic.com/media/58d105_d0838e19f66d4c5d88517a3dc2066504~mv2.png/v1/fill/w_754,h_572,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/58d105_d0838e19f66d4c5d88517a3dc2066504~mv2.png"
        console.log(totalRunningScore)
    } else if (totalRunningScore < 4) {
        questionContainerElement.classList.add('hide')
        questionElement.classList.add('hide')
        answerButtonsElement.classList.add('hide')
        headerTwo.innerHTML = "Your score was less than 6 out of 9,\n you know as much about cats as Berlioz!"
        let image = document.getElementById("cat-image")
        image.src = "https://static.wixstatic.com/media/58d105_c869a439da5c4196be9082da0b23b526~mv2.png/v1/fill/w_696,h_768,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/58d105_c869a439da5c4196be9082da0b23b526~mv2.png"
        console.log(totalRunningScore)
    } else if (totalRunningScore < 6) {
        questionContainerElement.classList.add('hide')
        questionElement.classList.add('hide')
        answerButtonsElement.classList.add('hide')
        headerTwo.innerHTML = "You scored less than 8,\n you know as much about cats as Thomas O'Malley!"
        let image = document.getElementById("cat-image")
        image.src = "https://static.wixstatic.com/media/58d105_6b8553dd31454d169815baf422fdf005~mv2.png/v1/fill/w_728,h_768,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/58d105_6b8553dd31454d169815baf422fdf005~mv2.png"
        console.log(totalRunningScore)
    } else if (totalRunningScore < 8) {
        questionContainerElement.classList.add('hide')
        questionElement.classList.add('hide')
        answerButtonsElement.classList.add('hide')
        headerTwo.innerHTML = "Great job! Your score was 8 out of 9,\n you know as much about cats as Marie!"
        let image = document.getElementById("cat-image")
        image.src = "https://static.wixstatic.com/media/58d105_2e959917d8ae4f0aa50d49b09be1122d~mv2.png/v1/fill/w_554,h_768,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/58d105_2e959917d8ae4f0aa50d49b09be1122d~mv2.png"
        console.log(totalRunningScore)
    } else {
        questionContainerElement.classList.add('hide')
        questionElement.classList.add('hide')
        answerButtonsElement.classList.add('hide')
        headerTwo.innerHTML = "You know everything about cats!\nJust as much as Duchess!"
        let image = document.getElementById("cat-image")
        image.src = "https://static.wixstatic.com/media/58d105_afcabc5053b4499d9b0802469761adcd~mv2.png/v1/fill/w_662,h_768,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/58d105_afcabc5053b4499d9b0802469761adcd~mv2.png"
        console.log(totalRunningScore)
    }
}

//this function is taking in an element and a correct status (true/false)
//it calls the clear status function on the element
//if the correct status is true, 'correct' is added back to the element as a class
//else, "wrong" is added back to the element as a class
//the answerAlert function is called taking the element as an argument
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct')
        totalRunningScore++
        console.log(totalRunningScore)
    } else {
        element.classList.add('wrong')
    }
    answerAlert(element)
}

//This function takes in an element
//if the element classlist is wrong, it sets the answer button element class to btn wrong (with css styles set)
//the h2 text is changed to red and the user gets a message saying it was wrong
//else, the class is set to correct and the h2 text is set to green, and the text says they got it right
function answerAlert(e) {
    if ( e.classList == 'wrong') {
        answerButtonsElement.classList = 'btn wrong'
        headerTwo.style = "color:red"
        headerTwo.innerHTML = "Oops - try again."
    } else if (e.classList == 'correct') {
        answerButtonsElement.classList = 'btn correct'
        headerTwo.style = "color:green"
        headerTwo.innerHTML = "Great job - you got it right!"
    }
}

//This function resets some elements
//first removes either 'correct' or 'wrong' from the element that was taken in as an argument
//then the answer button element class is set back to the regular btn
//h2 becomes purple again and the text is reset to nuetral
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
    answerButtonsElement.classList = 'btn'
    headerTwo.style = "color:purple"
    headerTwo.innerHTML = "Which Cat Are You?"
}

//This is an arracy of objects with nested arrays of objects that covers the 9 questions with two answers each
const questions = [
    {
        question: 'What is the proper term for a group of kittens?',
        answers: [
            { text: 'Kaboodle', correct: false },
            { text: 'kindle', correct: true }
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

//This is my fetch request that brings us a new kitty image every time a question is loaded
function fetchCatImage() {
    let image = document.getElementById("cat-image")
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(json => image.src = json[0].url)
}
