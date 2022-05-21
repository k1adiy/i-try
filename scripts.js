function checkNumbers(){
    if ((document.getElementById("x1").value==6 && document.getElementById("x2").value==8) || (document.getElementById("x1").value==8 && document.getElementById("x2").value==6))
    {alert("Верно");
    console.log('bingo');
}
    else {alert("Неа, неверно(");};

    // var x1 = document.getElementById("x1").value;
    // var x2 = document.getElementById("x2").value;
    // if (x1*x1+x2*x2==100)
    // {alert("Верно");}
    // else {alert("Неа, неверно(")};
}