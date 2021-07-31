const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, school) {
    super(name);

    this.role = "Intern";
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;