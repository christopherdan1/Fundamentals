


this.table = "Window table"; //global

this.garage = {
  table: "Garage table",
  cleanTable() {
    console.log(`Cleaning ${this.table}`);
  },
};

let chrisRoom = {
  table: "Chris' table",
  cleanTable() {
    console.log(`Cleaning ${this.table}`);
  },
};

//console.log(this.table);
//console.log(this.garage);
//console.log(chrisRoom.table);

//this inside a METHOD
/*this.garage = {
  table: "Garage table",
  cleanTable() {
    console.log(`Cleaning ${this.table}`);
  },
};

let chrisRoom = {
  table: "Chris' table",
  cleanTable() {
    console.log(`Cleaning ${this.table}`);
  },
};
console.log("this inside a METHOD")
this.garage.cleanTable(); //Cleaning Garage table
chrisRoom.cleanTable(); //Cleaning Chris' table
*/

//this inside a FUNCTION
const cleanTable = function (soap) {
  const innerFunction = (soap) => {
    console.log(`cleaning ${this.table} using ${soap}`);
  };
  innerFunction(soap);
};
//cleanTable(); //should never do it this way instead use call function

//call function
console.log("[this inside a FUNCTION]");
cleanTable.call(this, "some soap");
cleanTable.call(this.garage, "some soap");
cleanTable.call(chrisRoom, "some soap..");

//inner function
const ex_cleanTable = function (soap) {
  const innerFunction = (soap) => {
    console.log(`cleaning ${this.table} using ${soap}`);
  };
  innerFunction(soap);
};

// this inside a constructor
console.log("[this inside a CONSTRUCTOR]");
class createRoom {
  constructor(name) {
    this.table = `${name}s room`;
  }
  cleanTable(soap) {
    console.log(`cleaning ${this.table} using ${soap}`);
  }
}
const joesRoom = new createRoom("Joe");
const BaylaRoom = new createRoom("Bayla");

joesRoom.cleanTable("some soap");
BaylaRoom.cleanTable("some clorax...");
