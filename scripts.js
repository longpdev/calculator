const result = document.querySelector('.result-container');
const number = document.querySelector('.numbers');
var displayValue = 0;
var currentValue = "";

function display(){
    
}
number.addEventListener('click', (e) =>{
    if (e.target.value != null)
    {    
        displayValue = e.target.value;
        currentValue += displayValue;
        result.innerText += displayValue;
    }
} );

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;

}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    if (operator == "+")
        return add(a, b);
    if (operator == "-")
        return substract(a, b);
    if (operator == "*")
        return multiply(a, b);
    if (operator == "/")
        return divide(a, b);
}