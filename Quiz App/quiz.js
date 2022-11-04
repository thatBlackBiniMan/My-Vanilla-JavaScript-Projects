let start = document.querySelector("#start");
let guide = document.querySelector("#guide");
let exit = document.querySelector("#Exit");
let proceedBtn = document.querySelector("#Proceed");

let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");


let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");


let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");



let totalCorrect = document.querySelector("#total-correct");
let nextQuestion = document.querySelector(".next-question");


let result = document.querySelector("#result");
let points = document.querySelector("#points");
let quit = document.querySelector("#quit");
let startAgain = document.querySelector("#startAgain");

let choiceQue = document.querySelectorAll(".choice-que");

let index = 0;
let timer = 0;
let interval = 0;


let correct = 0;

let UserAns = undefined;

start.addEventListener("click", ()=>{
  start.style.display = "none";
  quiz.style.display = "none";
  guide.style.display = "block"
});



exit.addEventListener("click", ()=>{
  start.style.display = "block";
  guide.style.display = "none";
  quiz.style.display = "none";


});


proceedBtn.addEventListener("click", ()=>{
  quiz.style.display = "block";
  guide.style.display = "none";

  interval = setInterval(countDown, 1000);
  loadData();
  
  choiceQue.forEach(removeActive =>{
    removeActive.classList.remove("active");
   
  })
  totalCorrect.innerHTML = `${correct = 0} Out of ${MCQ.length} Questions`
 

});


let countDown = ()=>{
  if(timer === 20){
    clearInterval(interval);
    nextQuestion.click();

  }

  else{
    timer++;
    time.innerText = timer;
  }
}

 setInterval(countDown, 1000); 












let loadData = ()=>{
  questionNo.innerText = index + 1 + ". ";
  questionText.innerText = MCQ[index].question;
  option1.innerText = MCQ[index].choice1;
  option2.innerText = MCQ[index].choice2;
  option3.innerText = MCQ[index].choice3;
  option4.innerText = MCQ[index].choice4;

  timer = 0;
}

loadData();

choiceQue.forEach((choices, choiceNo) => {
  choices.addEventListener("click", ()=>{
    choices.classList.add("active");

   if(choiceNo === MCQ[index].anwser){
    correct++;
   } 

   else{
    correct+=0;
   }
   clearInterval(interval);

   for(i = 0; i <= 3; i++){
     choiceQue[i].classList.add("disabled") ;
   }
  })
}); 

nextQuestion.addEventListener("click", ()=>{
  if(index !== MCQ.length - 1){
   index++; 
   choiceQue.forEach(removeActive => {
    removeActive.classList.remove("active");
   }) 

   loadData();

   totalCorrect.style.display = "block";
   totalCorrect.innerHTML = `${correct} Out of ${MCQ.length} Questions`;
   clearInterval(interval);
   interval = setInterval (countDown, 1000)
  }

  else{
      index = 0;

      clearInterval(interval);
      quiz.style.display = "none";
      points.innerHTML = `You Got ${correct} Out Of ${MCQ.length}`;
      result.style.display = "block";
    }

  for(i = 0; i <= 3; i++){
    choiceQue[i].classList.remove("disabled");
  }
})


quit.addEventListener("click", ()=>{
  start.style.display = "block";
  result.style.display = "none";
  quiz.style.display = "none";


});



exit.addEventListener("click", ()=>{
  guide.style.display = "block";
  result.style.display = "none";
  quiz.style.display = "none";


});

