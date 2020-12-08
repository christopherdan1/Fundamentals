function names() {
  var USA = "Chris Sasem";
  var Canada = "Maple Sapnut";
  var Japan = "Shigui Takayoshi";
}

const ApexHighscores = {
  USA: {
    name: "Chris Sasem",
    damage: 4701,
    kills: 34,
  },
  Canada: {
    name: "Maple Sapnut",
    damage: 4510,
    kills: 33,
  },
  Japan: {
    name: "Shigui Takayoshi",
    damage: 4994,
    kills: 35,
  },
};

console.group("Apex Legends high scores");
console.table(ApexHighscores);
console.groupEnd();
