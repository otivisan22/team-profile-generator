const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const renderManagerCard = (manager) => {
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
      Employee ID: <span class="fw-normal">${manager.employeeID}</span>
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
<div>
`;
};

const renderEngineerCard = (teamMember) => {
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
  <h4 class="card-title text-center pb-3 pt-2">${teamMember.name}</h4>
  <ul class="list-group mx-3 mb-3">
    <li class="list-group-item fw-bold">
      Employee ID: <span class="fw-normal">${teamMember.employeeID}</span>
    </li>
    <li class="list-group-item fw-bold">
      GitHub:
      <span class="fw-normal"
        ><a href="https://www.github.com/${teamMember.github}">${teamMember.github}</a></span
      >
    </li>
    <li class="list-group-item fw-bold">
      Email:
      <span class="fw-normal"
        ><a href="mailto: ${teamMember.email}">${teamMember.email}</a></span
      >
    </li>
  </ul>
</div>
</div>
<div>`;
};

const renderInternCard = (teamMember) => {
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
    <h4 class="card-title text-center pb-3 pt-2">${teamMember.name}</h4>
    <ul class="list-group mx-3 mb-3">
      <li class="list-group-item fw-bold">
        Employee ID: <span class="fw-normal">${teamMember.id}</span>
      </li>
      <li class="list-group-item fw-bold">
        School: <span class="fw-normal">${teamMember.school}</span>
      </li>
      <li class="list-group-item fw-bold">
        Email:
        <span class="fw-normal"
          ><a href="mailto: ${teamMember.email}">${teamMember.email}</a></span
        >
      </li>
    </ul>
  </div>
</div>
</div>`;
};

const generateHTML = (manager, teamMembers, teamName) => {
  const managerCard = renderManagerCard(manager);

  const renderCard = teamMember;
  if (teamMember instanceof Engineer) {
    return renderEngineerCard(teamMember);
  }

  if (teamMember instanceof Intern) {
    return renderInternCard(teamMember);
  }
};

const teamCards = teamMembers.map(renderCard);
cardString = managerCard + teamCards.join("");

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
    <h1><i class="fas fa-users px-4"></i>${teamName}</h1>
  </header>
  <div class="d-flex justify-content-around flex-wrap mt-5 m-3">

  ${cardString}

  </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;

module.exports = generateHTML;
