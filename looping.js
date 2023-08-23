// for of use on array or string not in object
// for in use on object



const numbers = [3, 2, 1, 6, 5];
/* 
// for / while loop --> won't use that much from now 
// for loop
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// while loop
let i = 0;
while(i < numbers.length) {
    console.log(numbers[i]);
    i++;
}
*/

/* for-of loop */
for(const number of numbers) {
    // console.log(number);
}

// for-of on string
const name = 'Abir mahbub';
for(const char of name) {
    // console.log(char);
}

const obj = {name: 'Sabbir', age: 23, isHealthy: true}

// optional: iterate on object using for-of
// get the keys [Object.keys()] of the object and run for-of loop on keys as the keys are in array format
const keys = Object.keys(obj);
for(const key of keys) {
    const value = obj[key];
    console.log(key, ':', value);
}

/* for-in loop */
for(const key in obj) {
    const value = obj[key];
    console.log(key, ':', value);
}