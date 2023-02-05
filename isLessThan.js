/*
Write a function called "isLessThan".
Given 2 numbers, "isLessThan" returns whether num2 is less than num1.
var output = isLessThan(9, 4);
console.log(output); // --> true
*/

function isLessThan(num1, num2) {
    if (num2 < num1) {
      console.log(`${num2} is less than ${num1}`);
    } else {
      console.log(`${num2} is greater than ${num1}`);
    }
    }
    
    console.log(isLessThan(10, 30));