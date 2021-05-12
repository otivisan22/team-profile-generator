//Include packages needed for this application
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const inquirer = require("inquirer");

//Questions

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What's the name of your employee?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please let me know the name of your employee");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "id",
      message: "What's the id of your employee?",
      validate: (nameId) => {
        if (nameId) {
          return true;
        } else {
          console.log("Please let me know the id of your employee");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "email",
      message: "What's the email address of your employee?",
      validate: (email) => {
        valid =
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
            email
          );
        if (valid) {
          return true;
        } else {
          console.log("Please enter your email address");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "list",
      message: "What's the role of your employee?",
      choices: ["manager", "intern", "engineer"],
    },
  ]);
};

// Manager question
const managerQuestion = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "officeNumber",
      message: "What's the manager office number?",
      validate: (nameInput) => {
        if (isNaN(nameInput)) {
          return false;
        } else {
          console.log("Please provide the office number");
          return true;
        }
      },
    },
  ]);
};

//Engineer question
const engineerQuestion = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What's the github user of the engineer office?",
      /* validate:  */
    },
  ]);
};

//Intern question
const internQuestion = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What's the school name of the intern?",
    },
  ]);
};

//In the case you need to add another employee
const anotherQuestion = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "name",
      message: "Would you like to add another employee?",
      choices: ["Yes", "No"],
    },
  ]);
};

//Create a function to blend together the data

//Create a function to initialize the app
