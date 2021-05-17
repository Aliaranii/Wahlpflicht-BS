function contact() {
    /*Definition*/
    var mail=document.getElementById('Input2').value;
    var name=document.getElementById('Input').value;
    var text=document.getElementById('Input3').value;

    if(name.length>0&text.length>0&mail.length>0){
        document.location.href = "mailto:kolabier@company.com?"
        + "subject= E-Mail an Kolabier Company"
        + "&body=" + encodeURIComponent(text +"\n\n" + "Mit freundlichen Grüßen \n" + name);
    }
}