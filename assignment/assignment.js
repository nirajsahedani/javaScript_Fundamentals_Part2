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
