const inquirer = require("inquirer");

const Intern = require("../lib/intern");
const { validateInput } = require("./validation");

const addIntern = async () => {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "Please enter the intern name",
      validate: validateInput,
    },

    {
      type: "input",
      name: "id",
      message: "Please enter the intern id",
      validate: validateInput,
    },

    {
      type: "input",
      name: "email",
      message: "Please enter the intern email address",
      validate: validateInput,
    },

    {
      type: "input",
      name: "school",
      message: "Please enter the intern school name",
      validate: validateInput,
    },
  ];

  const { name, id, email, school } = await inquirer.prompt(questions);

  const intern = new Intern(name, id, email, school);

  return intern;
};

module.exports = addIntern;
