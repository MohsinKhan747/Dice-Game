let randomNumber1 = Math.floor(Math.random()*6)+ 1;

let randomDice1 = 'dice'+ randomNumber1 +'.png';

let randomDiceScroll1 = 'images/'+randomDice1;

let image1 = document.querySelectorAll('img')[0].setAttribute('src',randomDiceScroll1);

let randomNumber2 = Math.floor(Math.random()*6)+ 1;

let randomDice2 = 'dice'+ randomNumber2 +'.png';

let randomDiceScroll2 = 'images/'+randomDice2;

let image2 = document.querySelectorAll('img')[1].setAttribute('src',randomDiceScroll2);

if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = '🔥Player 1 Wins'
}
else if(randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = '🔥Player 2 Wins'
}
else{
   document.querySelector('h1').innerHTML = 'Draw!'
}