const Manager= require("../../lib/classes/manager");

test("Can the officeNumber be defined via constructor?", () => {
  const testValue = "200";
  const e = new Manager("Foo", 1, test@test.com, testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo",1,test@test.com,"200");
  expect(e.getRole()).toBe(testValue);
});

test("Can get officeNumber via getOffice()?", () => {
  const testValue = "200";
  const e = new Manager("Foo", 1, test@test.com, testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
