/*
Write a function called "computeAreaOfACircle".
Given the radius of a circle, "computeAreaOfACircle" returns its area.
var output = computeAreaOfACircle(4);
console.log(output); // --> 50.26548245743669
Reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
*/

function computeAreaOfACircle(radius) {
    let area = Math.PI * radius ** 2;
    return area;
    }
      
      console.log(computeAreaOfACircle(4));    