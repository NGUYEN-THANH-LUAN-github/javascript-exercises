function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function sum(arr) {
    return array.reduce((a, b) => { return a + b }, 0);
}

function multiply(arr) {
    return arr.reduce((a, b) => a * b);
}

function power(num, pow) {
    return num ** pow;
}

function factorial(a) {
    let result = 1;
    for (let i = 1; i <= a; i++) {
        result *= i;
    }
    return result;
}

module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
}