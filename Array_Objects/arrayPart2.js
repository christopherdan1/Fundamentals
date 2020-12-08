let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
let myArray = myData.split(",");
console.log(myArray);

//add to the beginning
myArray.unshift("Edinburgh");
console.log(myArray);
//remove from beginning
let removedItem = myArray.shift(); // save the item and removes

console.log(removedItem);
console.log(myArray);
