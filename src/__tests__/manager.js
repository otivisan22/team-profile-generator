const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("constructor tests", () => {
    test("should construct manager object with name, id, email, github,school,role and officeNumber", () => {
      const manager= new Manager(
        "Sam",
        222,
        "sam22@gmail.com",
        "https://github.com/samken22",
        "Stavanger"
        "2222222"
      );
      expect(intern).toEqual({
        role: "Intern",
        name: "Sam",
        id: 222,
        email: "sam22@gmail.com",
        github: "https://github.com/samken22",
        school: "Stavanger",
        officeNumber: "2222222"
      });
    });
  });

  describe("method tests", () => {
    test("should return role when getRole is called", () => {
      const manager = new Manager(
        "Sam",
        222,
        "sam22@gmail.com",
        "https://github.com/samken22",
        "Stavanger"
        "2222222"
      );
      expect(manager.getRole()).toEqual("Manager");
    });
  });

  test("should return officeNumber when getOfficeNumber is called", () => {
    const intern = new Intern(
      "Sam",
      222,
      "sam22@gmail.com",
      "https://github.com/samken22",
      "Stavanger"
      "2222222"
    );
    expect(intern.getOfficeNumber()).toEqual("2222222");
  });
});