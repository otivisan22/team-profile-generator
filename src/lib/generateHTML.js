const fs = require("fs");

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
  return renderMarkdown(HTML.join(""));
};
