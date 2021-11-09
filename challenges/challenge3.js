const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },

  getSummary: function () {
    return `${this.fullName} BMI (${this.calcBMI()}) is ${
      this.calcBMI() > john.calcBMI() ? "higherthan" : "lessthan"
    } ${john.fullName} BMI (${john.calcBMI()})!`;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },

  getSummary: function () {
    return `${this.fullName} BMI (${this.calcBMI()}) is ${
      this.calcBMI() > mark.calcBMI() ? "higherthan" : "lessthan"
    } ${mark.fullName} BMI (${mark.calcBMI()})!`;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(john.getSummary());
console.log(mark.getSummary());

// console.log(
//   `${john.fullName} BMI ${john.calcBMI()} is ${
//     john.calcBMI() > mark.calcBMI() ? "higherthan" : "lessthan"
//   } ${mark.fullName} BMI ${mark.calcBMI()}`
// );
