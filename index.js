var randomNumber1 = Math.floor(Math.random() * 6 + 1);
// dice1 var

var randomDiceImageSource = "images/dice" + randomNumber1 + ".png"
// dice1 random img

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImageSource);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
// dice2 var

var randomDiceImageSource2 = "images/dice" + randomNumber2 + ".png"
// dice2 random img
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageSource2);



if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 player 1 win!"; //winner
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "player 2 win! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
