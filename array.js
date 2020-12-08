//How to empty an Array?
arrayList = []; //will set the varibale arrayList to an new empty array
arrayList.length = 0; // will clear the array by setting it's length to zero
arrayList.splice(0, arrayList.length); //will update all the references to the original array
while (arrayList.length) {
  arrayList.pop();
} //not recommended

//Everything you need to know about arrays

//create
let shopping = [
  "Harris Teeter",
  {
    milk: 1,
    cereal: 2,
    icecream: 1,
  },
];
shopping[0] = "stores";
console.log(shopping);

let sequence = [1, 2, 3, 4, 5];
let random = ["ps5", 26, [0, 1, 2]];

//split(separate) a string by a "comma""
let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
let myArray = myData.split(",");
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[myArray.length - 1]);

//combine values separated by a comman into a string
let myNewString = myArray.join(" , ");
console.log(myNewString);

let Console = ["gamecube", "wii", "ps3", "ps4"];
Console.toString();
console.log(Console);

//adding and removing items  push and pop
Console.push("ps5");
console.log(Console);

Console.pop();
console.log(Console);

let removedItem = myArray.pop();
console.log(myArray);
console.log(removedItem);
