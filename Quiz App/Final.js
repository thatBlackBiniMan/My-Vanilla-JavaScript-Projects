// Getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const timeCount = quiz_box.querySelector(".timer .timer_sec")
const timeLine = quiz_box.querySelector("header .time_line")
const timeoff = quiz_box.querySelector("header .time_text");

const option_list = document.querySelector(".option_list");
//if start Exam Button is clicked

start_btn.onclick = ()=>{
  info_box.classList.add("activeInfo");
}; // shows rules


//if exit Exam Button is clicked

exit_btn.onclick = ()=>{
  info_box.classList.remove("activeInfo");
}; // hides rules


continue_btn.onclick = ()=>{
  info_box.classList.remove("activeInfo");
  quiz_box.classList.add("activeQuiz");
  showQuestions(0);
  queCounter(1);
  startTimer(20);
  startTimerLine(0)
}; // shows questions

let que_count = 0;
let que_numb = 1;
let Counter;
let CounterLine;
let timeValue = 20;
let widthValue = 0;
let userScore = 0;

const next_btn = quiz_box.querySelector(".next_btn")
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .startAgain");
const quit_quiz = result_box.querySelector(".buttons .quit");


restart_quiz.onclick = ()=>{
  quiz_box.classList.add("activeQuiz");
  result_box.classList.remove("activeResult");
  let que_count = 0;
  let que_numb = 1;
  let timeValue = 20;
  let widthValue = 0;
  let userScore = 0;
  showQuestions(que_count);
  queCounter(que_numb); 
  clearInterval(Counter);
  startTimer(timeValue);
  clearInterval(CounterLine);
  startTimerLine(widthValue);
  next_btn.style.display = "none";
  timeoff.textContent = "Time left"
}



quit_quiz.onclick = ()=>{
  window.location.reload();
}


next_btn.onclick = ()=>{
  if(que_count < questions.length - 1){
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb); 
    clearInterval(Counter);
    startTimer(timeValue);
    clearInterval(CounterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
    timeoff.textContent = "Time left"
  }

  else{
    clearInterval(Counter);
    clearInterval(CounterLine);
    console.log("Question Completed");
    showResultBox();
    
  }
  
}

//Getting Questions from the array
function showQuestions(index){
  const que_text = document.querySelector(".que_text");
  let que_tag = '<span>' + questions[index].numb + ". " +questions[index].question + '</span>';
  let option_tag = '<div class = "option">' + questions[index].options[0] +'<span></span></div>' + 
                   '<div class = "option">' + questions[index].options[1] + '<span></span></div>' + 
                   '<div class = "option">' + questions[index].options[2] + '<span></span></div>' +
                   '<div class = "option">' + questions[index].options[3] + '<span></span></div>';
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;


  const option = option_list.querySelectorAll(".option")
  for (let i = 0; i < option.length; i++){
    option[i].setAttribute("onclick", "optionSelected(this)")
  }
}


function optionSelected(answer) {
  clearInterval(Counter);
  clearInterval(CounterLine);
  
  
  // startTimer(timeValue);

  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;
  let allOptions = option_list.children.length;
  
  if (userAns == correctAns){
    userScore += 1;
    console.log(userScore);
    answer.classList.add("correct")
    console.log("correct");
  }
  else{
    answer.classList.add("incorrect") 
    console.log("Wrong");

    for (let i = 0; i < allOptions.length; i++){
      if(option_list.children[i].textContent == correctAns){
        option_list.children[i].setAttribute("class", "option correct")
      }
    }
  }
  
  // After user selects an option disable others
  for (let i = 0; i < allOptions.length; i++){
   option_list.children[i].classList.add("disabled");
  }
   next_btn.style.display = "block";
} 

function showResultBox(){
  info_box.classList.remove("activeInfo");
  quiz_box.classList.remove("activeQuiz");
  result_box.classList.add("activeResult"); 
  const scoreText = result_box.querySelector(".score_text");
  if(userScore >= 5){
    let scoreTag = '<span>Congratulations You Passed! You Got'+ " " + userScore + " " + 'out of' + " " +questions.length +'</span>';
   scoreText.innerHTML = scoreTag;
  }

 else if(userScore <= 4){
    let scoreTag = '<span>Sorry You Failed! You Got'+ " " + userScore + " " +'out of' + " " + questions.length +'</span>';
   scoreText.innerHTML = scoreTag;
  }
  
  // else{
  //   let scoreTag = '<span>You Got'+ userScore + 'out of' + questions.length +'</span>';
  //  scoreText.innerHTML = scoreTag;
  // }
}


function startTimer(time){
Counter = setInterval(timer, 1000);
 function timer(){
  timeCount.textContent = time;
  time--;
  if(time < 9){
    let addZero = timeCount.textContent;
    timeCount.textContent = "0" + addZero;
  }
  if(time < 0){
    clearInterval(Counter);
    timeCount.textContent = "00"; 
    timeCount.textContent = "X";
    
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;

  
    for (let i = 0; i < allOptions.length; i++){
      if(option_list.children[i].textContent == correctAns){
        option_list.children[i].setAttribute("class", "option correct")
      }
    }
    for (let i = 0; i < allOptions.length; i++){
      option_list.children[i].classList.add("disabled");
     }
      next_btn.style.display = "block";
   
  }
 }
  
}






function startTimerLine(time){
  CounterLine = setInterval(timer, 35);
   function timer(){
    time += 1;
    timeLine.style.width = time + "px"
  if(time > 610){
      clearInterval(CounterLine);
        
    }
   }
    
  }








function queCounter(index){
  const bottom_question_counter = quiz_box.querySelector(".total_que");
  let totalQuescountTag = '<span><p>'+ index + '</p>0f<p>'  + questions.length + '</p>Questions</span>';
  bottom_question_counter.innerHTML = totalQuescountTag;

}