function describeCountry(country, population, capitalCity) {
  const details = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
  return details;
}

const details1 = describeCountry("India", 130, "delhi");
console.log(details1);

const details2 = describeCountry("America", 30, "XYZ");
console.log(details2);

const details3 = describeCountry("Canada", 3, "ABC");
console.log(details3);

//Assignment-2
console.log("-------Assignment-2--------");
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const chinaPopulation = percentageOfWorld1(1441);
const indiaPopulation = percentageOfWorld1(1231);
const canadaPopulation = percentageOfWorld1(186);

console.log(chinaPopulation, indiaPopulation, canadaPopulation);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const chinaPopulation2 = percentageOfWorld2(1441);
const indiaPopulation2 = percentageOfWorld2(1231);
const canadaPopulation2 = percentageOfWorld2(186);

console.log(chinaPopulation2, indiaPopulation2, canadaPopulation2);

//Assignment-3
console.log("-------Assignment-3--------");

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const chinaPopulation3 = percentageOfWorld3(1441);
const indiaPopulation3 = percentageOfWorld3(1231);
const canadaPopulation3 = percentageOfWorld3(186);

console.log(chinaPopulation3, indiaPopulation3, canadaPopulation3);

//Assignment-4
console.log("-------Assignment-4--------");

function describePopulation(country, population) {
  const countPopulation = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${countPopulation}% of the world.`;
}

const chinaPopulation4 = describePopulation("china", 1441);
const indiaPopulation4 = describePopulation("india", 1231);
const canadaPopulation4 = describePopulation("canada", 186);

console.log(chinaPopulation4);
console.log(indiaPopulation4);
console.log(canadaPopulation4);

//Assignment-5
console.log("-------Assignment-5--------");

const populations = [1441, 1231, 186, 1025];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

//Assignment-6
console.log("-------Assignment-6--------");

const neighbours = ["India", "China", "pakistan"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

neighbours[2] = "America";
console.log(neighbours);

//Assignment-7 and 9
console.log("-------Assignment-7--------");

const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 130,
  neighbours: ["India", "China", "pakistan"],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland;
  },
};
console.log(myCountry);

//Assignment-8
console.log("-------Assignment-8--------");

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

//Assignment-9
console.log("-------Assignment-9--------");
console.log(myCountry.describe());
console.log(myCountry.checkIsland());

//Assignment-10
console.log("-------Assignment-10--------");

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

//Assignment-11
console.log("-------Assignment-11--------");

let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  let per = percentageOfWorld1(populations[i]);
  percentages2.push(per);
}
console.log(percentages);
console.log(percentages2);

//Assignment-12
console.log("-------Assignment-12--------");

let listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour:${listOfNeighbours[i][j]}`);
  }
}

//Assignment-13
console.log("-------Assignment-13--------");

let percentages3 = [];
let i = 0;
while (i < populations.length) {
  let per = percentageOfWorld1(populations[i]);
  percentages3.push(per);
  i++;
}
console.log(percentages);
console.log(percentages3);
