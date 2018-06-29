var countdown = 30;
var right;
var wrong;

var gameTimer = setInterval(function(){
       countdown--;
       $('#timer').text(countdown);
       if (countdown === 0) {
           clearInterval(gameTimer);
           $('form').hide();
           scoreTally();
       }
   }, 1000)

function scoreTally() {
   var right = 0;
   var wrong = 0;

   var choice1 = $("input[type='radio'][name='choice1']:checked").val();
   var choice2 = $("input[type='radio'][name='choice2']:checked").val();
   var choice3 = $("input[type='radio'][name='choice3']:checked").val();
   var choice4 = $("input[type='radio'][name='choice4']:checked").val();
   var choice5 = $("input[type='radio'][name='choice5']:checked").val();

   if (choice1 === '53') {
       right++;
   } else {
       wrong++;
   }

   if (choice2 === "Mars") {
       right++;
   } else {
       wrong++;
   }

   if (choice3 === "Venus") {
       right++;
   } else {
       wrong++;
   }
   if (choice4 === "Elon Musk") {
       right++;
   } else {
       wrong++;
   }
   if (choice5 === "4.6 billion years") {
       right++;
   } else {
       wrong++;
   }

   if (right > wrong) {
     $('.page').append($('<h3>').text('Congratulations! You got ' + right + ' questions correct and ' + wrong + ' questions incorrect.'));
   } else {
     $('.page').append($('<h3>').text('My apologies, you failed. You got ' + right + ' questions correct and ' + wrong + ' questions incorrect.'));
   }

};
$('button').click(function(){
   clearInterval(gameTimer);
   $('form').hide();
   scoreTally();
})
