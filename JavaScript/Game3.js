function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomActionCard() {
    $.getJSON("../JavaScript/AktionsKarten.json", function (actionCard) {
        document.getElementById("actionCard").style.display = "block";
        document.getElementById("actionCardText").innerText = actionCard[getRandomInt(actionCard.length)].text;
        console.log(actionCard[getRandomInt(actionCard.length)]);
        console.log(actionCard)
    })

}

function closeTextfield() {
    document.getElementById("actionCard").style.display = "none";
}

function setPlayers() {
    var numberOfPlayers = document.getElementById("number").value;
}


//id 1: start
//id 2 - 53
//id 54: ziel