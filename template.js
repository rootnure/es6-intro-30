const first = 'Md.';
const middle = 'Ripon';
const last = 'Ahmed';

const fullNameNormal = 'My name is: ' + first + ' ' + middle + ' ' + last;
// template string using backtick
const fullNameTemplate = `My name is: ${first} ${middle} ${last}`;
// console.log(fullNameNormal);
// console.log(fullNameTemplate);

const num1 = 10;
const num2 = 15;
const result = 'The sum of ' + num1 + ' and ' + num2 + ' is ' + (num1 + num2);
// template string helps to write the code in more readable format
// string interpolation (working with variables) is more efficient in template string
const result2 = `The sum of ${num1} and ${num2} is ${num1 + num2}`;
// console.log(result);
// console.log(result2);

const myPost = 'Hi, \n' +
'I am Md. Nure Alom. \n' +
'Learning web development from Programming Hero \n'
;
console.log(myPost);

// template string helps to write multi line string easily
const myNewPost = `I am a student of Batch 8.
I am determined about this course.
I will complete the course with my full dedication.
Within the time period, I will become a junior web developer.
`;
console.log(myNewPost);


/* template string --> array or object */
const marks = [22, 55, 44];
const student = { name: 'Nahian Araf', age: 10, class: 'six' }

const dynamicString = `Mr. ${student.name} got ${marks[0]}, ${marks[1]} and ${marks[2]} in his class ${student.class} exam at the age of ${student.age}.`;
console.log(dynamicString);