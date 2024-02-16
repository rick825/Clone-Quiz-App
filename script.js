const quizdata = [
    {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Rome'],
    answer: 'Paris'
},
{
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    answer: 'Mars'
},
{
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Leo Tolstoy'],
    answer: 'William Shakespeare'
},
{
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'CO2', 'O2', 'NaCl'],
    answer: 'H2O'
},
{
    question: 'Which country is known as the Land of the Rising Sun?',
    options: ['Japan', 'China', 'South Korea', 'Thailand'],
    answer: 'Japan'
},
{
    question: 'What is the largest mammal?',
    options: ['Blue whale', 'Elephant', 'Giraffe', 'Hippo'],
    answer: 'Blue whale'
},
{
    question: 'Who painted the Mona Lisa?',
    options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
    answer: 'Leonardo da Vinci'
},
{
    question: 'What is the tallest mountain in the world?',
    options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
    answer: 'Mount Everest'
},
{
    question: 'What is the smallest planet in the solar system?',
    options: ['Mercury', 'Mars', 'Pluto', 'Earth'],
    answer: 'Mercury'
},
{
    question: 'Which bird is known for its ability to mimic human speech?',
    options: ['Parrot', 'Eagle', 'Owl', 'Penguin'],
    answer: 'Parrot'
}

    ];


    let currentquestion = 0;
    let marks = 0;
    let timeleft=220;
    const timer=document.getElementById('timer');
    const timeinterval=setInterval(function(){
        timeleft--;
        timer.textContent=timeleft;

        if (timeleft<=0){
            clearInterval(timeinterval);
            alert('time is over');
        }
    },1000);

    const length = quizdata.length;

    function loadquestion() {
        const question = document.getElementById('question');
        const option = document.getElementById('option');
        const id = document.getElementById('id');

        question.innerHTML = quizdata[currentquestion].question;

        option.innerHTML = '';
        quizdata[currentquestion].options.forEach(op => {
            const button = document.createElement("button");
            button.innerText = op;
            button.addEventListener('click', () => {
                button.style.backgroundColor = 'rgb(122, 22, 147)';
                button.style.color = 'white';
            })
            button.addEventListener('click', () => selectanswer(op));
            option.appendChild(button);
        })

        id.innerHTML = `Question: ${[currentquestion+1]} / ${length}`;
   
    }

    function selectanswer(selectedoption) {
        const answer = quizdata[currentquestion].answer;

        if (selectedoption === answer) {

            display.innerHTML = selectedoption + ': <h4>Your answer is correct</h4>';
            marks++
            const mark = document.getElementById('score').innerHTML= `Score: ${marks} / 10`;
        } else {

            display.innerHTML = selectedoption + ':<h4> Answer is wrong </h4> <br> The correct Answer is :' + answer;
           
        }
        const answerButtons = document.querySelectorAll('#option button');
answerButtons.forEach(button => {
    button.disabled = true;
});

        currentquestion++;
    }

   

    function nextquestion() {

       
        display.innerHTML = '';
        if (currentquestion < quizdata.length) {
            loadquestion();
        } else {
            submitanswer();
        }
    }

    function submitanswer() {
        console.log("Running");
        const printscore = document.getElementById('result');
        printscore.innerHTML=`<h2> Total marks obtained ${marks} out of 10 </h2>`;

    }

    loadquestion();


