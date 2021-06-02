var i = 0
var spinneractive = 0

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
                    i=0;
                    $('#mycartnumber').text(i+ " " + "items");
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



//Bestellung über E-Mail
//beim Klicken auf Button unter jeden Produkt wird es direkt in die E-Mail gespeichert.
//Checkout - wird die Gesammtsumme gerechnet und in die e-Mail hinzugefügt

var sum=0;
var sum1=0;
var sum2=0;
var sum3=0;
var sum4=0;
var sum5=0;
var sum6=0;
var sum7=0;
var sum8=0;
var sum9=0;
var orderList=new Array();
function order() {
    if(sum1>0) {
        sum = sum + sum1;
        orderList.push("\n\n"+"Kolabier:Kola: " + sum1);
    }
    if(sum2>0){
        sum=sum+sum2;
        orderList.push("\n\n"+"Kolabier:KolaFanta: "+sum2);
    }
    if(sum3>0){
        sum=sum+sum3;
        orderList.push("\n\n"+"Kolabier:Alkoholfrei: "+sum3);
    }
    if(sum4>0){
        sum=sum+sum4;
        orderList.push("\n\n"+"Kolabier:Apfel: "+sum4);
    }
    if(sum5>0){
        sum=sum+sum5;
        orderList.push("\n\n"+"Kolabier:Cherry: "+sum5);
    }
    if(sum6>0){
        sum=sum+sum6;
        orderList.push("\n\n"+"Kolabier:Cranberry: "+sum6);
    }
    if(sum7>0){
        sum=sum+sum7;
        orderList.push("\n\n"+"Kolabier:Bratkartoffeln: "+sum7);
    }
    if(sum8>0){
        sum=sum+sum8;
        orderList.push("\n\n"+"Kolabier:Kebap: "+sum8);
    }
    if(sum9>0){
        sum=sum+sum9;
        orderList.push("\n\n"+"Kolabier:Süß-Sauer: "+sum9);
    }

    sum=sum*(1.3+0.25);
    sum.toFixed(2);

    document.location.href = "mailto:kolabier@company.com?"
        + "subject= Bestellung bei Kolabier Company"
        + "&body=" + encodeURIComponent(
            "Hallo, ich würde gerne folgende Bestellung abgeben:"+
            orderList+"\n"
            +"\n\n"+"Gesammt (inkl. Pfand): "+sum +"€"+"\n\n");;

    //Daten leeren//
    orderList.length=0;
    sum=0;
    sum1=0; sum2=0; sum3=0; sum4=0; sum5=0; sum6=0; sum7=0; sum8=0; sum9=0;
}

function prod1(){sum1++;}

function prod2(){sum2++;}

function prod3(){sum3++;}

function prod4(){sum4++;}

function prod5(){sum5++;}

function prod6(){sum6++;}

function prod7(){sum7++;}

function prod8(){sum8++;}

function prod9(){sum9++;}