//What will these code snippets output?

var output = (function (x) {
  delete x;
  return x;
})(0);
console.log(output);

//2
var x = { foo: 1, moo: 2, poo: 3 };
var output = (function () {
  delete x.foo;
  return x;
})();
console.log(output);

var emp = { company: "xyz" };
var emp1 = Object.create(emp);
delete emp1.company;
console.log(emp1.company);
//the output is xyz. emp1 object has company as its prototype property. meaning the delete operator does not delete prototype properties.
delete emp.company;
console.log(emp);
//luckily we can directly delete the company from the emp variable.

