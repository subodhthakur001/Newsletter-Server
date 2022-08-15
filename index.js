var RandomNumber1 = Math.floor(Math.random()*6)+1;
var RandomDiceImage = "dice" + RandomNumber1 + ".png"; //dice1.png-dice6.png
var RandomDiceSource = "images/" + RandomDiceImage;//images/dice1.png-dice6png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",RandomDiceSource);

//for second image
var RandomNumber2 = Math.floor(Math.random()*6)+1;
var RandomDiceImage2 = "dice" + RandomNumber2 + ".png"; //dice1.png-dice6.png
var RandomDiceSource2 = "images/" + RandomDiceImage2;//images/dice1.png-dice6png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",RandomDiceSource2);
if(RandomNumber1>RandomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 has won";
}
else if(RandomNumber1<RandomNumber2){
    document.querySelector("h1").innerHTML = "player 2 has won";
}
else if(RandomNumber1==RandomNumber2){
    document.querySelector("h1").innerHTML = "DRAW";
}