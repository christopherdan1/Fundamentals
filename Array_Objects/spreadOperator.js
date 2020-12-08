/* spread operator ...x
The Spread operator is kinda like a shortcut way to combine arrays and objects the quickest way possible
*/

//duplicate and ARRAY
function spreadOp() {
  let x = [1, 2, 3, 4];
  //let y = Object.assign([], x);

  let y = [...x];
  console.log("Y = " + y + " X = " + x);
}
spreadOp();

function so() {
  let x = [1, 2];
  let y = [8, 9];
  console.log([...y, ...x]);
  console.log(x.concat(...y));
}
so(); //merge x and y

//you can convert arrays to arguments to pass through functions

let x = ["a", "b", "c"];
//...x = "a","b","c"
let funct = function (...arguments) {
  console.log(arguments);
};
funct(...x);

//pass arg through functions
let m = [3, 4, 3, 2, 3, 4, 34, 34, 34, 34];
let n = [9, 12, 54, 32, 12, 45, 73, 19];
console.log("Min = " + Math.min(...m));
console.info("the Mins of m x n = " + Math.min(...m) * Math.min(...n));

("Hey Chris That was Really Easy!");
