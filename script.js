const displayText = document.getElementById("display-text"); // to store expression

// to perform action upon button click
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
const buttonCalculate = document.getElementById("calculate");
const buttonAdd = document.getElementById("add");
const buttonClear = document.getElementById("clear");

var result = ""; // value of expression

// calculates and display expression calculations 
function evaluate(){
    // if division by 0, result = ERROR
    if (eval(result) === Infinity){
        result = "ERROR";
    }

    // if @ least 1 operand is float, result = float
    else if (result.includes(".")){
        result = eval(result).toFixed(1);
    }

    // if both operands are int, result = int
    else{
        result = eval(result);
    }

    // displays calculations
    displayText.innerText = result;
}

// displays value of buttons upon click
button7.addEventListener("click", function(){result += "7"; displayText.innerText = result;});
button8.addEventListener("click", function(){result += "8"; displayText.innerText = result;});
button9.addEventListener("click", function(){result += "9"; displayText.innerText = result;});
buttonSlash.addEventListener("click", function(){result += "/"; displayText.innerText = result;});
button4.addEventListener("click", function(){result += "4"; displayText.innerText = result;});
button5.addEventListener("click", function(){result += "5"; displayText.innerText = result;});
button6.addEventListener("click", function(){result += "6"; displayText.innerText = result;});
buttonMultiply.addEventListener("click", function(){result += "*"; displayText.innerText = result;});
button1.addEventListener("click", function(){result += "1"; displayText.innerText = result;});
button2.addEventListener("click", function(){result += "2"; displayText.innerText = result;});
button3.addEventListener("click", function(){result += "3"; displayText.innerText = result;});
buttonMinus.addEventListener("click", function(){result += "-"; displayText.innerText = result;});
button0.addEventListener("click", function(){result += "0"; displayText.innerText = result;});
buttonDot.addEventListener("click", function(){result += "."; displayText.innerText = result;});
buttonAdd.addEventListener("click", function(){result += "+"; displayText.innerText = result;});

buttonCalculate.addEventListener("click", evaluate); // displays calculations upon click
buttonClear.addEventListener("click", function(){result = ""; displayText.innerText = result;}); // clears display panel