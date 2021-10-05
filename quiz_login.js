var name1 = localStorage.getItem("player1_name");
var name2 = localStorage.getItem("player2_name");
var score1 = 0;
var score2 = 0;
var player_question = "player1";
var player_answer = "player2";

document.getElementById("player1_name").innerHTML = name1 + ":";
document.getElementById("player2_name").innerHTML = name2 + ":";

document.getElementById("player1_score").innerHTML = score1;
document.getElementById("player1_score").innerHTML = score2;

document.getElementById("player_question").innerHTML = "Question: " + name1;
document.getElementById("player_answer").innerHTML = "Answer: " + name2;
