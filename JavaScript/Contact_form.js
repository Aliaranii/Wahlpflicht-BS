function contact() {
    /*Definition*/
    var mail=document.getElementById('Input2').value;
    var name=document.getElementById('Input').value;
    var text=document.getElementById('Input3').value;

    console.log(mail);
    console.log(name);
    console.log(text);

    /*E-Mail konfigurieren*/
    document.location.href = "mailto:exemple@expl?subject="
        + "&body=" + encodeURIComponent(text);
}