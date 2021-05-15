//Include packages needed for this application
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./lib/generateHTML");

const employees = [];
let isTeam = false;

const validateInput = (userInput) => {
  if (userInput === "") {
    return "the type of answer";
  } else {
    return true;
  }
};

const addManager = async () => {
  const managerQuestions = [
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

  const { name, id, officeNumber, email } = await inquirer.prompt(
    managerQuestions
  );

  const manager = new Manager(name, id, email, officeNumber);
  employees.push(manager);
};

const addEngineer = async () => {
  const engineerQuestions = [
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
  const { name, id, email, github } = await inquirer.prompt(engineerQuestions);
  const engineer = new Engineer(name, id, email, github);
  employees.push(engineer);
};

const addIntern = async () => {
  const internQuestions = [
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

  const { name, id, email, school } = await inquirer.prompt(internQuestions);
  const intern = new Intern(name, id, email, school);
  employees.push(intern);
};

const init = async () => {
  await addManager();
  await addEngineer();
  await addIntern();
  while (!isTeam) {
    const employeeQuestions = [
      {
        type: "list",
        name: "employeeType",
        message: "What type of employee needs to be added?",
        choices: [
          { name: "Engineer", value: "engineer", short: "Engineer" },
          { name: "Intern", value: "intern", short: "Intern" },
          { name: "None", value: "none", short: "None" },
        ],
      },
    ];
    const { employeeType } = await inquirer.prompt(employeeQuestions);
    if (employeeType === "none") {
      isTeam = true;
      console.log(employees);
    } else {
      if (employeeType === "engineer") await addEngineer();
    }
    if (employeeType === "intern") {
      await addIntern();
    }
  }
};

//function to generate HTML

const writeToFile = (data) => {
  const callback = (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Generated Team Profile successfully");
    }
  };

  fs.writeFile("./dist/index.html", data, callback);

  writeToFile(generateHTML);
};

init();
