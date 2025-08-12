
let firstnumber="";
let secondnumber="";
let operator="";

function append(number){
    playSound();
    if (operator === "") {
        firstnumber += number;
        document.getElementById("res").value = firstnumber;
    } else {
        secondnumber += number;
        document.getElementById("res").value = firstnumber+operator+secondnumber;
    }
}
function operate(op){
    operator = op;
    playSound();
     document.getElementById("res").value = firstnumber+operator;
}
function calculate(){
    let result;
    playSound();
      switch(operator){
        case '+':
            result = parseInt(firstnumber) + parseInt(secondnumber);
            break;
        case '-':
            result = parseInt(firstnumber) - parseInt(secondnumber);
            break;
        case '*':
            result = parseInt(firstnumber) * parseInt(secondnumber);
            break;
        case '/':
            result = parseInt(firstnumber) / parseInt(secondnumber);
            break;
    }
    document.getElementById('res').value = result;
}
function clearresult(){
    playSound();
    firstnumber = "";
    secondnumber = "";
    operator = "";
    document.getElementById("res").value = "";
}
let clickSound=new Audio("drop.mp3");
function playSound(){
    clickSound.currentTime=0;
    clickSound.play();
}


