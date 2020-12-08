//Explain event delegation? Inverse of event bubbling.
/*events will be applied to not only the parent element but also the children.

//iife - immediately invoke function expression. Is used to control variable scope
Functions as expressions vs definitions

function cool(){
i am a definition
}

var cool = function(){
i am an expression
};

MDN - an expression is any valid unit of code that resolves to a value

to convert a declaration to an expression we just need ()
(function cool(){})();

Explain "hoisting"?
/*all variables(var) are declared at the top of any given function scope (like it or not including functions declarations)/*


*/

let x = {
  a: 1,
  b: 2,
};
let xArray = [];
/*xArray.push(x);
console.log(xArray); */
for (let i in x) {
  xArray.push(i);
}
console.log(xArray);

x = "hi";
let y = "ih";

// Review
const reverseStr = (str) => str.split("").reverse().join("");
console.log(reverseStr(x) === y);

const obj = {
  a: 1,
  b: 2,
  getA() {
    console.log(this.a);
  },
  getB() {
    console.log(this.a);
  },
};
