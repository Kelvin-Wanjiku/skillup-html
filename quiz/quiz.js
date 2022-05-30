const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions,currentQuestionsIndex;
let quizScore = 0;

function selectAnswer(e){
    const selectedButton= e.target
    const correct= selectedButton.dataset.correct

    setStatusClass(document.body.correct)
    Array.from(answerButtonsElement.children).forEach((button))=>{
        setStatusClass(button, button.dataset.correct)
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }
    else{
        element.classList.add("wrong")
    }
}


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question =[
    {
        question:'which of these is a Javascript framework?',
        answers:[
            
               { text:'python',correct:false},
               {text:'Django',correct:false},
               {text:'React',correct:false},
               {text:'Eclipse',correct:false}
        ]
    },

    question: 'what is 4*3?',
    answers:[
        {text:'14', correct:false},
        {text:'12', correct:true}
    ]
]