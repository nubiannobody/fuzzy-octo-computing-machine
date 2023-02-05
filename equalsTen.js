
/*
Write a function called "equalsTen".
Given a number, "equalsTen" returns whether or not the given number is 10.
var output = equalsTen(9);
console.log(output); // --> false
*/

function equalsTen(num) {
    if (num === 10) {
      console.log(`${num} is equal to 10`);
    } else {
      console.log(`${num} is not equal to 10`);
    }
    }
    
    console.log(equalsTen(9));
    console.log(equalsTen(10));