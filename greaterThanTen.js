
/*
Write a function called "isGreaterThanTen".
Given a number, "isGreaterThanTen" returns whether it is greater than 10.
var output = isGreaterThanTen(11);
console.log(output); // --> true
*/

function isGreaterThanTen(num) {
    if (num > 10) {
      console.log(`Yes, ${num} is greater than 10`);
    } else {
      console.log(`No, ${num} is less than 10`);
    } 
  }
  
  console.log(isGreaterThanTen(3));
  console.log(isGreaterThanTen(30));
