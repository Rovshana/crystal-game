$(document).ready(function(){
// variables
let crystalValue1;
let crystalValue2;
let crystalValue3;
let crystalValue4;
let totalScore =0;
let wins = 0;
let losses = 0;
// Player has given a random number at the start of game
let randomGoal;
function getRandomNum(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min) ) +min;
    
}

randomGoal = getRandomNum(19, 120);
$('#gaolNumber').html(randomGoal);

// getRandomInt function generates random numbers, and we assign them to each crystal.
     crystalValue1 = getRandomNum(1, 12);
     crystalValue2 = getRandomNum(1, 12);
       crystalValue3 = getRandomNum(1, 12);
       crystalValue4 = getRandomNum(1, 12);
     $('#gem1').on('click', function(){

        $('#total-score').html(totalScore + crystalValue1);

        totalScore = totalScore + crystalValue1;
        gettingScore()
     })
     // for second crystal
     $("#gem2").click(function () {
        $("#total-score").html(totalScore + crystalValue2);
        totalScore = totalScore + crystalValue2;
        gettingScore();

    })
    // for third crystal 
    $("#gem3").click(function () {
        $("#total-score").html(totalScore + crystalValue3);
        totalScore = totalScore + crystalValue3;
        gettingScore();

    })

    // for fourth crystal
    $("#gem4").click(function () {
        $("#total-score").html(totalScore + crystalValue4);
        totalScore = totalScore + crystalValue4;
        gettingScore();

    })
    /* the player wins when matching the totalscore to the random Number. 
    the player lose when total score is greater then randomNum!
    */

    function gettingScore (){
        if (totalScore === randomGoal) {
            wins++;
            // change html
            $("#wins").text("Wins: " + wins);
            $("#exclamation").html("You win!");

            resetGame();


    } else if (totalScore > randomGoal) {
        losses++;
        // change html
        $("#losses").text("Losses: " + losses);
        $("#exclamation").text("You lost!");

        resetGame();
    }

    }
    // reset function -- resets stats and generates random numbers all around
    function resetGame() {
        totalScore = 0;
        $("#total-score").html(totalScore);
        randomGoal = getRandomNum(19, 120);
        $("#goalNumber").text(randomGoal);
        crystalValue1 = getRandomNum(1, 12);
        crystalValue2 = getRandomNum(1, 12);
        crystalValue3 = getRandomNum(1, 12);
        crystalValue4 = getRandomNum(1, 12);
    }

    })
