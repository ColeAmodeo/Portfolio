

var wordBank = [
    'Apple', 'Banana', 'Pineapple', 'Grapefruit', 'Kiwi', 'Pear',
    'Watermelon', 'Dragonfruit', 
];
var activeWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var wordArray = activeWord.split("")
var guesses = 5;
var wordField = [ ];
var win = document.getElementById('wins');
var lose = document.getElementById('losses');



function startGame() {
    
    createWordField();
    guessCheck();
    
}
function createWordField () {
    for (i = 0; i < activeWord.length; i++){
    wordField.push('_');
    }
    
    document.getElementById('word-field').innerHTML = wordField.join(" ")

}


//input
document.onkeyup = function() {
    var keyPress = event.key;
    function checkLetter(keypress) {
        

    }

 }


function guessCheck(){
    if (guesses === 5) {
        document.getElementById("snake5").style.visibility = 'visible';
    }
    if (guesses === 4) {
        document.getElementById("snake4").style.visibility = 'visible';
    }
    if (guesses === 3) {
        document.getElementById("snake3").style.visibility = 'visible';
    }
    if (guesses === 2) {
        document.getElementById("snake2").style.visibility = 'visible';
    }
    if (guesses === 1) {
        document.getElementById("snake1").style.visibility = 'visible';
    }
}


startGame();


//function buttonClick(){  TEST TO SEE IF SNAKE WORKS! success
   
       // guesses--;
      //  guessCheck();
        //console.log(guesses)



//Using the input, check if the letter matches the wordBank array
// if it does, fill the keypress into the wordField array









