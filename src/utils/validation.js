const validateInput = (userInput) =>
  userInput === "" ? "This field cannot be empty" : true;

module.exports = { validateInput };
