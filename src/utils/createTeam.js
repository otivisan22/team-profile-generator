const inquirer = require("inquirer");

const addEngineer = require("./addEngineer");
const addIntern = require("./addIntern");

const createTeam = async () => {
  let isTeamComplete = false;
  const team = [];

  while (!isTeamComplete) {
    const questions = [
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

    const { employeeType } = await inquirer.prompt(questions);

    if (employeeType === "none") {
      isTeamComplete = true;
    } else {
      if (employeeType === "engineer") {
        const engineer = await addEngineer();
        team.push(engineer);
      }
      if (employeeType === "intern") {
        const intern = await addIntern();
        team.push(intern);
      }
    }
  }

  return team;
};

module.exports = createTeam;
