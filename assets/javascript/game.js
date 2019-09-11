//psuedo code
// 4 crystals with random numbers
// random number generated after loss or win
//when clicking crystal it should be adding with previous value
//when total is equal player wins, if they go over computer wins
// everything found online shows using numbers 1-12 with the crystal value
//restart game without refreshing page/
$(document).ready(function () {
    var random = 0;
    var losses = 0;
    var wins = 0;
    var comtNumber = 0;
    var playerScore = 0;


    function generateComtNumber() {
        comtNumber = Math.floor(Math.random() * 99) + 25;
        console.log(comtNumber);
        $(".computerGen").html("Target Number: " + comtNumber);


    }

    function crystalNumberGenerator() {
        $('.crystals').empty();
        for (var i = 0; i < 4; i++) {
            var randomNumber = Math.floor(Math.random() * 12) + 1;
            var crystalLoop = $("<img>");
            $(".crystals").append(crystalLoop);
            $(crystalLoop).attr({
                "cardValue": randomNumber,
                "class": 'crystal', 
                "src": "assets/images/homerSimpson.jpg"
            });
        };
    }

    function resetGame() {
        generateComtNumber();
        crystalNumberGenerator();
        playerScore = 0;
        $(".score").html("Player Score : " + playerScore);
    }

    generateComtNumber();
    crystalNumberGenerator();

    $(".crystals").on("click", '.crystal', function () { // event delegation
        let cardValue = parseInt($(this).attr("cardValue"));
        playerScore += cardValue;
        console.log(playerScore);
        $(".score").html("Player Score : " + playerScore);

        if (playerScore === comtNumber) {
            wins++;
            console.log("you win!");
            resetGame();
            winsCount();
        }

        else if (playerScore > comtNumber) {
            losses++;
            alert("try again! ");
            resetGame();
            lossesCount();

        }
    });
    function winsCount() {
        $(".wins").html("player wins : " + wins);
    };
    function lossesCount() {
        $(".loss").html("losses : " + losses);
    };

});
