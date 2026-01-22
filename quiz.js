

// first 


// const questions = [
//     {
//         question:"Which is the largest animal in the world?",
//         answers:[
//             {text:"Shark", correct:false},
//             {text:" Blue Whale", correct:true},
//             {text:"Elephent", correct:false},
//             {text:"Giraf", correct: false}
//         ]  
//     },

//     {
//         question:"Which is the smallest countory in the world?",
//         answers:[
//             {text:"vatican City", correct: true},
//              {text:"Bhutn",correct: false},
//              {text:"Nepal",correct: false},
//          {text:"Shri lanka",correct: false},
//         ]  
//     },

//     {
//         question:"Which is the largest desert in the world?",
//         answers:[
//             {text:"Kalahari", correct: false},
//              {text:"Gobi",correct: false},
//              {text:"Sahara",correct: false},
//              {text:"Antarctica",correct: true}
//         ]  
//     },

//     {
//         question:"Which is the smallest continent in world?",
//         answers:[
//             {text:"Asia", correct: false},
//               {text:"Australia",correct: true},
//              {text:"Arctic",correct: false},
//            {text:"Africa",correct: false},
//         ]  
//     },
// ]

// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz(){
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "next";
//     startQuestion();
// }

// function startQuestion(){
//     resetState();
//     const currentQuestion = questions[currentQuestionIndex];
//     const questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". "  + currentQuestion.question;

//     currentQuestion.answers.forEach(answer => {
//         let button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);

//         if(answer.correct){
//             button.dataset.correct = answer.correct;
//         }

//         button.addEventListener("click",selectAnswer )
//     })
// }
// function resetState(){
//     nextButton.style.display = "none";
//     while(answerButtons.firstChild){
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }

// function selectAnswer(e){
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if(isCorrect){
//         selectedBtn.classList.add("correct");
//         score++;
//     }else{
//         selectedBtn.classList.add("incorrect");
//     }

//    Array.from(answerButtons.children).forEach(button =>{
//     if(button.dataset.correct === "true"){
//         button.classList.add("correct");
//     }
//     button.disabled = true;
//    });
//    nextButton.style.display = "block";

// }

// function showScore(){
//     resetState();
//     questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
//     nextButton.innerHTML = "Play Again";
//     nextButton.style.display = "block";
// }

// function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length){
//         startQuestion();
//     }else{
//         showScore();
//     }
// }

// nextButton.addEventListener("click", ()=>{
//     if(currentQuestionIndex < questions.length){
//         handleNextButton();
//     }else{
//         startQuiz();

//     }
// })

// startQuiz();




// second


const questions = [
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Shark", correct:false},
            {text:" Blue Whale", correct:true},
            {text:"Elephent", correct:false},
            {text:"Giraf", correct: false}
        ]  
    },

    {
        question:"Which is the smallest countory in the world?",
        answers:[
            {text:"vatican City", correct: true},
             {text:"Bhutn",correct: false},
             {text:"Nepal",correct: false},
         {text:"Shri lanka",correct: false},
        ]  
    },

    {
        question:"Which is the largest desert in the world?",
        answers:[
            {text:"Kalahari", correct: false},
             {text:"Gobi",correct: false},
             {text:"Sahara",correct: false},
             {text:"Antarctica",correct: true}
        ]  
    },

    {
        question:"Which is the smallest continent in world?",
        answers:[
            {text:"Asia", correct: false},
              {text:"Australia",correct: true},
             {text:"Arctic",correct: false},
           {text:"Africa",correct: false},
        ]  
    },
]



// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz(){
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     startQuestion();
// }

// function startQuestion(){
//     resetState();
//     const currentQuestion = questions[currentQuestionIndex];
//     const questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//     currentQuestion.answers.forEach(answer => {
//         let button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
//         if(answer.correct){
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", selectAnswer)
//     })
// }

// function resetState(){
//     nextButton.style.display = "none";
//     while(answerButtons.firstChild){
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }

// function selectAnswer(e){
    // const selectedBtn = e.target;
    // const isCorrect = selectedBtn.dataset.correct === "true";
    // if(isCorrect){
    //     selectedBtn.classList.add("correct");
    //     score++;
    // }else{
    //     selectedBtn.classList.add("incorrect")
    // }
        
//     Array.from(answerButtons.children).forEach(button => {
//       if(button.dataset.correct === "true"){
//         button.classList.add("correct");

//       }
//       button.disabled = true;
//     });
//    nextButton.style.display = "block";
// }
// function showScore(){
//     resetState();
//     questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
//     nextButton.innerHTML  = "Play Again";
//     nextButton.style.display = "block";
// }
// function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length){
//         startQuestion();
//     }else{
//         showScore();
//     }
// }

// nextButton.addEventListener("click", ()=>{
//     if(currentQuestionIndex < questions.length){
//         handleNextButton();
//     }else{
//         startQuiz();
//     }
// })

// startQuiz();


// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz(){
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     nextButton.style.display = "none";
//     startQuestion();
// };

// function startQuestion(){
//     resetState();
//     const currentQuestion = questions[currentQuestionIndex];
//     const questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//     currentQuestion.answers.forEach(answer => {
//         let button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
      
    //     if(answer.correct){
    //         button.dataset.correct = answer.correct;
    //     }
    //     answerButtons.addEventListener("click", selectAnswer);
    // })
// }


// function resetState(){
//     while(answerButtons.firstChild){
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }

// function selectAnswer(e){
    // const selectedBtn = e.target;
    // const isCorrect = selectedBtn.dataset.correct === "true";
    // if(isCorrect){
    //     selectedBtn.classList.add("correct");
    //     score++;
    // }else{
    //     selectedBtn.classList.add("incorrect")
    // }

//     Array.from(answerButtons.children).forEach(button => {
//         if(button.dataset.correct === "true"){
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     })

//     nextButton.style.display = "block";
// }

// function showScore(){
//     resetState();
//     questionElement.innerHTML = `You scored ${score}out of ${questions.length}`;
//     nextButton.innerHTML = "Play Again";
//     nextButton.style.display = "block";
// }
// function handleNextQuestion(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length){
//         startQuestion();
//     }else{
//         showScore();
//     }
// }

// nextButton.addEventListener("click", ()=> {
//     if(currentQuestionIndex <questions.length){
//         handleNextQuestion();
//     }else{
//         startQuiz();
//     }
// })

// startQuiz();



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;

    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";

    startQuestion();
}

function startQuestion(){
    resetState();

    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        answerButtons.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add('correct');
        }

        button.disabled = true;

    });

    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.style.display = "block";
    nextButton.innerHTML = "Play Again";
}
function handleNextQuestion(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        startQuestion();
    }else{
        
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextQuestion();
    }else{
        startQuiz();
    }
})
startQuiz();
