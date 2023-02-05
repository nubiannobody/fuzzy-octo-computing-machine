/*
Write a function called "isLessThan30".
Given a number, "isLessThan30" returns whether the given number is less than 30.
var output = isLessThan30(9);
console.log(output); // --> true
*/

function isLessThan30(num) {
    if (num < 30) {
      console.log(`Yes, ${num} is less than 30`);
    } else {
      console.log(`No, ${num} is greater than 30`);
    }
   }
   
   console.log(isLessThan30(29));
   console.log(isLessThan30(40));