var buttonColours = ["red", "blue", "green","yellow"];

var userClickedPattern = [];
var gamePattern = [];

var level = 0;
var started = false;


$(document).keypress(function() {
    if(!started) {
     $("h1").text("Level " + level);
     nextSequence();
     started = true;
    }
})

function nextSequence() {

    $("h1").text("Level " + level);
    userClickedPattern = [];
    level++;

    var randomNumber = Math.floor(Math.random() * 3) + 1;
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    makeSound(randomChosenColour);
}

function makeSound(key) {
     if (key === "wrong") {
        var audio = new Audio("./sounds/"+ key + ".mp3");
         audio.play();
     }
     else {
        var audio = new Audio("./sounds/"+ key + ".mp3");
         audio.play();
     }
 };


$(".btn").click(function() {
    var userChosenColour = this.getAttribute('id');
    
    userClickedPattern.push(userChosenColour);

    makeSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length -1);
}) 


function animatePress(currentkey) {
    
    var ActiveButton =  document.querySelector("." + currentkey);
 
    ActiveButton.classList.toggle("pressed");
 
    setTimeout(function () {
         ActiveButton.classList.remove("pressed");
        }, 100);
    }    

 function checkAnswer(currentlevel) {

    if (gamePattern[currentlevel] === userClickedPattern[currentlevel]) {

        console.log("success");

        if (userClickedPattern.length === gamePattern.length){

            setTimeout(function () {
              nextSequence();
            }, 1000);
        }
    }
    else {
        console.log("wrong");
        wronganswer();
    };
 }

 function wronganswer() {
    makeSound("wrong");
    $("h1").text("Game Over, Press Any Key to Restart");
        
    document.querySelector("body").classList.add("game-over");
 
        setTimeout(function () {
            document.querySelector("body").classList.remove("game-over");
            }, 200);
    
    $(document).keypress(function() {
        startOver();
    })
}

 function startOver() {
        level = 0;
        gamePattern = [];
        started = false;
        nextSequence();
    }
 

 function animatePress(currentkey) {

    var ActiveButton =  document.querySelector("." + currentkey);
 
     ActiveButton.classList.toggle("pressed");
 
     setTimeout(function () {
         ActiveButton.classList.remove("pressed");
        }, 100);
 }