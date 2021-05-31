const pictures = ["../Images/Game1/w1.png", "../Images/Game1/w2.png", "../Images/Game1/w3.png", "../Images/Game1/w4.png", "../Images/Game1/w5.png", "../Images/Game1/w6.png"];
//let results = [];
let result;
//let player = [];
let positionPlayer1;
let positionPlayer2;
let player1Turn;

function startGame() {
    if (player1Turn === true) {
      //  console.log("Spieler 1 ist dran");
        movePlayer1();
        randomActionCard();
        return;
    }
    if (player1Turn === false) {
      //  console.log("Spieler 2 ist dran");
        movePlayer2();
        randomActionCard();
        return;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomActionCard() {
    $.getJSON("../JavaScript/ActionCard.json", function (actionCard) {
            document.getElementById("actionCard").style.display = "block";
            let randomActionCardValues = actionCard[getRandomInt(actionCard.length)];
            document.getElementById("actionCardText").innerText = randomActionCardValues.text;
            if (randomActionCardValues.cube === true) {
              //  console.log("Würfel würfeln")
                document.getElementById("action-card-cube-button").style.display = "block";
                document.getElementById('action-card-placeholder-picture').style.display = "block";
            }
            if (randomActionCardValues.field !== 0) {
                if (randomActionCardValues.field === 1){
                    if (player1Turn === true) {
                        /* Spieler2 */
                        if (positionPlayer2 === 1) {
                            if (positionPlayer2 !== positionPlayer1) {
                                document.getElementById("" + positionPlayer2 + "").innerHTML = "";
                                document.getElementById("player2").style.display = "block";
                            } else{
                                document.getElementById("" + positionPlayer2 + "").innerHTML = "";
                                document.getElementById("" + positionPlayer2 + "").innerHTML = "<span id='player1'></span>";
                                document.getElementById("player2").style.display = "block";
                            }
                        }
                        positionPlayer2 = randomActionCardValues.field;
                    }
                    if (player1Turn === false) {
                        /* Spieler1 */
                        if (positionPlayer1 !== 1) {
                            if (positionPlayer1 !== positionPlayer2) {
                                document.getElementById("" + positionPlayer1 + "").innerHTML = "";
                                document.getElementById("player1").style.display = "block";
                            } else{
                                document.getElementById("" + positionPlayer1 + "").innerHTML = "";
                                document.getElementById("" + positionPlayer1 + "").innerHTML = "<span id='player2'></span>";
                                document.getElementById("player1").style.display = "block";
                            }
                        }
                        positionPlayer1 = randomActionCardValues.field;
                    }
                } else {
                    //console.log("feld wechseln")
                    if (player1Turn === true) {
                        /* Spieler2 */

                           // console.log("Spieler2")
                            if (positionPlayer2 === 1) {
                                document.getElementById("player2").style.display = "none";
                            }
                            if (positionPlayer2 !== positionPlayer1) {
                                document.getElementById("" + positionPlayer2 + "").innerHTML = "";
                            } else {
                                document.getElementById("" + positionPlayer2 + "").innerHTML = "";
                                document.getElementById("" + positionPlayer2 + "").innerHTML = "<span id='player1'></span>";
                            }
                            positionPlayer2 = randomActionCardValues.field;
                            document.getElementById("" + positionPlayer2 + "").innerHTML += "<span id='player2'></span>";
                            // console.log(positionPlayer2);

                    }
                    if (player1Turn === false) {
                        /* Spieler1 */

                            //console.log("Spieler1")
                            if (positionPlayer1 === 1) {
                                document.getElementById("player1").style.display = "none";
                            }

                            if (positionPlayer1 !== positionPlayer2) {
                                document.getElementById("" + positionPlayer1 + "").innerHTML = "";
                            } else {
                                document.getElementById("" + positionPlayer1 + "").innerHTML = "";
                                document.getElementById("" + positionPlayer1 + "").innerHTML = "<span id='player2'></span>";
                            }
                            positionPlayer1 = randomActionCardValues.field;
                            document.getElementById("" + positionPlayer1 + "").innerHTML += "<span id='player1'></span>";
                           // console.log(positionPlayer1);

                    }
                }
            }
            //console.log(actionCard)
        }
    )
}

function closeTextfield() {
    document.getElementById("actionCard").style.display = "none";
    resetActionCardCubePicture();
}

/*
function setPlayers() {
   document.getElementById("default-text-player").style.display = "none";
   const numberOfPlayers = document.getElementById("number").value;
   if (numberOfPlayers > 1 && numberOfPlayers < 5) {
       for (let i = 1; i <= numberOfPlayers; i++) {
           document.getElementById("1").innerHTML += "<span id=player" + i + "></span>";
       }
       document.getElementById("number-of-players-control").style.display = "none";
       document.getElementById("cube-button").style.display = "block";
       document.getElementById('placeholder-picture').style.display = "block";
   } else {
       document.getElementById("default-text-player").style.display = "block";
   }

}
*/

function setPlayer() {
    positionPlayer1 = 1;
    positionPlayer2 = 1;
    player1Turn = true;
    for (let i = 1; i <= 2; i++) {
        document.getElementById("1").innerHTML += "<span id=player" + i + "></span>";
    }
    document.getElementById("number-of-players-control").style.display = "none";
    document.getElementById("cube-button").style.display = "block";
    document.getElementById('placeholder-picture').style.display = "block";
}

function movePlayer1() {
    if (positionPlayer1 === 1) {
        document.getElementById("player1").style.display = "none";
    } else if (positionPlayer1 === positionPlayer2) {
        document.getElementById("" + positionPlayer1 + "").innerHTML = "";
        document.getElementById("" + positionPlayer1 + "").innerHTML = "<span id='player2'></span>";
    } else if (positionPlayer1 !== 1) {
        document.getElementById("" + positionPlayer1 + "").innerHTML = "";
    }
    positionPlayer1 += result;
    document.getElementById("" + positionPlayer1 + "").innerHTML += "<span id='player1'></span>"
    player1Turn = false;
}

function movePlayer2() {
    if (positionPlayer2 === 1) {
        document.getElementById("player2").style.display = "none";
    } else if (positionPlayer2 === positionPlayer1) {
        document.getElementById("" + positionPlayer2 + "").innerHTML = "";
        document.getElementById("" + positionPlayer2 + "").innerHTML = "<span id='player1'></span>";
    } else if (positionPlayer2 !== 1) {
        document.getElementById("" + positionPlayer2 + "").innerHTML = "";
    }

    positionPlayer2 += result;
    document.getElementById("" + positionPlayer2 + "").innerHTML += "<span id='player2'></span>";
    player1Turn = true;
}

function resetActionCardCubePicture() {
    document.getElementById("action-card-cube-button").style.display = "none";
    document.getElementById('action-card-placeholder-picture').style.display = "none";
    document.getElementById('action-card-placeholder-picture').src = "../Images/Bierlogo.png";
}

function changeActionCardCubePicture() {
    setTimeout(function timer() {
        for (let i = 1; i < 10; i++) {
            setTimeout(function timer() {
                for (let i = 0; i < 6; i++) {
                    setTimeout(function timer() {
                        /**randomPicture**/
                        let randomPicture = Math.floor(Math.random() * 6) + 1;
                        document.getElementById('action-card-placeholder-picture').src = pictures[randomPicture - 1];
                    }, i * 500);
                }
            }, i * 300);
        }
    })
}

/**Bilder Tauschen**/
function changeCubePicture() {

    let numberOfPlayers = 2; //document.getElementById("number").value;
    //results = [];
    let randomPicture;
    result = Math.floor(Math.random() * 6) + 1;
    //console.log(result);

    for (let k = 0; k < numberOfPlayers; k++) {
        setTimeout(function timer() {
            for (let i = 1; i < 10; i++) {
                setTimeout(function timer() {
                    for (let i = 0; i < 6; i++) {
                        setTimeout(function timer() {
                            randomPicture = Math.floor(Math.random() * 6) + 1;
                            document.getElementById('placeholder-picture').src = pictures[randomPicture - 1];
                        }, i * 500);
                    }
                }, i * 300);
            }
        });

        setTimeout(function timer() {
            for (let i = 0; i < numberOfPlayers; i++) {
                const resPic = result;
                document.getElementById('placeholder-picture').src = pictures[resPic - 1];

            }
        }, k / k * 6000);
    }
    startGame();
}

//id 1: start
//id 2 - 53
//id 54: Ziel