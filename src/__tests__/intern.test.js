const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("constructor tests", () => {
    test("should construct intern object with name, id, email,school and role", () => {
      const intern = new Intern("Sam", 222, "sam22@gmail.com", "Stavanger");
      expect(intern).toEqual({
        role: "Intern",
        name: "Sam",
        id: 222,
        email: "sam22@gmail.com",
        school: "Stavanger",
      });
    });
  });

  describe("method tests", () => {
    test("should return role when getRole is called", () => {
      const intern = new Intern("Sam", 222, "sam22@gmail.com", "Stavanger");
      expect(intern.getRole()).toEqual("Intern");
    });
  });
  test("should return school when getSchool is called", () => {
    const intern = new Intern("Sam", 222, "sam22@gmail.com", "Stavanger");
    expect(intern.getSchool()).toEqual("Stavanger");
  });
});
