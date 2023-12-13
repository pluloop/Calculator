const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const buttonSlash = document.getElementById("slash");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const buttonMultiply = document.getElementById("multiply");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const buttonMinus = document.getElementById("minus");
const button0 = document.getElementById("0");
const buttonDot = document.getElementById("dot");
const buttonEqual = document.getElementById("equal");
const buttonAdd = document.getElementById("add");
const buttonCalculate = document.getElementById("calculate");

var calculations = "";

function calculate(){
    
}

button7.addEventListener("click", function(){calculations += 7;});
button7.addEventListener("click", function(){calculations += 8;});
button7.addEventListener("click", function(){calculations += 9;});
button7.addEventListener("click", function(){calculations += "/";});
button7.addEventListener("click", function(){calculations += 4;});
button7.addEventListener("click", function(){calculations += 5;});
button7.addEventListener("click", function(){calculations += 6;});
button7.addEventListener("click", function(){calculations += "*";});
button7.addEventListener("click", function(){calculations += 1;});
button7.addEventListener("click", function(){calculations += 2;});
button7.addEventListener("click", function(){calculations += 3;});
button7.addEventListener("click", function(){calculations += "-";});
button7.addEventListener("click", function(){calculations += 0;});
button7.addEventListener("click", function(){calculations += ".";});
button7.addEventListener("click", function(){calculations += "=";});
button7.addEventListener("click", function(){calculations += "+";});
button7.addEventListener("click", calculate);