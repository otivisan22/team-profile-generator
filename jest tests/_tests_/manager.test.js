const Manager= require("../lib/classes/manager");

test("Can the officeNumber be defined via constructor?", () => {
  const testValue = "200";
  const e = new Manager("Foo", 1, test@test.com, testValue);
  expect(typeof e.officeNumber).toBe("testValue");
});

test("getRole should return  \"Manager"\" => {
  const testValue = Manager;
  const e = new Manager("Foo",1,test@test.com,"200");
  expect(typeof e.getRole()).toBe("testValue");
});

test("Can get officeNumber via getOffice()?", () => {
  const testValue = "200";
  const e = new Manager("Foo", 1, test@test.com, testValue);
  expect(typeof e.getOfficeNumber()).toBe("testValue");
});
