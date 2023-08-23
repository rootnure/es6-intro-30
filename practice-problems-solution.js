// task-1
const multiply = (x, y, z) => x * y * z;

// task-2
const line1 = 'I am a web developer.';
const line2 = 'I love to code.';
const line3 = 'I love to eat biryani.';
const fullLine = `${line1} ${line2} ${line3}`;

// task-3
const sum = (num1, num2 = 0) => num1+num2;

// task-4
const evenFriends = names => {
    const even = [];
    for(const name of names) {
        if(name.length % 2 === 0) {
            even.push(name);
        }
    }
    return even;
}

// task-5
const doMath = numbers => {
    let sum = 0;
    for(const number of numbers) {
        sum += Math.pow(number, 2);
    }
    const average = sum / numbers.length;
    return average;
}

// task-6
const arraysMax = (arr1, arr2) => {
    const fullArray = [...arr1, ...arr2];
    return Math.max(...fullArray);
}






const product = multiply(5, 7, 10);
// console.log(product);

// console.log(fullLine);

const result = sum(5);
// console.log(result);

const friends = ['Asif', 'Sabbir', 'Arif', 'Rakib', 'Touhid', 'Munna'];
const isEvenFriends = evenFriends(friends);
// console.log(isEvenFriends);

const nums = [3, 2, 6, 4];
const result2 = doMath(nums);
// console.log(result2);

const firstArray = [65, 46, 35, 206, 50];
const secondArray = [98, 74, 165, 10, 513];
const highest = arraysMax(firstArray, secondArray);
console.log(highest);