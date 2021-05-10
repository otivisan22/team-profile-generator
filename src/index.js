//Include packages needed for this application
const manager = require("./lib/classes/manager");
const engineer = require("./lib/classes/engineer");
const intern = require("./lib/classes/intern");
const inquirer = require("inquirer");

//Questions

const questions = [
  {
    type: "input",
    name: "name",
    message: "What's the name of your employee?",
  },

  {
    type: "input",
    name: "id",
    message: "What's the id of your employee?",
  },

  {
    type: "input",
    name: "email",
    message: "What's the email address of your employee?",
  },

  {
    type: "input",
    name: "list",
    message: "What's the role of your employee?",
    choices: ["manager", "intern", "engineer"],
  },
];
