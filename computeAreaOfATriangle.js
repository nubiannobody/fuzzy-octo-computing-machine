/*
Write a function called "computeAreaOfATriangle".
Given the base and height of a triangle, "computeAreaOfATriangle" returns its area.
var output = computeAreaOfATriangle(4, 6);
console.log(output); // --> 12
*/

function computeAreaOfATriangle(base, height) {
  let area = (base * height ) / 2
  return area;
  }

console.log(computeAreaOfATriangle(12, 6))