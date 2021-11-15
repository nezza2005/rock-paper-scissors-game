
//Global Variabes.
var playerCard = 0;
var computerCard = 0;

for (var i = 0; i < document.querySelectorAll("button").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var playerChoice = (this.innerHTML);
    var random = Math.floor(Math.random() * document.querySelectorAll("button").length);
    var choices = ["Rock", "Paper", "Scissors"];
    var compChoice = choices[random];


    document.querySelector(".scoreCard").style.display = "block";
    document.querySelector(".player").innerHTML = playerChoice;// view players choice on screen.
    document.querySelector(".computer").innerHTML = compChoice;// view computers choice on screen.

    if (playerChoice === "Rock" && compChoice === "Scissors") {
      document.querySelector(".result").innerHTML = "Player Wins.";
    } else if (playerChoice === "Scissors" && compChoice === "Paper") {
      document.querySelector(".result").innerHTML = "Player Wins.";
    } else if (playerChoice === "Paper" && compChoice === "Rock") {
      document.querySelector(".result").innerHTML = "Player Wins.";
    } else if (playerChoice === "Scissors" && compChoice === "Rock") {
      document.querySelector(".result").innerHTML = "Computer Wins.";;
    } else if (playerChoice === "Paper" && compChoice === "Scissors") {
      document.querySelector(".result").innerHTML = "Computer Wins.";;
    } else if (playerChoice === "Rock" && compChoice === "Paper") {
      document.querySelector(".result").innerHTML = "Computer Wins.";;
    } else if (playerChoice === compChoice) {
      document.querySelector(".result").innerHTML = "It's a draw";
    }

    function trackPlayerScore() {

     if (document.querySelector(".result").innerHTML === "Player Wins.") {
       // playerCard++
       // document.querySelector(".pRecord").innerHTML = playerCard;
       playerCard = playerCard+1; document.querySelector(".pRecord").innerHTML = playerCard; // a different way to write it compared to else if version.

     } else if (document.querySelector(".result").innerHTML === "Computer Wins.")  {
       computerCard++; document.querySelector(".cRecord").innerHTML = computerCard; // can have this as one line or 2 lines where first line is just computerCard++.
         }
  }//end of trackPlayerScore function.
  trackPlayerScore()
    })// end of anonymous function.
  }// end of initial loop..

//   playerOutput = [];
//   compOutput = [];
//     var playerScore = 0;
//     var pNum1 = 0;
//     var pNum2= 1;
//     var compScore = 0;
//     var cNum1 = 0;
//     var cNum2 = 1;
//
//     for (var a=0; a<2; a++){
//     if (document.querySelector(".result").firstChild.wholeText === "Player Wins.") {
//       playerScore = pNum1 + pNum2;
//       console.log(playerScore)
//       // playerOutput.push(playerScore)
//       document.querySelector(".pRecord").innerHTML = playerOutput.length;
//     } else if (document.querySelector(".result").firstChild.wholeText === "Computer Wins.")  {
//       compScore = cNum1 + cNum2;
//       // compOutput.push(compScore);
//       document.querySelector(".cRecord").innerHTML = compOutput.length;
//     }
//
//       pNum1 = pNum2;
//       pNum2 = playerScore;
//
//       cNum1 = cNum2;
//       cNum2 = compScore;
//
//
// console.log(playerOutput)


      // }// End of trackPlayerScore loop.




// function trackCompScore() {
//
//   compOutput = [];
//     var compScore = 0;
//     var cNum1 = 0;
//     var cNum2 = 1;
//
//     for (var a=1; a<1000; a++){
//       compScore = cNum1 + cNum2;
//       compOutput.push(compScore);
//       cNum1 = cNum2;
//       cNum2 = compScore;
//       }// End of trackCompScore loop.
//
// if (document.querySelector(".result").firstChild.wholeText === "Computer Wins.") {
//   document.querySelector(".pRecord").innerHTML = compOutput.length;
// }
// }// end of trackCompScore function.










//step5.
//record results to show total number of wins by player and computer.





//Alternative way1.



// for (var i = 0; i < document.querySelectorAll("button").length; i++) {
//
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//
//     var playerChoice = (this.innerHTML);
//     var random = Math.floor(Math.random() * document.querySelectorAll("button").length);
//     var choices = ["Rock", "Paper", "Scissors"];
//     var compChoice = choices[random];
//     document.querySelector(".player").innerHTML = playerChoice;// view players choice on screen.
//     document.querySelector(".computer").innerHTML = compChoice;// view computers choice on screen.
//
// function gameResult(str) {
//    document.querySelector(".result").innerHTML = str
//   if (playerChoice === "Rock" && compChoice === "Scissors") {
//     gameResult("player wins.");
//   } else if (playerChoice === "Scissors" && compChoice === "Paper") {
//     gameResult("player wins.");
//   } else if (playerChoice === "Paper" && compChoice === "Rock") {
//     rgameResult("player wins.");
//   } else if (playerChoice === "Scissors" && compChoice === "Rock") {
//     gameResult("Computer wins.");
//   } else if (playerChoice === "Paper" && compChoice === "Scissors") {
//     gameResult("Computer wins.");
//   } else if (playerChoice === "Rock" && compChoice === "Paper") {
//     gameResult("Computer wins.");
//   } else if (playerChoice === compChoice) {
//     gameResult("It's a draw.");
//   }
// }// end of gameResult function.
//
//   })// end of anonymous function.
//
// function scoreCard() {
//   for (var a = 0; i<100; i++) {
//     var playerRecord = 0;
//     var compRecord = 0;
//
//
//
// }// end of for loop of scorecard.
//
// }// end of scoreCard function.
//
//
//
//
// }// end of loop.
//
//
// //step5.
// //record results to show total number of wins by player and computer.



//Alternative way 2.
// for (var i = 0; i < document.querySelectorAll("button").length; i++) {
//
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//
//     var playerChoice = (this.innerHTML);
//     var random = Math.floor(Math.random() * document.querySelectorAll("button").length);
//     var choices = ["Rock", "Paper", "Scissors"];
//     var compChoice = choices[random];
//     document.querySelector(".scoreCard").style.display = "block";
//     document.querySelector(".player").innerHTML = playerChoice;// view players choice on screen.
//     document.querySelector(".computer").innerHTML = compChoice;// view computers choice on screen.
//
//     if (playerChoice === "Rock" && compChoice === "Scissors") {
//       document.querySelector(".result").innerHTML = "Player Wins.";
//     } else if (playerChoice === "Scissors" && compChoice === "Paper") {
//       document.querySelector(".result").innerHTML = "Player Wins.";
//     } else if (playerChoice === "Paper" && compChoice === "Rock") {
//       document.querySelector(".result").innerHTML = "Player Wins.";
//     } else if (playerChoice === "Scissors" && compChoice === "Rock") {
//       document.querySelector(".result").innerHTML = "Computer Wins.";;
//     } else if (playerChoice === "Paper" && compChoice === "Scissors") {
//       document.querySelector(".result").innerHTML = "Computer Wins.";;
//     } else if (playerChoice === "Rock" && compChoice === "Paper") {
//       document.querySelector(".result").innerHTML = "Computer Wins.";;
//     } else if (playerChoice === compChoice) {
//       document.querySelector(".result").innerHTML = "It's a draw";
//     }
//
// function trackPlayerScore() {
//   playerOutput = [];
//   compOutput = [];
//     var playerScore = 0;
//     var pNum1 = 0;
//     var pNum2= 1;
//     var compScore = 0;
//     var cNum1 = 0;
//     var cNum2 = 1;
//
//     for (var a=0; a<1000; a++){
//     if (document.querySelector(".result").firstChild.wholeText === "Player Wins.") {
//       document.querySelector(".pRecord").innerHTML = playerOutput.length;
//     } else if (document.querySelector(".result").firstChild.wholeText === "Computer Wins.")  {
//       document.querySelector(".cRecord").innerHTML = compOutput.length;
//     }
//       playerScore = pNum1 + pNum2;
//       playerOutput.push(playerScore);
//       pNum1 = pNum2;
//       pNum2 = playerScore;
//       compScore = cNum1 + cNum2;
//       compOutput.push(compScore);
//       cNum1 = cNum2;
//       cNum2 = compScore;
//
//
// console.log(playerOutput)
//       }//end of trackPlayerScore function.
