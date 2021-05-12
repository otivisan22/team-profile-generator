const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("constructor tests", () => {
    test("should construct engineer object with with name, id, email, github account and role", () => {
      const engineer = new Engineer(
        "Sam",
        222,
        "sam22@gmail.com",
        "https://github.com/samken22"
      );
      expect(engineer).toEqual({
        role: "Engineer",
        name: "Sam",
        id: 222,
        email: "sam22@gmail.com",
        github: "https://github.com/samken22",
      });
    });
  });
  describe("method tests", () => {
    test("should return role when getRole is called", () => {
      const engineer = new Engineer(
        "Sam",
        222,
        "sam22@gmail.com",
        "https://github.com/samken22"
      );

      expect(engineer.getRole()).toEqual("Engineer");
    });
    test("should return github when getGithub is called", () => {
      const engineer = new Engineer(
        "Sam",
        222,
        "sam22@gmail.com",
        "https://github.com/samken22"
      );

      expect(engineer.getGithub()).toEqual("https://github.com/samken22");
    });
  });
});
