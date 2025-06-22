let currentQuestion = 0;
let corretAnsowers = 0;

showQuestion();

function showQuestion() {
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion];

        let pct = Math.floor((currentQuestion / questions.length) * 100); 
        document.querySelector('.progress--bar').style.width = `${pct}%`
        
    document.querySelector('.scoreArea').style.display = "none";
    document.querySelector('.questionArea').style.display = "block";

    document.querySelector('.question').innerHTML = q.question;

    let optionsHtml = '';

    for(let i in q.options) {
        optionsHtml += `<div data-op = "${i}"; class = "option"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`;
       
    }

    document.querySelector('.options').innerHTML = optionsHtml;

    document.querySelectorAll('.options .option').forEach(item => {
        item.addEventListener('click', optionClickEvent)
    })


    }else {
        finishQuiz();

    }
}

function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op'));

    if(clickedOption === questions[currentQuestion].answer) {
        corretAnsowers++
    }
    currentQuestion++; 
    showQuestion();

}


function finishQuiz(){
    let points = Math.floor((corretAnsowers/ questions.length) * 100); 

    if(points < 50){
        document.querySelector('.scoreText1').innerHTML = 'Errou muito slk!';
        document.querySelector('.scorePct').style.color = 'red';
    }else if (points >= 50 && points < 70){
        document.querySelector('.scoreText1').innerHTML = 'Muito bão!';
        document.querySelector('.scorePct').style.color = '#FFFF00';
    }else if (points >= 70){
        document.querySelector('.scoreText1').innerHTML = 'Parabéns vocé e o bichão msm!';
        document.querySelector('.scorePct').style.color = '#0D630D';
    }

    if(corretAnsowers <= 9){
        corretAnsowers = '0' + corretAnsowers;
    }


    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${corretAnsowers} Questões.`
    
    document.querySelector('.scoreArea').style.display = "block";
    document.querySelector('.questionArea').style.display = "none";
    document.querySelector('.progress--bar').style.width = `100%`;

    document.querySelector('button').addEventListener('click', () => {
        
        currentQuestion = 0;
        corretAnsowers = 0;
        showQuestion();

    })
}

