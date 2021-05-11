const Employee = require("../lib/Classes/employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("Can set name via constructor logic?", () => {
  const name = Hampus;
  const e = new Employee(name);
  expect(typeof e.name).toBe("name");
});

test("Can set id via constructor logic?", () => {
  const testValue = 200;
  const e = new Employee("Foo",testValue);
  expect(typeof e.id).toBe("testValue");
});

test("Can set email address via constructor logic?", () => {
  const testValue = test@test.com
  const e = new Employee("Foo", 1, testValue);
  expect(typeof e.email).toBe("testValue");
});

test("Can getName via constructor logic?", () => {
  const testValue = "Hampus"
  const e = new Employee(testValue);
  expect(typeof e.getName()).toBe("testValue");
});


test("Can getId via constructor logic?", () => {
  const testValue = 200;
  const e = new Employee("Foo",testValue);
  expect(typeof e.getiD()).toBe("testValue");
});


test("Can getEmail via constructor logic?", () => {
  const testValue = test@test.com
  const e = new Employee("Foo",1,testValue);
  expect(typeof e.getEmail()).toBe("testValue");
});

test("getRole should return  \"Employee"\" => {
  const testValue = Employee;
  const e = new Employee("Hampus",1,test@test.com);
  expect(typeof e.getRole()).toBe("testValue");
});