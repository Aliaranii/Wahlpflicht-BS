//Jquery for Game2

$(document).ready(function () {

    // pressing lower button
    $('#btnlow').click(function () {
        clicked = 1;
        cardpicker();
    })

    // pressing higher button
    $('#btnhigh').click(function () {
        clicked = 2;
        cardpicker(); 
    })

    // pressing red button
    $('#btnred').click(function () {
        clicked = 3;
        cardpicker();
        
    })

    // pressing black button
    $('#btnblack').click(function () {
        clicked = 4;
        cardpicker();
    })

});

function cardpicker() {

    // timer start
    setTimeout(function timer() {


    // random number generator for playcards
    cardnumbersaver = cardnumber;
    cardnumber = Math.floor(Math.random() * 13);

    if ((cardnumber == 1) || (cardnumber == 2) || (cardnumber == 3) || (cardnumber == 4) || (cardnumber == 5) || (cardnumber == 6) || (cardnumber == 7) || (cardnumber == 8)) {
        $('#mynumber').text(cardnumber + 2);
        numbername = cardnumber + 2;
    } else if (cardnumber == 0) {
        $('#mynumber').text("ASS");
        numbername = "A";
    } else if (cardnumber == 9) {
        $('#mynumber').text("Bube");
        numbername = "J";
    } else if (cardnumber == 10) {
        $('#mynumber').text("Dame");
        numbername = "Q";
    } else if (cardnumber == 11) {
        $('#mynumber').text("Koenig");
        numbername = "K";
    } else if (cardnumber == 12) {
        $('#mynumber').text("Joker");
        numbername = "J";
    } 

    // random colour generator for playcards
    cardcoloursaver = cardcolour;
    cardcolour = Math.floor(Math.random() * 2);

    if (cardcolour == 0) {
        $('#mycolour').text("Rot");
    } else if (cardcolour == 1) {
        $('#mycolour').text("Schwarz");
    } else {
        console.log("BIG ERROR");
    }

    // getting jpg name complicated and unnecessary
    cardselectedsaver = cardselected;

    if (cardcolour == 0) {
        redcard = cardcolourred[Math.floor(Math.random() * cardcolourred.length)];
        var redcardn = redcard.toString();
        cardselected = numbername + redcardn;
        console.log(cardselected);
    } else if (cardcolour == 1) {
        blackcard = cardcolourblack[Math.floor(Math.random() * cardcolourblack.length)];
        var blackcardn = blackcard.toString();
        cardselected = numbername + blackcardn;
        console.log(cardselected);
    } else {
        console.log("ANOTHER BIG ERROR");
    }

    // prev card showcase
    if (round >= 1) {
        $("#prevcard").attr('src', '../Images/Game2/' + cardselectedsaver + '.jpg');
    }

    // actual card showcase
    $("#card").attr('src', '../Images/Game2/' + cardselected + '.jpg');


    // win or lose message is the question
    if (clicked == 1) {
        if (cardnumber > cardnumbersaver) {
            winbool = 0;
        } else {
            winbool = 1;
        }
    } else if (clicked == 2) {
        if (cardnumber < cardnumbersaver) {
            winbool = 0;
        } else {
            winbool = 1;
        }
    } else if (clicked == 3) {
        if (cardcolour == 1) {
            winbool = 0;
        } else {
            winbool = 1;
        }
    } else if (clicked == 4) {
        if (cardcolour == 0) {
            winbool = 0;
        } else {
            winbool = 1;
        }
    }

    if (winbool == 0) {
        $('#losewin').text("Du musst trinken!");
    } else if (winbool == 1) {
        $('#losewin').text("Glueck gehabt!");
    } else {
        console.log("BIG BOOL ERROR");
    }

    // round counter
    round = round + 1
    $("#round").attr('value', 'Runde: ' + round);

    // timer end
    }, 500);
    
}
// many variables 

var winbool;
var i = 0;
var clicked;
var numbername;
var cardcolourblack = ["C", "S"];
var cardcolourred = ["D", "H"];
var cardselected;
var blackcard;
var redcard;
var cardpickerval = 0;

var cardcolour;
var cardnumber;

var cardselectedsaver;
var cardcoloursaver = 0;
var cardnumbersaver;

var bsp = 0;

var round = 0;

