window.onload=function () {
    document.getElementById("alert").hidden = true;
}

    function contact() {
    /*Definition*/
    var mail = document.getElementById('Input2').value;
    var name = document.getElementById('Input').value;
    var text = document.getElementById('Input3').value;

    if (name.length > 0 & text.length > 10 & mail.length > 0) {
        document.location.href = "mailto:kolabier@company.com?"
            + "subject= E-Mail an Kolabier Company"
            + "&body=" + encodeURIComponent(text + "\n\n" + "Mit freundlichen Grüßen \n" + name);
        document.getElementById('Input').value="";
        document.getElementById('Input2').value="";
        document.getElementById('Input3').value="";
        document.getElementById("alert").hidden = true;
        document.getElementById('iconName').src="";
        document.getElementById('iconMessage').src="";
        document.getElementById('iconMail').src="";
    }
    else{
        if(name.length > 0 ){
            document.getElementById('iconName').src='../Images/icons/okay.png';
        }
        else{
            document.getElementById('iconName').src='../Images/icons/false.png';
        }
        if(mail.length > 0 ){
            document.getElementById('iconMail').src='../Images/icons/okay.png';
        }
        else{
            document.getElementById('iconMail').src='../Images/icons/false.png';
        }
        if(text.length > 10){
            document.getElementById('iconMessage').src='../Images/icons/okay.png';
        }
        else{
            document.getElementById('iconMessage').src='../Images/icons/false.png';
        }
        document.getElementById("alert").hidden = false;
        document.getElementById("alertFalseInput").innerText="Unvollständige Eingabe"
    }
}
