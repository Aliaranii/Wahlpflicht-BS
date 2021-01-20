window.onload=function () {
    document.getElementById("result").hidden = true;
}

function test(){
    var ans_test1=document.getElementById('inputGroupSelect01').value;
    var ans_test2=document.getElementById('inputGroupSelect02').value;
    var ans_test3=document.getElementById('inputGroupSelect03').value;


    /*Points*/

    var count=0;
    if(ans_test1==1){count++;}
    if(ans_test2==3){count++;}
    if(ans_test3==2){count++;}

    console.log(count);
    document.getElementById("result").hidden=false;
    document.getElementById("points").innerText=count;
}