const quizData = [
    {
        question: "What is the smallest country in the world (by area)?",
        a: "Vatican",
        b: "San Marino",
        c: "Nauru",
        d: "Andorra",
        correct: "a",
    },
    {
        question: "What is the name of the longest river in Africa? ",
        a: "The Congo River",
        b: "The Nile River",
        c: "The Zambezi River",
        d: "The Limpopo River",
        correct: "b",
    },
    {
        question: "What is the capital of Canada? ",
        a: "Ottawa ",
        b: "Toronto",
        c: "Montreal",
        d: "Vancouver",
        correct: "a",
    },
    {
        question: "What is the largest religious monument in the world?",
        a: "Wat Arun in Thailand",
        b: "Bagan in Myanmar",
        c: "Potala Palace in Tibet",
        d: "Angkor Wat in Cambodia",
        correct: "d",
    },
    {
        question: "In what country would you find the world's highest waterfall?",
        a: "Chile",
        b: "Zambia",
        c: "USA",
        d: "Venezuela",
        correct: "d",
    },
    {
        question: "The Galapagos Islands are part of which country?",
        a: "Ecuador",
        b: "Chile",
        c: "Colombia",
        d: "Argentina",
        correct: "a",
    },
    {
        question: "Which country is also known as the Netherlands?",
        a: "Denmark",
        b: "Holland",
        c: "Sweden",
        d: "Poland",
        correct: "b",
    },
    {
        question: "Which country is home to Machu Picchu?",
        a: "Mexico",
        b: "Bolivia",
        c: "Vietnam",
        d: "Peru",
        correct: "d",
    },
    {
        question: "Peking Duck is the national dish of what country? ",
        a: "Italy",
        b: "Indonesia",
        c: "China",
        d: "Vietnam",
        correct: "c",
    },
    {
        question: " Which country connects North and South America?",
        a: "Honduras",
        b: "Nicaragua",
        c: "Panama",
        d: "El Salvador",
        correct: "c",
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

const numberOfQuestion = document.getElementById("numberOfQuestion");
const numberOfAllQuestion = document.getElementById("numberOfAllQuestion");

let indexOfQuestion;
let indexOfPage = 0;

numberOfAllQuestion.innerHTML = quizData.length;

let currentQuiz = 0
let score = 0

let time = 300;
    const countDownEl = document.getElementById("countdown");   
    
    let counter = setInterval(updateCountdown, 1000);
    
    function updateCountdown(){
    
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
    
        seconds = seconds < 10 ? "0" + seconds: seconds;
    
        minutes = minutes < 10 ? "0" + minutes: minutes;
    
        countDownEl.innerHTML = `${minutes}:${seconds}`;
    
        time--;
    
        
    
        if(minutes <= 0 && seconds == 0) {
            const timeText = document.querySelector(".timer_text");
            timeText.textContent = "Time is over";
            //alert("Quiz over");
            Swal.fire({
                icon: 'error',
                title: 'Oops...time is up!',
                text: 'But you can restart the quiz',
                showConfirmButton: false,
                footer: '<a href="start.html" style="background-color:#44b927; padding: 1rem; text-decoration: none; color: white;">Restart the Quiz</a>'
              })
            clearInterval(counter);
        }
    
        
    }

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    numberOfQuestion.innerHTML = indexOfPage + 1;
    indexOfPage++; 

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {

        quiz.innerHTML = `

       <div class="end_quiz">
       <img src="https://img.freepik.com/free-vector/winner-cup-with-gold-medal-concept_1284-13591.jpg?t=st=1649089096~exp=1649089696~hmac=f87786e709de78b968be4c3294279ab1fcbc23a8b4a452b0246e08d7665b3cec&w=826" alt="winner" class="img">
        <h3 class="end-title">You answered ${score}/${quizData.length} questions correctly</h3>
        <button onclick="location.reload()" class="reload">Reload</button></div>
         `
       }
    }
})

}
