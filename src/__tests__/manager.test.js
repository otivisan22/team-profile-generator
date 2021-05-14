const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("constructor tests", () => {
    test("should construct manager object with name, id, email,role and officeNumber", () => {
      const manager = new Manager("Sam", 222, "sam22@gmail.com", "2222222");
      expect(manager).toEqual({
        role: "Manager",
        name: "Sam",
        id: 222,
        email: "sam22@gmail.com",
        officeNumber: "2222222",
      });
    });
  });

  describe("method tests", () => {
    test("should return role when getRole is called", () => {
      const manager = new Manager("Sam", 222, "sam22@gmail.com", "2222222");
      expect(manager.getRole()).toEqual("Manager");
    });
  });

  test("should return officeNumber when getOfficeNumber is called", () => {
    const manager = new Manager("Sam", 222, "sam22@gmail.com", "2222222");
    expect(manager.getOfficeNumber()).toEqual("2222222");
  });
});
