
/*
Write a function called "getNthElement".
Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array.
Notes:
* If the array has a length of 0, it should return 'undefined'.
var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3
*/

function getNthElement(array, n) {
    if (array.length === 0) {
      return undefined;
    } else {
      return array[n];
   }
   }

console.log(getNthElement([])); // undefined
console.log(getNthElement([1, 3, 5, 7, 11], 2)); // 5;