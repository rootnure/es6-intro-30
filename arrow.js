/* // function declaration (normal function)
function add(a, b) {
    return a + b;
}
 */

// function expression (declare a function to a variable)
const add2 = function (a, b) {
    return a + b;
}

// arrow function
const add3 = (num1, num2) => num1 + num2;
const add4 = (num1, num2, num3, num4, num5) => num1 + num2 + num3 + num4 + num5;
const product = (num1, num2) => num1 * num2;

// const sum = add3(55, 44);
// const sum = add4(22, 10, 25, 11, 14);
// console.log(sum);
const result = product(6, 9)
console.log(result);