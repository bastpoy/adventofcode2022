const { Console } = require("console");
const fs = require("fs");

const array = [
  ["B", "G", "S", "C"],
  ["T", "M", "W", "H", "J", "N", "V", "G"],
  ["M", "Q", "S"],
  ["B", "S", "L", "T", "W", "N", "M"],
  ["J", "Z", "F", "T", "V", "G", "W", "P"],
  ["C", "T", "B", "G", "Q", "H", "S"],
  ["T", "J", "P", "B", "W"],
  ["G", "D", "C", "Z", "F", "T", "Q", "M"],
  ["N", "S", "H", "B", "P", "F"],
];
var array1 = [];
var i = 0;

fs.readFileSync("input.txt")
  .toString()
  .split(/\r?\n/)
  .forEach((el) => {
    array1[i] = el.split(/move | to | from /);
    array1[i].splice(0, 1);
    i++;
  });

//BOUCLE POUR LA PREMIERE GOLD

// for (var i = 0; i < array1.length; i++) {
//   for (var j = 0; j < array1[i][0]; j++) {
//     array[array1[i][2] - 1].push(array[array1[i][1] - 1].pop());
//   }
// }

// BOUCLE POUR LA DEUXIEME GOLD
// console.log(array[3].length - 2);
console.log(
  array[0].push(
    array[3]
      .splice(array[3].length - 2, 2)
      .toString()
      .split(",")
  )
);
console.log(array[0]);
for (var i = 0; i < array1.length; i++) {
  array[array1[i][2] - 1].push(
    array[array1[i][1] - 1]
      .splice(array[array1[i][1] - 1].length - array1[i][0], array1[i][0])
      .toString()
  );
}
// il me manquait que mon splice me retournait un tableau alors que moi je voulais un string séparé d'une ','
