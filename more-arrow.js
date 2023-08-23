const printHello = () => 'hello'; // no parameter arrow function
const doubleIt = a => a * 2; // single parameter arrow function
const printSum = (a, b) => a + b; // multiple parameter arrow function

const noParameter = printHello();
const singleParameter = doubleIt(5);
const multipleParameter = printSum(10, 20);

// console.log(noParameter);
// console.log(singleParameter);
// console.log(multipleParameter);


// -------------------------------------------------------------

// multiple parameter
const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;

// for single parameter arrow function bracket is not mandatory
const getAge = person => person.age;
const getThird = (numbers) => numbers[2];

const age = getAge({ name: 'ananta', age: 38 });
console.log(age);

const third = getThird([6, 5, 4, 9, 6]);
console.log(third);

// no parameter
const getPI = () => Math.PI;
const pi = getPI();
console.log(pi);


// large arrow function (multi line function)
// If you want to get anything returned form the function, then you have to use return keyword
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const product = x * y * z;
    const result = sum + product;
    return result;
}