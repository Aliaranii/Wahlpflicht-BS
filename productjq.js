// product.html js

$(document).ready(function () {

    //Standard Wareninhalt von 0 beim Laden der Seite
    standardcart();

    //Erhöhen des Warencounters im Cart durch Produktbuttons
    $('#productbtn1, #productbtn2, #productbtn3, #productbtn4, #productbtn5, #productbtn6, #productbtn7, #productbtn8, #productbtn9').click(function() {
        updatecart();
    });
});

function standardcart() {
    $('#mycartnumber').text(i + " " + "items");
}

function updatecart() {
    $('#mycartnumber').text((i = i + 1) + ' ' + 'items');
}

var i = 0


  




