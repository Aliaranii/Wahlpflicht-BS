var pictures=["../Images/Game1/w1.png", "../Images/Game1/w2.png", "../Images/Game1/w3.png", "../Images/Game1/w4.png", "../Images/Game1/w5.png", "../Images/Game1/w6.png"];
var results=[];
var result;
var winner;

window.onload=function (){
    document.getElementById("alert").hidden=true;
    document.getElementById("newGame").hidden=true;
    document.getElementById("buttonStart").hidden=true;
}

function placeHolders() {
    document.getElementById("buttonStart").hidden=false;
    document.getElementById("number").hidden=true;
    setPlayers();
    setPlayersStartPicture();
}

function startGame() {
    document.getElementById('alertResult').innerText=" ";
    document.getElementById("alert").hidden=true;
    setStartPicture()
    changePicture();
    document.getElementById("newGame").hidden=false;
}

function newGame() {
    document.getElementById("buttonStart").hidden=true;
    document.getElementById("number").hidden=false;
    document.getElementById('alertResult').innerText=" ";
    document.getElementById("alert").hidden=true;
    deleteText();
    deletePicture();
    document.getElementById("newGame").hidden=true;
}

/**Texte ausgeben**/
function setPlayers() {
    var numberOfPlayers = document.getElementById("number").value;
    let newPlayer;
    if(numberOfPlayers>1&&numberOfPlayers<=3){
        for(i=0;i<numberOfPlayers;i++) {
            newPlayer = document.createElement('text');
            newPlayer.id=i;
            newPlayer.innerText="Spieler"+(i+1);
            document.getElementById('firstLine').appendChild(newPlayer);
        }
    }
    else if (numberOfPlayers>3&&numberOfPlayers<7){
        for(let i=0;i<Math.ceil(numberOfPlayers/2);i++) {
            newPlayer = document.createElement('text');
            newPlayer.id=i;
            newPlayer.innerText="Spieler"+(i+1);
            document.getElementById('firstLine').appendChild(newPlayer);
        }
        for(let i=Math.ceil(numberOfPlayers/2);i<numberOfPlayers;i++) {
            newPlayer = document.createElement('text');
            newPlayer.id=i;
            newPlayer.innerText="Spieler"+(i+1);
            document.getElementById('secondLine').appendChild(newPlayer);
        }
    }
    else{
        document.getElementById('alertResult').innerText="Falsche eingabe";
        document.getElementById("alert").hidden=false;
        document.getElementById("newGame").hidden=false;
        document.getElementById("number").hidden=true;
        document.getElementById("buttonStart").hidden=true;
    }
}

/**Bilder ausgeben**/
function setPlayersStartPicture() {
    let newPicture;
    let numberOfPlayers = document.getElementById("number").value;
    if (numberOfPlayers>1&&numberOfPlayers <= 3) {
        for (i = 0; i < numberOfPlayers; i++) {
            newPicture = document.createElement('img');
            newPicture.id = "img" + i;
            newPicture.src = "../Images/Bierlogo.png";
            document.getElementById('picLineOne').appendChild(newPicture);
        }
    } else if (numberOfPlayers > 3 && numberOfPlayers < 7) {
        for (let i = 0; i < Math.ceil(numberOfPlayers / 2); i++) {
            newPicture = document.createElement('img');
            newPicture.id = "img" + i;
            newPicture.src = "../Images/Bierlogo.png";
            document.getElementById('picLineOne').appendChild(newPicture);
        }
        for (let i = Math.ceil(numberOfPlayers / 2); i < numberOfPlayers; i++) {
            newPicture = document.createElement('img');
            newPicture.id = "img" + i;
            newPicture.src = "../Images/Bierlogo.png";
            document.getElementById('picLineTwo').appendChild(newPicture);
        }
    }
}

/**Bilder Tauschen**/
function changePicture() {
    let numberOfPlayers = document.getElementById("number").value;
    results=[];
    result;
    /**WinnerList**/
    for(let i=0;i<numberOfPlayers;i++){
        result=Math.floor(Math.random() * 6) + 1;
        results.push(result);
        /**zum Kontrollieren, später löschen**/
        console.log(results[i]);
    }

    /**Players**/
    for(let k=0;k<numberOfPlayers;k++) {
        setTimeout(function timer() {
            for (let i = 1; i < 10; i++) {
                setTimeout(function timer() {
                    for (let i = 0; i < 6; i++) {
                        setTimeout(function timer() {
                            document.getElementById('img'+k).src = pictures[i];
                        }, i * 500);
                    }
                }, i * 300);
            }
        });

        setTimeout(function timer() {
            for (let i=0; i<numberOfPlayers;i++){
                var resPic=results[i];
                document.getElementById('img'+i).src = pictures[resPic-1];
            }
        }, i * 1900);

    }
    /**Gewinner ausgeben**/
    winner=Math.max(...results);
    console.log(winner);
    var newResult;
    var line = document.createElement('text');
    var count=0;
    setTimeout(function timer(){
        for(let l=0;l<numberOfPlayers;l++){
            if(results[l]==winner){
                newResult = document.createElement('text');
                newResult.innerText="Spieler "+(l+1)+" hat gewonnen" + "\n\t";
                document.getElementById('alertResult').appendChild(newResult);
                count++;
            }
        }
        if(count==numberOfPlayers){
            document.getElementById('alertResult').innerText="Unentschieden";
        }
        else{
            line.innerText="\n\t";
            document.getElementById('alertResult').appendChild(line);
            for(let l=0;l<numberOfPlayers;l++){
                if(results[l]!=winner){
                    newResult = document.createElement('text');
                    newResult.innerText="Spieler "+(l+1)+" trinkt" + "\n\t";
                    document.getElementById('alertResult').appendChild(newResult);
                }
            }
        }
        document.getElementById("alert").hidden=false;
    }, 6000);
}


/**Startbild setzen**/
function setStartPicture() {
    var numberOfPlayers = document.getElementById("number").value;
    for(let i=0;i<numberOfPlayers;i++){
        document.getElementById('img'+i).src="../Images/Bierlogo.png";
    }
}

/**Text löschen**/
function deleteText() {
    var numberOfPlayers = document.getElementById("number").value;
    for(let i=0; i<numberOfPlayers; i++){
        document.getElementById(i).remove();
    }
}

/**Bilder löschen**/
function deletePicture() {
    var numberOfPlayers = document.getElementById("number").value;
    for(let i=0; i<numberOfPlayers; i++){
        document.getElementById('img'+i).remove();
    }
}