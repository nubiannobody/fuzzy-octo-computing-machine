/*
Write a function called "computePerimeterOfACircle".
Given the radius of a circle, "computePerimeterOfACircle" returns its perimeter.
var output = computePerimeterOfACircle(4);
console.log(output); // --> 25.132741228718345
*/

function computePerimeterOfACircle(radius) {
    let perimeter = 2 * Math.PI * radius;
    return perimeter;
   }
   
console.log(computePerimeterOfACircle(4)); // 25.132741228718345