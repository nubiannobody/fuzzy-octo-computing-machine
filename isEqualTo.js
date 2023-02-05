
/*
Write a function called "isGreaterThan".
Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1.
var output = isGreaterThan(11, 10);
console.log(output); // --> false
*/

const { isAssetError } = require("next/dist/client/route-loader");

function isGreaterThan(num1, num2) {
    if (num2 > num1) {
      console.log(`Yes, number2 ${num2}, is greater than ${num1}`);
    } else {
      console.log(`No, number1 ${num1}, is greater than ${num2}`);
    }
    }
    
    console.log(isGreaterThan(100, 1));
    console.log(isGreaterThan(1, 100));