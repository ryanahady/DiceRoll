
function changeImg(){
  var dicePix = new Array("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png");

  var randomDiceNumber1 = Math.random();
  randomDiceNumber1 = Math.floor(randomDiceNumber1 * dicePix.length);

  var randomDiceNumber2 = Math.random();
  randomDiceNumber2 = Math.floor(randomDiceNumber2 * dicePix.length);

//target images by class and queryselector
  var changeImg1 = document.querySelector(".img1").src = dicePix[randomDiceNumber1];
  var changeImg1 = document.querySelector(".img2").src = dicePix[randomDiceNumber2];
  console.log(changeImg1);

  //if (img.src = "images/dice1.png")
  if(randomDiceNumber1 > randomDiceNumber2){
    var winnerHeading = document.querySelector(".winnerText");
      winnerHeading.innerHTML = "Player 1 Wins!";
  }
  if(randomDiceNumber1 < randomDiceNumber2){
    var winnerHeading2 = document.querySelector(".winnerText");
    winnerHeading2.innerHTML = "Player 2 Wins!";
  }
  if(randomDiceNumber1 === randomDiceNumber2){
    var drawHeading = document.querySelector(".winnerText");
    drawHeading.innerHTML = "Draw!"
  }

}

changeImg();
