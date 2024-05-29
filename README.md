Calculator: An Introductory JavaScript Project

## Table of Contents
1. [Overview](#overview)
2. [The Calculator](#the-calculator)
3. [Project Retrospective](#retrospective)

## Overview
This acts as the capstone project for [The Odin Project Foundations Course](https://www.theodinproject.com/paths/foundations/courses/foundations), and is designed to provide students with the opportunity to practise and display all of the skills they've learned throughout the course.

The project objective is to use HTML, CSS, and JavaScript to build an on-screen calculator that users can interact with to solve basic mathematical equations.

The project scope is laid out in two parts; essential requirements and extra credits. <br>
The essential requirements are the minimum requirements that the calculator needs to have in order for the project to be deemed complete. <br>
The extra credits provide an opportunity for students to push their current skills and understanding to its limits by implementing additional, non-essential, functionality to the calculator. <br>
Below is the full list of requirements and extra credits, along with a checkbox to indicate whether they have been completed for this particular submission.

**Essential Requirements:**
- [x] Calculator should contain functions for all of the basic math operations found on typical calculators.
    - [x] Addition
    - [x] Subtraction
    - [x] Multiplication
    - [x] Division
- [x] The calculator operation will consist of a number, an operator, and another number.
    - [x] These numbers should be displayed on the calculator display.
- [x] Using HTML, create a basic calculator with buttons for each digit and function.
    - [x] Add a clear button to clear the calculator inputs.
- [x] Use JavaScript to make the calculator functional.
    - [x] The calculator should store the first and second numbers, and apply the chosen operator to them. The equals button should output the solution to the equation.
- [x] Avoid these common pitfalls:
    - [x] The calculator should not evaluate more than a single pair of numbers at a time. For example ``12 + 7 - 9`` should perform ``12 + 7 = 19`` and then ``19 - 9 = 10``.
    - [ ] You should round answers with long decimals so that they don't overflow the screen.
    - [x] Pressing ``=`` before entering all of the numbers could cause problems.
    - [x] Pressing "clear" should wipe out any existing data.
    - [x] Display an error message if the user tries to divide by 0.

**Extra Credit:**
- [x] Add floating point numbers to the calculator.
    - [x] Ensure the user can't input multiple decimals into a single number.
- [x] Use CSS to make the calculator look nicer.
- [x] Add a backspace button so that the user can undo if they click the wrong number.
- [ ] Add keyboard support.

## The Calculator
To use the calculator, please visit the following webpage: https://je-richards.github.io/odin-calculator/

## Project Retrospective
As the main purpose of this project is to practise what's been taught throughout the Foundations course, I figured it would be worthwhile to perform a retrospective to help identify opportunities for improvement.

The retrospective will be subsectioned based on date (most recent to oldest). That way, should I choose to return and improve upon this project, I can add further retrospectives to see how each iteration, and my understanding of HTML, CSS, and JavaScript, has improved.

The full SHA string for the latest commit (at the time of writing) will be included in each retrospective.

### 29/05/2024
- Full commit SHA: 237ba087672715b2ce7efa947178b0d940759d00

- I'm pleased with the outcome of the project in addition to the progress I've made over the last fortnight whilst working through this course. I've come a long way from where I started and I feel this project does a great job highlighting the progress I've made thus far.

- I've not implemented a limit to the number of digits displayed by the calculator. Even though one of the essential requirements was to implementing a rounding limit for numbers with a long string of decimals, I opted not to implement this. My reasoning was that I felt that if I were to implement a rounding limit for decimals, then I should also impliment some way to notify the user that the answer had been rounded, and I wasn't sure how best to implement this.
    - Furthermore, the justification for rounding the decimals given in the essential requirements was to ensure the number would fit nicely into the calculator display screen. However, if I were to abide by this justification, I feel that I'd also need to limit the size of the number a user could input or calculate, lest they also overflow the screen. But in doing so, this would curtail the usefulness and functionality of the calculator itself by limiting the size of the calculations the user could perform, so I chose not to implement it.
    - This decision does cause a problem with the calculator: the numbers displayed can overflow the screen. I think there are a couple of options that could be explored in future iterations to try and solve this:
        1. Modify the CSS styling so that as the input increases in length, the font-size gets smaller.
        2. Modify the CSS styling so that as the input increases in length it wraps and the screen flexes taller to accommodate this.
        3. Modify the fixed-size of the calculator so that it is bigger initially and can accommodate larger numbers.
        4. A combination of the other options.

- Semantic HTML isn't used as it wasn't covered during the Foundation Course and I've only encountered it when problem solving via Google. Would be good to rewrite the HTML to make use of semantic HTML.

- When implementing the decimal function button, I used Regex to check whether the input already contained a decimal. It would be good to learn more Regex so that I can more easily use it in future without needing to spend a lot of time googling potential solutions.

- My JavaScript code does contain some repetition, especially when it comes to setting up the functionality of the buttons for the mathematical operations. I feel this could be reduced if I wrote another function that contained the logic behind the operation buttons.
    - I've also created a lot of ``eventListener`` objects for each of the buttons on the calculator. It would be worth learning more about event delegation to see if it could be used to reduce the number of listeners needed.

- Although out of scope for the project, it would be relatively straightforward to implement other simple mathematical operations, such as modulo or exponentition, which would enhance the calculators utility.

- I've yet to add keyboard support to the calculator. It would be good to get this to work but it may create additional event listeners which could impact performance of the webpage.
    - Could look to do this in tandem with implementing some form of event delegation, as mentioned in a previous point.

---