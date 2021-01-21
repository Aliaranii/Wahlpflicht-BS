//Jquery for Game2

$(document).ready(function () {


    $('#btnlow').click(function () {
        btnlower();
        round = round + 1
        $('#round').text("Runde: " + round);
        
    })

    $('#btnhigh').click(function () {
        btnhigher();
        round = round + 1
        $('#round').text("Runde: " + round);
        
    })

    $('#btnred').click(function () {
        btnrede();
        round = round + 1
        $('#round').text("Runde: " + round);

    })

    $('#btnblack').click(function () {
        btnblacke();
        round = round + 1
        $('#round').text("Runde: " + round);

    })
});


function btnlower() {

    cardnumberval();
    if (cardnumber > cardnumbersaver) {
        $('#losewin').text("Du musst trinken!");
    } else {
        $('#losewin').text("Glueck gehabt!");
    }
    } 

function btnhigher() {
    
    cardnumberval();
    if (cardnumber < cardnumbersaver) {
        $('#losewin').text("Du musst trinken!");
    } else {
        $('#losewin').text("Glueck gehabt!");
    }
}   

function btnrede() {

    cardcolourval();
    if (cardcolour == 2) {
        $('#losewin').text("Du musst trinken!");
    } else {
        $('#losewin').text("Glueck gehabt!");
    }
}

function btnblacke() {

    cardcolourval();
    if (cardcolour == 1) {
        $('#losewin').text("Du musst trinken!");
    } else {
        $('#losewin').text("Glueck gehabt!");
    }
}

function btnred() {

}

function cardnumberval() {

    cardnumbersaver = cardnumber;
    cardnumber = Math.floor(Math.random() * 15);
   
    if ((cardnumber == 3) || (cardnumber == 4) || (cardnumber == 5) || (cardnumber == 6) || (cardnumber == 7) || (cardnumber == 8) || (cardnumber == 9) || (cardnumber == 10)){
        $('#mynumber').text(cardnumber);
    }

    if (cardnumber == 2) {
        $('#mynumber').text("ASS");
    }

    if (cardnumber == 11) {
        $('#mynumber').text("Bube");
    }

    if (cardnumber == 12) {
        $('#mynumber').text("Dame");
    }

    if (cardnumber == 13) {
        $('#mynumber').text("Koenig");
    }

    if (cardnumber == 14) {
        $('#mynumber').text("Joker");
    } 
}

function cardcolourval() {

    cardcoloursaver = cardcolour;

    cardcolour = Math.floor(Math.random() * 3);

    if (cardcolour == 1) {
        $('#mycolour').text("Rot");
    }

    if (cardcolour == 2) {
        $('#mycolour').text("Schwarz");
    }

}

var cardcolour = 0;
var cardnumber = 0;

var cardcoloursaver = 0;
var cardnumbersaver = 0;

var bsp = 0;

var round = 0;

