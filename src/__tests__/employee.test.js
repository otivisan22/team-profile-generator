const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("constructor tests", () => {
    test("should instantiate a new Employee object", () => {
      const employee = new Employee();
      expect(employee).toBeInstanceOf(Employee);
    });

    test("should construct employee object with name, id and email", () => {
      const employee = new Employee("Sam", 222, "sam22@gmail.com");
      expect(employee).toEqual({
        role: "Employee",
        name: "Sam",
        id: 222,
        email: "sam22@gmail.com",
      });
    });
  });

  describe("method tests", () => {
    test("should return name when getName is called", () => {
      const employee = new Employee("Sam", 222, "sam22@gmail.com");
      expect(employee.getName()).toEqual("Sam");
    });

    test("should return id when getId is called", () => {
      const employee = new Employee("Sam", 222, "sam22@gmail.com");
      expect(employee.getId()).toEqual(222);
    });

    test("should return email when getEmail is called", () => {
      const employee = new Employee("Sam", 222, "sam22@gmail.com");
      expect(employee.getEmail()).toEqual("sam22@gmail.com");
    });

    test("should return role when getRole is called", () => {
      const employee = new Employee("Sam", 222, "sam22@gmail.com");
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
