const Engineer = require("./engineer");
const Intern = require("./intern");

const renderManager = (manager) => {
  return ` <div
  class="card m-2 shadow mb-5 bg-body rounded"
  style="width: 20rem; background-color: #ffffff !important"
>
  <div
  class="card-header text-center text-light"
  style="background-color: #3ebaf3"
>
  <i class="fas fa-user-alt fa-2x pt-2"></i>
  <h3 class="p-2">Manager</h3>
</div>
<div class="card-body">
  <h4 class="card-title text-center pb-3 pt-2">${manager.name}</h4>
  <ul class="list-group mx-3 mb-3">
    <li class="list-group-item fw-bold">
      Employee ID: <span class="fw-normal">${manager.id}</span>
    </li>
    <li class="list-group-item fw-bold">
      Office Number: <span class="fw-normal">${manager.officeNumber}</span>
    </li>
    <li class="list-group-item fw-bold">
      Email:
      <span class="fw-normal"
        ><a href="mailto:${manager.email}">${manager.email}</a></span
      >
    </li>
  </ul>
</div>
</div>
`;
};

const renderEngineer = (engineer) => {
  return `<div
  class="card m-2 shadow mb-5 bg-body rounded"
  style="width: 20rem; background-color: #ffffff !important"
>
   <div
  class="card-header text-center text-light"
  style="background-color: #db4d4d"
>
  <i class="fas fa-laptop-code fa-2x pt-2"></i>
  <h3 class="p-2">Engineer</h3>
</div>
<div class="card-body">
  <h4 class="card-title text-center pb-3 pt-2">${engineer.name}</h4>
  <ul class="list-group mx-3 mb-3">
    <li class="list-group-item fw-bold">
      Employee ID: <span class="fw-normal">${engineer.id}</span>
    </li>
    <li class="list-group-item fw-bold">
      GitHub:
      <span class="fw-normal"
        ><a href="https://www.github.com/${engineer.github}">${engineer.github}</a></span
      >
    </li>
    <li class="list-group-item fw-bold">
      Email:
      <span class="fw-normal"
        ><a href="mailto: ${engineer.email}">${engineer.email}</a></span
      >
    </li>
  </ul>
</div>
</div>
`;
};

const renderIntern = (intern) => {
  return `<div
  class="card m-2 shadow mb-5 bg-body rounded"
  style="width: 20rem; background-color: #ffffff !important"
>
  <div
    class="card-header text-center text-light"
    style="background-color: #f00e8a"
  >
    <i class="fas fa-user-graduate fa-2x pt-2"></i>
    <h3 class="p-2">Intern</h3>
  </div>
  <div class="card-body">
    <h4 class="card-title text-center pb-3 pt-2">${intern.name}</h4>
    <ul class="list-group mx-3 mb-3">
      <li class="list-group-item fw-bold">
        Employee ID: <span class="fw-normal">${intern.id}</span>
      </li>
      <li class="list-group-item fw-bold">
        School: <span class="fw-normal">${intern.school}</span>
      </li>
      <li class="list-group-item fw-bold">
        Email:
        <span class="fw-normal"
          ><a href="mailto: ${intern.email}">${intern.email}</a></span
        >
      </li>
    </ul>
  </div>
</div>
</div>`;
};

const generateHTML = (data) => {
  pageArray = [];
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = renderManager(employee);
      pageArray.push(managerCard);
    }

    if (role === "Engineer") {
      const engineerCard = renderEngineer(employee);
      pageArray.push(engineerCard);
    }

    if (role === "Intern") {
      const internCard = renderIntern(employee);
      pageArray.push(internCard);
    }
  }

  const employeeCards = pageArray.join("");
  const renderTeam = renderTeamPage(employeeCards);
  return renderTeam;
};

const renderTeamPage = (employeeCards) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Team Profile</title>
  <script
    src="https://kit.fontawesome.com/ae0443040c.js"
    crossorigin="anonymous"
  ></script>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
    crossorigin="anonymous"
  />
</head>
<body>
  <header
    class="text-center p-4"
    style="background-color: #2848d8 !important"
  >
    <h1><i class="fas fa-users px-4"></i></h1>
  </header>
  <div class="d-flex justify-content-around flex-wrap mt-5 m-3">
  ${employeeCards}
  </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;
};

module.exports = generateHTML;
