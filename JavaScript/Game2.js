//Jquery for Game2

$(document).ready(function () {


    $('#btnlow').click(function () {
        clicked = 1;
        cardpicker();
        round = round + 1
        $('#round').text("Runde: " + round);
        
    })

    $('#btnhigh').click(function () {
        clicked = 2;
        cardpicker();
        round = round + 1
        $('#round').text("Runde: " + round);
        
    })

    $('#btnred').click(function () {
        clicked = 3;
        cardpicker();
        round = round + 1
        $('#round').text("Runde: " + round);

    })

    $('#btnblack').click(function () {
        clicked = 4;
        cardpicker();
        round = round + 1
        $('#round').text("Runde: " + round);

    })

});




function cardpicker() {

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

    cardcoloursaver = cardcolour;

    cardcolour = Math.floor(Math.random() * 2);

    if (cardcolour == 0) {
        $('#mycolour').text("Rot");
    } else if (cardcolour == 1) {
        $('#mycolour').text("Schwarz");
    } else {
        console.log("BIG ERROR");
    }

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

    if (clicked == 1) {
        if (cardnumber > cardnumbersaver) {
            $('#losewin').text("Du musst trinken!");
        } else {
            $('#losewin').text("Glueck gehabt!");
        }
    } else if (clicked == 2) {
        if (cardnumber < cardnumbersaver) {
            $('#losewin').text("Du musst trinken!");
        } else {
            $('#losewin').text("Glueck gehabt!");
        }
    } else if (clicked == 3) {
        if (cardcolour == 1) {
            $('#losewin').text("Du musst trinken!");
        } else {
            $('#losewin').text("Glueck gehabt!");
        }
    } else if (clicked == 4) {
        if (cardcolour == 0) {
            $('#losewin').text("Du musst trinken!");
        } else {
            $('#losewin').text("Glueck gehabt!");
        }
    }

    $("#card").attr('src', '../Images/Game2/' + cardselected + '.jpg');
    
}

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

var cardcoloursaver = 0;
var cardnumbersaver;

var bsp = 0;

var round = 0;

