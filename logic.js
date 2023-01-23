// for img 1
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var imageSrc1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imageSrc1);

// for img 2
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var imageSrc2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imageSrc2);

var result;
if(randomNumber1>randomNumber2) {
    result = "🚩 Player 1 wins!";
}
else if(randomNumber1<randomNumber2) {
    result = "Player 2 wins! 🚩";
}
else {
    result = "Drwa!";
}

document.querySelector("h1").innerHTML = result;
