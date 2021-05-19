const inquirer = require("inquirer");

const Engineer = require("../lib/engineer");
const { validateInput } = require("./validation");

const addEngineer = async () => {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "Please enter the engineer name",
      validate: validateInput,
    },

    {
      type: "input",
      name: "id",
      message: "Please enter the engineer id",
      validate: validateInput,
    },

    {
      type: "input",
      name: "email",
      message: "Please enter the engineer email",
      validate: validateInput,
    },

    {
      type: "input",
      name: "github",
      message: "Please enter the engineer github profile",
      validate: validateInput,
    },
  ];

  const { name, id, email, github } = await inquirer.prompt(questions);

  const engineer = new Engineer(name, id, email, github);

  return engineer;
};

module.exports = addEngineer;
