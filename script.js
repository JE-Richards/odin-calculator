// Define empty variables to store the user inputs in
let currentInput = '';
let previousInput = '';
let operator = '';

// Functions for each mathematical operation on the calculator
const addition = function(a, b) {
    return Number(a) + Number(b);
}

const subtract = function(a, b) {
    return Number(a) - Number(b);
}

const multiply = function(a, b) {
    return Number(a) * Number(b);
}

const divide = function(a, b) {
    if (Number(b) === 0) {
        return "Error! Can't divide by 0";
    }
    else {
        return Number(a) / Number(b);
    }
}

const operate = function(inputOne, inputTwo, operator) {
    return operator(inputOne, inputTwo);
}

// Update function to refresh the screen display
const update = function() {
    if (currentInput === '' && previousInput === '') {
        displayScreen.innerHTML = currentInput;
    }
    else if (currentInput === '' && previousInput !== '') {
        displayScreen.innerHTML = previousInput;
    }
    else {
        displayScreen.innerHTML = currentInput;
    }
};

// Function to clear stored variable values
const reset = function() {
    currentInput = '';
    previousInput = '';
    operator = '';
    update();
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
const bttnAc = document.querySelector("#ac");
const bttnBackspace = document.querySelector("#backspace");
const bttnDivide = document.querySelector("#divide");
const bttnMultiply = document.querySelector("#multiply");
const bttnSubtract = document.querySelector("#subtract");
const bttnAddition = document.querySelector("#addition");
const bttnEquals = document.querySelector("#equals");
const displayScreen = document.querySelector("#displayScreen");


// Add event listeners to each button to append button text to current input string and update display screen
bttnNum.forEach(element => {
    element.addEventListener('click', x => {
        let bttn = x.target;
        currentInput = currentInput + bttn.textContent;
        update();
        return currentInput;
    })
});

// Add functionality to clear (AC) button
bttnAc.addEventListener('click', reset);

// Add functionality to backspace button
bttnBackspace.addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    update();
    return currentInput;
})

// Add functionality to mathematical operation buttons
bttnDivide.addEventListener('click', () => {
    operator = divide;
    previousInput = currentInput;
    currentInput = '';
    update()
    return operator, previousInput, currentInput;
});

bttnMultiply.addEventListener('click', () => {
    operator = multiply;
    previousInput = currentInput;
    currentInput = '';
    update();
    return operator, previousInput, currentInput;
});

bttnSubtract.addEventListener('click', () => {
    operator = subtract;
    previousInput = currentInput;
    currentInput = '';
    update()
    return operator, previousInput, currentInput;
});

bttnAddition.addEventListener('click', () => {
    operator = addition;
    previousInput = currentInput;
    currentInput = '';
    update()
    return operator, previousInput, currentInput;
});

bttnEquals.addEventListener('click', () => {
    previousInput = operate(previousInput, currentInput, operator);
    currentInput = '';
    operator = '';
    update();
    return previousInput, currentInput, operator;
});