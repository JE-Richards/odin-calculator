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
        return "Error!";
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
    if (currentInput != '' && previousInput === '') {
        operator = divide;
        previousInput = currentInput;
        currentInput = '';
        update()
        return operator, previousInput, currentInput;
    }
    else if (currentInput != '' && previousInput != '') {
        previousInput = operate(previousInput, currentInput, operator);
        currentInput = '';
        operator = divide;
        update();
        return operator, previousInput, currentInput;
    }
});

bttnMultiply.addEventListener('click', () => {
    if (currentInput != '' && previousInput === '') {
        operator = multiply;
        previousInput = currentInput;
        currentInput = '';
        update()
        return operator, previousInput, currentInput;
    }
    else if (currentInput != '' && previousInput != '') {
        previousInput = operate(previousInput, currentInput, operator);
        currentInput = '';
        operator = multiply;
        update();
        return operator, previousInput, currentInput;
    }
});

bttnSubtract.addEventListener('click', () => {
    if (currentInput != '' && previousInput === '') {
        operator = subtract;
        previousInput = currentInput;
        currentInput = '';
        update()
        return operator, previousInput, currentInput;
    }
    else if (currentInput != '' && previousInput != '') {
        previousInput = operate(previousInput, currentInput, operator);
        currentInput = '';
        operator = subtract;
        update();
        return operator, previousInput, currentInput;
    }
});

bttnAddition.addEventListener('click', () => {
    if (currentInput != '' && previousInput === '') {
        operator = addition;
        previousInput = currentInput;
        currentInput = '';
        update()
        return operator, previousInput, currentInput;
    }
    else if (currentInput != '' && previousInput != '') {
        previousInput = operate(previousInput, currentInput, operator);
        currentInput = '';
        operator = addition;
        update();
        return operator, previousInput, currentInput;
    }
});

bttnEquals.addEventListener('click', () => {
    previousInput = operate(previousInput, currentInput, operator);
    currentInput = '';
    operator = '';
    update();
    return previousInput, currentInput, operator;
});

// Add functionality to period button
// Use regex to detect if a period is present
// Regex logic:
// \. is used to find a period. As . takes a special meaning in regex, we use \ to escape the meaning
// /g means global and returns an array containing all elements that match the regex, but doesn't return capturing groups
bttnPeriod.addEventListener('click', x => {
    let containPeriod = currentInput.match(/\./g);
    let bttn = x.target;

    if (containPeriod === null) {
        currentInput = currentInput + bttn.textContent;
        update();
        return currentInput;
    }
    else {
        update();
        return currentInput;
    }
});