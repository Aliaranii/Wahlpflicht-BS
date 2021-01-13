// product.html js

$(document).ready(function () {

    $('#mycartnumber').text(i + " " + "items");

    $('#productbtn1, #productbtn2, #productbtn3, #productbtn4, #productbtn5, #productbtn6, #productbtn7, #productbtn8, #productbtn9').click(function() {
        updatecart();
    });
});


function updatecart() {
    $('#mycartnumber').text((i = i + 1) + ' ' + 'items');
}

var i = 0


  




