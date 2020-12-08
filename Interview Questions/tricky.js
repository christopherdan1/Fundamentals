//Question 1
console.log({} + []); //[object Object]

//Question 2
function a() {
  return "hello";
}
const sentence = a`hi`; //`hi` acts as an arg passed through a(hi) but a only returns "hello"
console.log(sentence); //expected {hello}

//Question 3
/*  Make all content editable
    In Console :: document.designMode = "on";
    or document.body.contentEditable = "true";
*/
console.log("document.designMode = 'on'");

//Question 4  =2??
function y() {
  console.log(this.length);
}
let x = {
  length: 5,
  method: function (y) {
    arguments[0]();
  },
};
x.method(y, 1);

//Question 5
//const r = "constructor";
//console.log(r[r](01));

const r = new String("constructor");
console.log(r);

//Question 6
console.log(0.1 + 0.2); //0.30000000000000004

//Question 7
console.log("hi".__proto__.__proto__.__proto__); //null prototype chain

//Question 8
/*A function that returns total number of arguments
don't use loops'*/

let g = function () {
  return [].slice.call(arguments).length;
};
console.log("Q8 " + g(1, 2, 3, 4, 5, 6, 9));

//Question 9 Object w/ 3 Methods
const A = {
  x: function () {
    console.log("x");
    return A;
  },
  y: function () {
    console.log("y");
    return A;
  },
  z: function () {
    console.log("z");
    return A;
  },
};
A.x().y().z();

//should print x, y, and z || using return A;



