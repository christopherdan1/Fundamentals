//When exchanging data between a browser and a server, the data can ONLY be text(String).
//TEXT TEXT TEXT TEXT TEXT TEXT TEXT ||| STRING STRING STRING STRING STRING STRING
//JSON names require double quotes "". JavaScript names don't.
//For AJAX(Asyncronous Javascript and XML) applications, JSON is faster and easier than XML:
const user = {
  firstName: "Chris",
  lastName: "Holder",
  uid: 8819033416,
  status: "Graduated",
};
const product = {
  name: "ps4",
  price: 299.99,
};
const sale = { product, sale: true };
console.log(sale);

//converting to JSON w/ .stringify
let user__json = JSON.stringify(user);
console.log(user__json);

//converting JSON to a JS object w/ .parse
let user__bc = JSON.parse(user__json);
console.log(user__bc);

//This is how you apply to webpage;
var firstName = document.getElementById("fname");
firstName.innerText = user.firstName;
var lastName = document.getElementById("lname");
lastName.innerText = user.lastName;
var uid = document.getElementById("uid");
uid.innerText = user.uid;
var status = $("status");
status.innerText = user.status;

//Storing Data in localStorage
localStorage.setItem("testJSON", user__json);

//Retrieving Data from localStorage
let text = localStorage.getItem("testJSON"); //retrieves user__json
let obj = JSON.parse(text);
//Then use i.e
document.getElementById("uid").innerText = user.uid;
