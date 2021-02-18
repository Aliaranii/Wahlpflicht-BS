var pictures=["../Images/Game1/w1.png", "../Images/Game1/w2.png", "../Images/Game1/w3.png", "../Images/Game1/w4.png", "../Images/Game1/w5.png", "../Images/Game1/w6.png"];
var newButtonText="Neues Spiel starten";

window.onload=function (){
    document.getElementById("alert").hidden=true;
}

function startGame(){
    /*Player1*/
    document.getElementById("alert").hidden=true;
    var resultOne=Math.floor(Math.random() * 6) + 1;
    console.log(resultOne);
    document.getElementById('img2').src="../Images/Bierlogo.png";
    for (let i = 1; i < 10; i++) {
        setTimeout(function timer() {
            for (let i = 0; i < 6; i++) {
                setTimeout(function timer() {
                    document.getElementById('img1').src=pictures[i];
                }, i * 500);
            }
        }, i * 300);
    }
    for (let i = 1; i < 10; i++) {
        setTimeout(function timer() {
            document.getElementById('img1').src=pictures[resultOne-1];
        }, i * 1100);
    }
    /*Player2*/
    var resultTwo=Math.floor(Math.random() * 6) + 1;
    console.log(resultTwo);
    for (let i = 1; i < 2; i++) {
        setTimeout(function timer() {
        for (let i = 1; i < 10; i++) {
            setTimeout(function timer() {
                for (let i = 0; i < 6; i++) {
                    setTimeout(function timer() {
                        document.getElementById('img2').src=pictures[i];
                    }, i * 500);
                }
            }, i * 300);
        }
        for (let i = 1; i < 10; i++) {
            setTimeout(function timer() {
                document.getElementById('img2').src=pictures[resultTwo-1];
            }, i * 1100);
        }
        }, i * 6000);
    }
    /*Results*/
    for (let i = 1; i < 2; i++) {
        setTimeout(function timer() {
            if(resultOne>resultTwo){
                document.getElementById('alertResult').innerText="Spieler 1 hat gewonnen";
                document.getElementById('alertText').innerText="Spieler 2 muss trinken";
                document.getElementById("alert").hidden=false;
            }
            else if (resultOne==resultTwo){
                document.getElementById('alertResult').innerText="Unentschieden";
                document.getElementById('alertText').innerText="Beide Spieler trinken";
                document.getElementById("alert").hidden=false;
            }
            else {
                document.getElementById('alertResult').innerText="Spieler 2 hat gewonnen";
                document.getElementById('alertText').innerText="Spieler 1 muss trinken";
                document.getElementById("alert").hidden=false;
            }
        }, i * 12000);
    }
    document.getElementById('buttonStart').innerText=newButtonText;
}