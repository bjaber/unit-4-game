//psuedo code
// 4 crystals with random nubers
// random number generated after loss or win
//when clicking crystal it should be adding with previous value
//when total is equal player wins, if they go over computer wins
// everything found online shows using numbers 1-12 with the crystal value
//restart game without refreshing page/
$(document).ready (function () {

    var random;
    var losses;
    var wins;
    var comtNumber;

    comtNumber = Math.floor(Math.random()*99)+25;
    console.log(comtNumber);

    for (var i = 0; i < 4; i++) {
        var randomNumber = Math.floor(Math.random() *12);
        
        var crystalLoop =$("<div>");
        $(".crystals").append(crystalLoop);
        $(crystalLoop).attr({
            "cardValue": randomNumber
        })
    };





});
