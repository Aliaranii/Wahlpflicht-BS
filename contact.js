// contact.html js

$(document).ready(function () {

    submitcontactform()
    

    
});

function submitcontactform() {
    $('#contactbtn').click(function () {
        var firstn = $('#firstname').val();
        var lastn = $('#lastname').val();



        console.log(firstn + " " + lastn);

    })
}

var i = 0