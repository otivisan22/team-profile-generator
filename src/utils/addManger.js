const inquirer = require("inquirer");

const Manager = require("../lib/manager");
const { validateInput } = require("./validation");

const addManager = async () => {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "Please enter the manager name",
      validate: validateInput,
    },
    {
      type: "input",
      name: "id",
      message: "What's the id of your employee?",
      validate: validateInput,
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter your office number",
      validate: validateInput,
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your work email",
      validate: validateInput,
    },
  ];

  const { name, id, officeNumber, email } = await inquirer.prompt(questions);

  const manager = new Manager(name, id, email, officeNumber);

  return manager;
};

module.exports = addManager;
