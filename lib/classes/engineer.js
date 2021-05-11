const Employee = require("./employee");

class Engineer extends class Employee {
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