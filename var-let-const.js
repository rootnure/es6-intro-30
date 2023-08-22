// var : no reason to use var
// let : allow it to reassign
// const : do not allow it to reassign

const money = 25;
// money = 50; // cannot change value of const variable
const rich = money + 50; // can use other places
console.log(rich);

let age = 22;
age = age + 1; // can change value of let variable
console.log(age);


/* array */
const numbers = [23, 41, 25, 43, 33];
// numbers = [4, 21, 33, 2]; // cannot reassign to const variable
numbers[1] = 55; // can change array element
numbers.push(5, 22, 66); // can push new elements
console.log(numbers);

/* object */
const student = { name: 'Johina Sheikh', age: '29' }

// student = { name: 'Ajgor Ali' } // cannot reassign to const variable
student.name = 'Ajgor Ali'; // can change property value of const variable object

console.log(student);


/* loop */
let sum = 0; // global variable that may need to be change must assign by using let
for(let i = 0; i < 10; i++) { // must assign loop variable by using let
    const number = i; // block variable can be assigned by using const
    sum = sum + number;
}

console.log(sum);