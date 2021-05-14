//Include packages needed for this application
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
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

  const managerAnswers = await inquirer.prompt(managerQuestion);
  const manager = new Manager(managerAnswers);
  employees.push(manager);
};

const addEngineer = async () => {
  const engineerQuestion = [
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
  const engineerAnswers = await inquirer.prompt(engineerQuestions);
  console.log(engineerAnswers);
  const engineer = new Engineer(engineerAnswers);
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

  const internAnswers = await inquirer.prompt(internQuestions);
  console.log(internAnswers);
  const intern = newIntern(internAnswers);
  employees.push(intern);
};

const init = async () => {
  await addManager();
  //Questions
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
    if (employeeType === none) {
      isTeam = true;
      console.log(employees);
    } else {
      if (employeeType === engineer) await addEngineer();
    }
    if (employeeType === intern) {
      await addIntern();
    }
    //create generateHTML function
    const HTML = generateHTML(employees);
    fs.writeFileSync("teamprofile.html", HTML, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("HTML file created");
      }
    });
  }
};

init();
