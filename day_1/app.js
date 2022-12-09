const fs = require("fs");

const data = fs.readFileSync("./input.txt");
const array = data.toString().split(`\n`);
console.log(array[6]);
var finalArray = [];
var addition = 0;
var i = 0;
var addThreeFirst = 0;

array.forEach((el) => {
  if (el == `\r`) {
    // console.log("salut");
    finalArray[i] = addition;
    addition = 0;
    i++;
  } else {
    // console.log(el);
    addition += parseInt(el);
  }
});
// console.log(finalArray);

addThreeFirst = Math.max(...finalArray);
finalArray.splice(finalArray.indexOf(Math.max(...finalArray)), 1);
addThreeFirst += Math.max(...finalArray);
finalArray.splice(finalArray.indexOf(Math.max(...finalArray)), 1);
addThreeFirst += Math.max(...finalArray);

console.log(addThreeFirst);
