const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            {text: "Paris",correct:true, },
            {text:"London", correct:false,},
            {text: "France",correct:false,},
            {text: "Berlin",correct:false,}
                
            ]
        
    },
    {
        question: "Who was the first president of the United States?",
        answers:[
            {text:"George Washington", correct: true},
            {text: "Thomas Jefferson", correct: false},
            {text: "Abraham Lincoln", correct: false},
            {text: "Franklin D. Roosevelt", correct: false}
            
        ],
    },
    {
        question: "Which planet in our solar system has the most moons?",
        answers:[
            {text:"Jupiter", correct: true},
            {text: "Saturn", correct: false},
            {text: "Mars", correct: false},
            {text: "Uranus", correct: false}
        ]
    },
    {
        question: "The Great Fire of London occurred on which day of the week?",
        answers:[
            {text:"Tuesday", correct: true},
            {text: "Wednesday", correct: false},
            {text: "Thursday", correct: false},
            {text: "Friday", correct: false}
     ],
     },
     {
        question: "How many continents are there in the world?",
        answers:[
            {text:"7", correct: true},
            {text: "8", correct: false},
            {text: "9", correct: false},
            {text: "10", correct: false}
        ],
        
     },
    ];

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-button");
    const nextButton = document.getElementById("next-btn");
    let currentQuestionIndex = 0;
    let score=0;

    function startQuiz(){
        currentQuestionIndex = 0;
        score=0;
        nextButton.innerHTML="Next";
        showQuestion();
    }
    function showQuestion() {
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.
        question;
        
        currentQuestion.answers.forEach(answer =>{
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }

            

            
            
            
            button.addEventListener("click",selectAnswer);
            
            
        });

    }
function resetState(){
    nextButton.style.display ="none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    //check to see if it's the last question
    
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML= `you scored ${score} out of ${questions.length}!` ;
    nextButton.innerHTML ="Play Again";
    nextButton.style.display = "block";

}


function handleNextButton (){
    currentQuestionIndex++;
    if(currentQuestionIndex  < questions.length) {
        showQuestion();
    }else{
        showScore();
}
}
 nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }
 });


    startQuiz();


