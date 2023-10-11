/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2)
{
    return number1 + number2;
}

function addNumbers()
{
    const number1 = parseInt(document.querySelector("#add1").value);
    const number2 = parseInt(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(number1, number2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers)


/* Function Expression - Subtract Numbers */

const subtract = function(number1, number2)
{
    return number1 - number2;
};

const subtractNumbers = function()
{
    const number1 = parseInt(document.querySelector("#subtract1").value);
    const number2 = parseInt(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = subtract(number1, number2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers)


/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () =>
{
    const number1 = parseInt(document.querySelector("#factor1").value);
    const number2 = parseInt(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply(number1, number2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers)


/* Open Function Use - Divide Numbers */

function divide(number1, number2)
{
    return number1 / number2;
}

function divideNumbers()
{
    const number1 = parseInt(document.querySelector("#dividend").value);
    const number2 = parseInt(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(number1, number2);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers)


/* Decision Structure */

const currentDateAndTime = new Date();
const currentYear = currentDateAndTime.getFullYear();
document.querySelector("#year").value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = numbers;

/* Output Odds Only Array */

document.querySelector("#odds").innerHTML = numbers.filter(number => number % 2 === 1);

/* Output Evens Only Array */

document.querySelector("#evens").innerHTML = numbers.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */

document.querySelector("#sumOfArray").innerHTML = numbers.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */

document.querySelector("#multiplied").innerHTML = numbers.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */

document.querySelector("#sumOfMultiplied").innerHTML = numbers.map(number => number * 2).reduce((sum, number) => sum + number);
