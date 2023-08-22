// default --> if value is not provided, take this as a default.
// function add(num1, num2) { // handle proper input
// function add(num1, num2 = 0) { // handle one missing input
function add(num1 = 0, num2 = 0) { // handle all missing input
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

// const sum = add(5, 7); // proper use
// const sum = add(5); // not a proper use
const sum = add(); // not a proper use
console.log(sum);


// if parameter is expecting a string then default value will be an empty string
function fullName(first = '', last = '', middle = '') {
    const full = first + ' ' + middle + ' ' + last;
    return full;
}

const myName = fullName('Md.', 'Ahmed', 'Ripon');
console.log(myName);


// if parameter is expecting an array then default value will be an empty array
function friends(names = []) {
    
}


// if parameter is expecting an object then default value will be an empty object
function person(human = {}) {

}


// if parameter is expecting a boolean then default value will be boolean
function hideElement(isHidden = true) {

}