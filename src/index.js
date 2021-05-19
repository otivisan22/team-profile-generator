const addManager = require("./utils/addManger");
const createTeam = require("./utils/createTeam");
const generateHTML = require("./utils/generateHTML");
const writeToFile = require("./utils/writeToFile");

const init = async () => {
  const manager = await addManager();

  const team = await createTeam();

  const employees = [manager, ...team];

  const htmlMarkup = generateHTML(employees);

  writeToFile(htmlMarkup);
};

init();
