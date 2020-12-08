("map | reduce | filter | some "); //https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

("map: takes 1 argument ");
const emp = [
  { id: 741, fname: "Chris" },
  { id: 123, fname: "Phil" },
  { id: 321, fname: "Flavia" },
];

const empId = emp.map((emp) => emp.fname); //emp arg can be anything ~ this
console.log("Map: " + empId);

const officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];
const officersIds = officers.map((x) => x.id); //will outprint [20,24,56,88]
console.info("Map 2: " + officersIds);

("reduce: takes 2 arg with an (accumulator) and (array.element) ~ combine(with Math operator");
var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  },
];

var totalYears = pilots.reduce((accumulator, pilot) => {
  return accumulator + pilot.years;
}, 0); //0 is the starting value of accumulator
console.info("Reduce: " + totalYears); //82

("filter:: like it sounds it filters the list ");
var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  },
];
const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");
const empire = pilots.filter((pilot) => pilot.faction === "Empire");
console.log("Filter: ", rebels, empire);

("Combining map, filter, and reduce");
const personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

const totalJediScore = personnel.reduce(
  (acc, person) =>
    person.isForceUser
      ? acc + person.pilotingScore + person.shootingScore
      : acc,
  0
);
console.log("Reduce, Map, and Filter: " + totalJediScore);
