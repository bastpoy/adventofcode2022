const fs = require("fs");

const input = fs.readFileSync("./input.txt");
const dataArray = input.toString().split(/\r| |\n/);
var scoreJoueur1 = 0;
var scoreJoueur2 = 0;
let i = 0;
let j = 0;

dataArray.forEach((el) => {
  if (el == "") {
    dataArray.splice(dataArray.indexOf(el), 1);
  }
});
console.log(i);

for (let i = 0; i < dataArray.length; i += 2) {
  if (dataArray[i] == "A") {
    if (dataArray[i + 1] == "X") {
      scoreJoueur1 += 7;
      scoreJoueur2 += 3;
    }
    if (dataArray[i + 1] == "Y") {
      scoreJoueur1 += 4;
      scoreJoueur2 += 4;
    }
    if (dataArray[i + 1] == "Z") {
      scoreJoueur1 += 1;
      scoreJoueur2 += 8;
    }
  }
  if (dataArray[i] == "B") {
    if (dataArray[i + 1] == "X") {
      scoreJoueur1 += 8;
      scoreJoueur2 += 1;
    }
    if (dataArray[i + 1] == "Y") {
      scoreJoueur1 += 5;
      scoreJoueur2 += 5;
    }
    if (dataArray[i + 1] == "Z") {
      scoreJoueur1 += 2;
      scoreJoueur2 += 9;
    }
  }
  if (dataArray[i] == "C") {
    if (dataArray[i + 1] == "X") {
      scoreJoueur1 += 9;
      scoreJoueur2 += 2;
    }
    if (dataArray[i + 1] == "Y") {
      scoreJoueur1 += 6;
      scoreJoueur2 += 6;
    }
    if (dataArray[i + 1] == "Z") {
      scoreJoueur1 += 3;
      scoreJoueur2 += 7;
    }
  }
}
console.log(`${scoreJoueur1} ` + `${scoreJoueur2}`);
