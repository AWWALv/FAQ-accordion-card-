let arrowOne = document.getElementById("arrow-one");
let arrowTwo = document.getElementById("arrow-two");
let arrowThree = document.getElementById("arrow-three");
let arrowFour = document.getElementById("arrow-four");
let arrowFive = document.getElementById("arrow-five");


let faqAnswerOne = document.getElementById("faq-answer-one")
let faqAnswerTwo = document.getElementById("faq-answer-two")
let faqAnswerThree = document.getElementById("faq-answer-three")
let faqAnswerFour = document.getElementById("faq-answer-four")
let faqAnswerFive = document.getElementById("faq-answer-five")

let questionOne=document.getElementById("question-one")
let questionTwo=document.getElementById("question-two")
let questionThree=document.getElementById("question-three")
let questionFour=document.getElementById("question-four")
let questionFive=document.getElementById("question-five")

arrowOne.addEventListener('click', function(){
    questionOne.style.color='hsl(238, 29%, 16%)'
    let down = arrowOne.classList.toggle('arrow-up');

    if(down === true){
        faqAnswerOne.style.display= 'block';
        faqAnswerOne.style.paddingBottom='10px'
    }else{
        faqAnswerOne.style.display= 'none';
        questionOne.style.color='hsl(240, 6%, 50%)';
        
    }
   
});

arrowTwo.addEventListener('click', function(){
    questionTwo.style.color='hsl(238, 29%, 16%)'
    let down = arrowTwo.classList.toggle('arrow-up');

    if(down === true){
        faqAnswerTwo.style.display= 'block';
        faqAnswerTwo.style.paddingBottom='10px'
        
    }else{
        faqAnswerTwo.style.display= 'none';
        questionTwo.style.color='hsl(240, 6%, 50%)';
    }
   
});

arrowThree.addEventListener('click', function(){
    questionThree.style.color='hsl(238, 29%, 16%)'
    let down = arrowThree.classList.toggle('arrow-up');


    if(down === true){
        faqAnswerThree.style.display= 'block';
        faqAnswerThree.style.paddingBottom='10px'
    }else{
        faqAnswerThree.style.display= 'none';
        questionThree.style.color='hsl(240, 6%, 50%)';
    }
   
});

arrowFour.addEventListener('click', function(){
    questionFour.style.color='hsl(238, 29%, 16%)'
    let down = arrowFour.classList.toggle('arrow-up');

    if(down === true){
        faqAnswerFour.style.display= 'block';
        faqAnswerFour.style.paddingBottom='10px'
    }else{
        faqAnswerFour.style.display= 'none';
        questionFour.style.color='hsl(240, 6%, 50%)';
    }
   
});

arrowFive.addEventListener('click', function(){
    questionFive.style.color='hsl(238, 29%, 16%)'
    let down = arrowFive.classList.toggle('arrow-up');


    if(down === true){
        faqAnswerFive.style.display= 'block';
        faqAnswerFive.style.paddingBottom='10px'
    }else{
        faqAnswerFive.style.display= 'none';
        questionFive.style.color='hsl(240, 6%, 50%)';
    }
   
});