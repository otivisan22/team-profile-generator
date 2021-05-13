const fs = require("fs");
const path = require("path");
const teamprofileDir = path.resolve(__dirname, "./teamprofile");

const generateHTML = (employees) => {
  const HTML = [];
  HTML.push(
    employees
      .filter((employee) => employee.getRole() === "manager")
      .map((manager) => renderManager(manager))
  );

  HTML.push(
    employees
      .filter((engineer) => engineer.getRole() === "engineer")
      .map((engineer) => renderEngineer(engineer))
  );

  HTML.push(
    employees
      .filter((intern) => intern.getRole() === "intern")
      .map((intern) => renderIntern(intern))
  );
  return renderTeamProfile(HTML.join(""));
};

const renderManager = (manager) => {
  let teamProfile = fs.readFileSync(
    path.resolve(teamprofileDir, "teamprofile-html")
  );
  teamProfile = replaceTeamprofile(teamprofile, "name", manager.getName());
  teamProfile = replaceTeamprofile(teamprofile, "id", manager.getId());
  teamProfile = replaceTeamprofile(teamprofile, "email", manager.getEmail());
  teamProfile = replaceTeamprofile(teamprofile, "role", manager.getRole());
  teamProfile = replaceTeamprofile(
    teamprofile,
    "officeNumber",
    manager.officeNumber()
  );
  return teamprofile;
};

const renderEngineer = (engineer) => {
  let teamProfile = fs.readFileSync(
    path.resolve(teamprofileDir, "teamprofile-html")
  );
  teamProfile = replaceTeamprofile(teamprofile, "name", engineer.getName());
  teamProfile = replaceTeamprofile(teamprofile, "id", engineer.getId());
  teamProfile = replaceTeamprofile(teamprofile, "email", engineer.getEmail());
  teamProfile = replaceTeamprofile(teamprofile, "role", engineer.getRole());
  teamProfile = replaceTeamprofile(teamprofile, "github", engineer.getGithub());
  return teamprofile;
};

const renderIntern = (intern) => {
  let teamProfile = fs.readFileSync(
    path.resolve(teamprofileDir, "teamprofile-html")
  );
  teamProfile = replaceTeamprofile(teamprofile, "name", intern.getName());
  teamProfile = replaceTeamprofile(teamprofile, "id", intern.getId());
  teamProfile = replaceTeamprofile(teamprofile, "email", intern.getEmail());
  teamProfile = replaceTeamprofile(teamprofile, "role", intern.getRole());
  teamProfile = replaceTeamprofile(teamprofile, "school", engineer.getSchool());
  return teamprofile;
};

const replaceTeamprofile = (teamprofile, placeholder, value) => {
  const pattern = new RegExp(`{{${placeholder}}}`, "gm");
  return teamprofile.replace(pattern, value);
};

module.export = generateHTML;
