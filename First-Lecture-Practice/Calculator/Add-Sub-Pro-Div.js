//Add
const add = (a, b) => {
    return a + b;
}

//Subtract
const subtract = (a, b) => {
    return a - b;
}

//Product
const product = (a, b) => {
    return a * b;
}

//Division
const division = () => {
    if (b == 0) {
        console.error(`${b} is note devided by 0`)
    } else {
        return a / b;
    }
}

//Modulus
const modulus = (a, b) => {
    return a % b;
}

//Exporting All Function 
module.exports = {add, subtract, product, division, modulus};