// Define empty variables to store the user inputs in
let currentInput = '';
let previousInput = '';
let operator = '';

// Functions for each mathematical operation on the calculator
const addition = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    if (b === 0) {
        return "Error! Can't divide by 0";
    }
    else {
        return a / b;
    }
}

const operate = function(inputOne, inputTwo, operator) {
    return operator(inputOne, inputTwo);
}

// Select all elements in the calculator that need to be modified or receive an event listener
// const bttnZero = document.querySelector("#numZero");
// const bttnOne = document.querySelector("#numOne");
// const bttnTwo = document.querySelector("#numTwo");
// const bttnThree = document.querySelector("#numThree");
// const bttnFour = document.querySelector("#numFour");
// const bttnFive = document.querySelector("#numFive");
// const bttnSix = document.querySelector("#numSix");
// const bttnSeven = document.querySelector("#numSeven");
// const bttnEight = document.querySelector("#numEight");
// const bttnNine = document.querySelector("#numNine");
const bttnPeriod = document.querySelector('#period');
const bttnNum = document.querySelectorAll('.numBttn');
const bttnac = document.querySelector("#ac");
const bttnBackspace = document.querySelector("#backspace");
const bttnDivide = document.querySelector("#divide");
const bttnMultiply = document.querySelector("#multiply");
const bttnSubtract = document.querySelector("#subtract");
const bttnAddition = document.querySelector("#addition");
const bttnEquals = document.querySelector("#equals");
const displayScreen = document.querySelector("#displayScreen");


// Add event listeners to each button to append button text to current input string
bttnNum.forEach(element => {
    element.addEventListener('click', x => {
        let bttn = x.target;
        return currentInput = currentInput + bttn.textContent;
    })
});


// Add numbers input by user to calculator screen
if (currentInput === '' && previousInput === '') {
    displayScreen.innerHTML = currentInput;
}
else if (currentInput === '' && previousInput !== '') {
    displayScreen.innerHTML = previousInput;
}
else {
    displayScreen.innerHTML = currentInput;
}





