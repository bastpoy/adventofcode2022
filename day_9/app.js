const fs = require("fs");

const entryArray = fs
  .readFileSync("input.txt")
  .toString()
  .split(/\r?\n/)
  .map((el) => {
    return el.split(" ");
  });
console.log(entryArray);

var stateArray = new Array(700); // create an empty array of length n
for (var i = 0; i < 700; i++) {
  stateArray[i] = new Array(500); // make each element an array
}

let actualindice = {
  x: 250,
  y: 250,
};
let changingdirection = {
  horizontal: 0,
  vertical: 0,
  sum: 0,
};

let numberOf1 = 0;
for (let i = 0; i < entryArray.length; i++) {
  //je gere les deplacements vers la gauche
  if (entryArray[i][0] == "L") {
    changingdirection.horizontal = 1;
    if (changingdirection.vertical == 1) {
      numberOf1--;
      changingdirection.vertical = 0;
      changingdirection.sum++;
    }
    while (entryArray[i][1] != 0) {
      actualindice.x--;
      entryArray[i][1]--;
      stateArray[actualindice.x][actualindice.y] = 1;
      numberOf1++;
    }
  }
  //je gere les deplacements vers la droite
  if (entryArray[i][0] == "R") {
    changingdirection.horizontal = 1;
    if (changingdirection.vertical == 1) {
      numberOf1--;
      changingdirection.vertical = 0;
      changingdirection.sum++;
    }
    while (entryArray[i][1] != 0) {
      actualindice.x++;
      entryArray[i][1]--;
      stateArray[actualindice.x][actualindice.y] = 1;
      numberOf1++;
    }
  }
  //je gere les deplacements vers le haut
  if (entryArray[i][0] == "U") {
    changingdirection.vertical = 1;
    if (changingdirection.horizontal == 1) {
      numberOf1--;
      changingdirection.horizontal = 0;
      changingdirection.sum++;
    }
    while (entryArray[i][1] != 0) {
      actualindice.y++;
      entryArray[i][1]--;
      stateArray[actualindice.x][actualindice.y] = 1;
      numberOf1++;
    }
  }
  //je gere les deplacements vers le bas
  if (entryArray[i][0] == "D") {
    changingdirection.vertical = 1;
    if (changingdirection.horizontal == 1) {
      numberOf1--;
      changingdirection.horizontal = 0;
      changingdirection.sum++;
    }
    while (entryArray[i][1] != 0) {
      actualindice.y--;
      entryArray[i][1]--;
      stateArray[actualindice.x][actualindice.y] = 1;
      numberOf1++;
    }
  }
}

console.log(numberOf1);
console.log(changingdirection.sum);

//ce code ne marche pas
