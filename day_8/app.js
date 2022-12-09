const fs = require("fs");

let array = fs
  .readFileSync("input.txt")
  .toString()
  .split(/\r?\n/)
  .map((el) => {
    return el.split("");
  });
let numberSide = 4 * array.length - 4;
console.log(numberSide);
let status = {
  gauche: true,
  droite: true,
  haut: true,
  bas: true,
};
const calc = function (theArray, i, j, status) {
  let k;

  //j'itère vers la gauche du tableau
  k = j - 1;
  while (k >= 0) {
    if (theArray[i][j] <= theArray[i][k]) {
      status.gauche = false;
      break;
    } else {
      k--;
    }
  }
  //j'itère vers la droite du tableau
  k = j + 1;
  while (k <= 98) {
    if (theArray[i][j] <= theArray[i][k]) {
      status.droite = false;
      break;
    } else {
      k++;
    }
  }
  //j'itère vers le haut du tableau
  k = i - 1;
  while (k >= 0) {
    if (theArray[i][j] <= theArray[k][j]) {
      status.haut = false;
      break;
    } else {
      k--;
    }
  }
  // j'itère vers le bas du tableau
  k = i + 1;
  while (k <= 98) {
    if (theArray[i][j] <= theArray[k][j]) {
      status.bas = false;
      break;
    } else {
      k++;
    }
  }
  if (
    status.bas == false &&
    status.haut == false &&
    status.droite == false &&
    status.gauche == false
  ) {
    status.bas = true;
    status.haut = true;
    status.droite = true;
    status.gauche = true;
    return false;
  } else {
    return true;
  }
};

//je parcours mon tableau et j'itère si c'est bon

for (let i = 1; i < array.length - 1; i++) {
  for (let j = 1; j < array[0].length - 1; j++) {
    if (calc(array, i, j, status)) {
      // console.log(`la valeur vaut ${array[i][j]} et i ${i} et j ${j}`);
      numberSide++;
      // console.log(numberSide);
    }
  }
}
console.log(numberSide);
