var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("What's your name? ");
console.log("Welcome! ", userName);

function play(question,answer){
  var userAnswer= readlineSync.question(question)
  if(userAnswer === answer)
  {console.log("right")
   score=score+1
  }else{console.log("wrong")}
  console.log("your current score:",score)}

  var questionOne = {
    question: "place? ",
    answer: "delhi"
  }
    var questionTwo ={
    question : "love? ",
    answer: "jatin"
    
    }
    var questions = [questionOne,questionTwo]
  for(var i=0; i<questions.length; i++){
    play(questions[i].question,questions[i].answer)
  }
console.log("Yay! final score", score)
