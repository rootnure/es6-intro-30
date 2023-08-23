const max = Math.max(6, 23, 4, 1, 88, 23);
const numbers = [63, 54, 96, 15, 32, 16];
const arrayMax = Math.max(...numbers);

// console.log(...numbers);
// console.log(arrayMax);

/* use spread operator to copy */
const ages = [5, 4, 8];
const ages2 = ages; // share the memory reference
ages2.push(22); // will update both ages & ages2

const ages3 = [...ages]; // copy array elements without reference
ages3.push(9);

console.log(ages);
console.log(ages2);
console.log(ages3);

// advanced (copy and add new element)
const newAges = [...ages3, 7];
console.log(newAges);