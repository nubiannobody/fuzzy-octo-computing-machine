/*
Write a function called "getLastElement".
Given an array, "getLastElement" returns the last element of the given array.
Notes:
* If the given array has a length of 0, it should return 'undefined'.
var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4
*/

function getLastElement(array) {
  
    let lastElement = array[array.length - 1];
    
    if (array.length === 0) {
      return undefined;
    } else {
      return lastElement;
    }
}
console.log(getLastElement([])); // undefined
console.log(getLastElement([5, 4, 3])); // [3]

/*
function getLastElement(array) {
    if (array.length === 0) {
      return undefined;
    } else {
      return array[array.length - 1];
    }
    }
*/