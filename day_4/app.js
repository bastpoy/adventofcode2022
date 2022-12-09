// const fs = require("fs");

// const data = fs.readFileSync("./input.txt").toString();
// var dataArray = data.split(/\r|,|\n|-/);
// var j = 0;

// dataArray.forEach((el) => {
//   if (el == "") {
//     dataArray.splice(dataArray.indexOf(el), 1);
//   }
// });
// dataArray.forEach((el) => {
//   dataArray[el] = parseInt(dataArray[el]);
// });

// console.log(dataArray);
// for (var i = 0; i < dataArray.length; i += 4) {
//   if (
//     (dataArray[i] <= dataArray[i + 2] &&
//       dataArray[i + 1] >= dataArray[i + 3]) ||
//     (dataArray[i] >= dataArray[i + 2] && dataArray[i + 1] <= dataArray[i + 3])
//   ) {
//     j++;
//   }
// }

// console.log(j);

const fs = require("fs");

let score = 0;

fs.readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((input) =>
    input
      .split(",")
      .map((value) => value.split("-").map((value) => parseInt(value)))
  )
  .forEach((input) => {
    if (
      (input[0][0] <= input[1][0] && input[0][1] >= input[1][1]) ||
      (input[1][0] <= input[0][0] && input[1][1] >= input[0][1])
    ) {
      score++;
    }
  });

console.log(score);
