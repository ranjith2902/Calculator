// program for a simple calculator
function calculate() {

// take the operator input
let operator = document.getElementById("operator").value;

// take the operand input
const number1 = parseFloat(document.getElementById("num1").value);
const number2 = parseFloat(document.getElementById("num2").value);


switch(operator) {
    case '+':
        document.getElementById("result").value = number1+number2;
        break;

    case '-':
        document.getElementById("result").value = number1-number2;
        break;

    case '*':
        document.getElementById("result").value = number1*number2;
        break;

    case '/':
        document.getElementById("result").value = number1/number2;
        break;

    default:
        alert('Invalid operator');
        break;
}
}