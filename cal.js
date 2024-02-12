let result = document.getElementById('result');
let equation = '';

function number(num) {
    equation += num;
    result.textContent = equation;
}

function operate(op) {
    equation += op;
    result.textContent = equation;
}

function calculate() {
    try {
        equation = eval(equation);
        result.textContent = equation;
    } catch (error) {
        result.textContent = 'Error';
    }
}

function ClearDisplay() {
    equation = '';
    result.textContent = '0';
}

function DeleteLast() {
    equation = equation.slice(0, -1);
    result.textContent = equation;
}
function ChangeSign() {

    var result = document.getElementById("result").innerText;

    if (result !== "0") {
        
        if (result.charAt(0) === "-") {
            document.getElementById("result").innerText = result.slice(1);
        } else {
            document.getElementById("result").innerText = "-" + result;
        }
    }
}