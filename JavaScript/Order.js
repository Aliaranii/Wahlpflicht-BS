// product.html js

$(document).ready(function () {

    //Standard Wareninhalt von 0 beim Laden der Seite
    standardcart();

    //Erhöhen des Warencounters im Cart durch Produktbuttons
    $('#productbtn1, #productbtn2, #productbtn3, #productbtn4, #productbtn5, #productbtn6, #productbtn7, #productbtn8, #productbtn9').click(function() {
        updatecart();
    });

    checkoutupdate();
});

function standardcart() {
    $('#mycartnumber').text(i + " " + "items");
}

function updatecart() {
    $('#mycartnumber').text((i = i + 1) + ' ' + 'items');
}

function checkoutupdate() {
    $('#checkoutbtn').click(function() {

        if (spinneractive == 0) {
            $('#checkoutbtn').prepend('<span id="spinneractive" class="spinner-border spinner-border-sm"></span>');
            setTimeout(function() {
                    $('#spinneractive').remove();
                    $('#firstcont').prepend('<div id="rowavailabe" class="row" style="margin-top: 40px;"><div id="colavailable" class=col-12><div "alertavailable" class="alert alert-danger alert-dismissible fade show" role="alert">' + i + ' ' + 'items youve selected are not available for purchase.</div ></div></div>')
                },
                3000);
            setTimeout(function() {
                    $('#alertavailable').remove();
                    $('#colavailable').remove();
                    $('#rowavailable').remove();
                },
                10000);
            spinneractive = spinneractive + 1;
        } else {
            console.log(spinneractive);
            $('#spinneractive').remove();
            spinneractive = 0;
        }


    });

}

var i = 0
var spinneractive = 0
