let start = document.querySelector("#start");
let guide = document.querySelector("#guide");

let exit = document.querySelector("#exit");

let continueBtn = document.querySelector("#continue");


let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");


let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");


let result = document.querySelector("#result");
let quit = document.querySelector("#quit");

let startAgain = document.querySelector("#startAgain");  


let choice_que = document.querySelector(".choice_que");  



let index = 0;
let timer = 0;
let interval = 0;


let correct = 0;

let UserAns = undefined;


start.addEventListener("click", ()=>{
  star.style.display = "none";
  guide.style.display = "block";

})
