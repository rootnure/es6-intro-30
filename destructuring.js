/* Object destructuring */

const actor = {
    name: 'Ashwar Dip',
    age: 27,
    phone: '+880 1749-436103',
    money: 3549849651
}

// if right side is an object, left side of destructuring will be an object as well
// use property name as a variable that contains the property value
// const {age} = actor; // can destructure single property
// const {name, phone, age} = actor; // can destructure multiple property
const {name:fullName, phone, age} = actor; // can destructure and rename (give new variable name)
const { name:fname } = { name: 'nur' }
// const phone = actor.phone;
// const name = actor.phone;
// const age = actor.phone;

// console.log(actor.phone);
// console.log(actor.phone);
// console.log(phone);

// console.log(age);
// console.log(name, phone, age);
// console.log(fullName, phone, age);




/* Array destructuring */

const numbers = [9, 8, 15, 9, 6, 3, 11];
// if right side is an array, left side of destructuring will be an array as well
// use new variable to assign variable serially
const [first, second] = numbers;
const [num1, num2] = [5, 6];
// console.log(first, second);


/* destructure function return */

const doubleThem = (a, b) => [a*2, b*2];

const [one, two] = doubleThem(7, 9);
console.log(one, two);