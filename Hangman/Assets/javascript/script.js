

var wordBank = [
    'apple', 'banana', 'pineapple', 'grapefruit', 'kiwi', 'pear',
    'watermelon', 'dragonfruit', ];
var word;
var wordField = [];
var usedLetters = [];
var wins = 0;
var losses = 0;
var guesses = 5;
var blanks;
var index;

var randomWord = function() {
index = Math.floor(Math.random() * wordBank.length);
word = wordBank[index];
blanks = word.length;
}

var generateBlanks = function() {
   for (i = 0; i < blanks; i++) {
       wordField.push("_");
   }
   document.getElementById("word").textContent = wordField.join(" ");
}


var startGame = function() {
   guesses = 5;
   wordField = [];
   usedLetters = [];
   randomWord();
   generateBlanks();
   guessCheck();
   document.getElementById("letters").textContent = usedLetters.join(" ").toUpperCase();
   document.getElementById("guesses").textContent = guesses;
}

startGame();

var checkLetter = function(letter) {
   var regEx = /[a-z]/;
   if (regEx.test(letter)) {
       wordArr = word.split("");
       var checkedIndex = wordArr.indexOf(letter);

       if (checkedIndex < 0 && usedLetters.indexOf(letter) < 0) {
           usedLetters.push(letter);
           guesses--;
           guessCheck();
           }

       while (checkedIndex >= 0) {
           wordField.splice(checkedIndex, 1, letter);
           delete wordArr[checkedIndex];
           checkedIndex = wordArr.indexOf(letter);
       }

       if (wordField.join('') == word) {
           wins++;
           word = "";
           wordBank.splice(index, 1);
           setTimeout(function(){ startGame(); }, 1500);
       }

       if (guesses === 0) {
           alert('YOU LOST ALL OUR FRUITS, WHAT HAVE YOU DONE, WE ARE ALL GOING TO DIE');
           losses++;
           word = "";
           wordBank.splice(index, 1);
           setTimeout(function(){ startGame(); }, 1500);
       }
       
       document.getElementById("word").textContent = wordField.join(" ");
       document.getElementById("letters").textContent = usedLetters.join(" ").toUpperCase();
       document.getElementById("wins").textContent = wins;
       document.getElementById("losses").textContent = losses;
       document.getElementById("guesses").textContent = guesses;

   }

}

document.onkeyup = function() {
   var keyPress = event.key;
   checkLetter(keyPress);
   
}


function guessCheck(){
    if (guesses === 5) {
        document.getElementById("snake5").style.visibility = 'visible';
        document.getElementById("snake1").style.visibility = 'hidden';
        document.getElementById("snake2").style.visibility = 'hidden';
        document.getElementById("snake3").style.visibility = 'hidden';
        document.getElementById("snake4").style.visibility = 'hidden';      
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













