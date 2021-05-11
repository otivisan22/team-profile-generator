const Employee = require("./employee");

class Employee extends class Engineer {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
    this.role = Engineer;

  }
};

getGithub() {
  return this.github;
}

module.exports = Engineer;