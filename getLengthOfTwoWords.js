/*
Write a function called "getLengthOfTwoWords".
Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.
var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9
*/

function getLengthOfTwoWords(word1, word2) {
   let sumOfWordsLength = word1.length + word2.length;
   console.log("The length of word1 is " + word1.length);
   console.log("The length of word2 is " + word2.length);
   console.log("The total length of word1 and word2 is " + sumOfWordsLength);
}
console.log(getLengthOfTwoWords("shrimp", "taco"));
