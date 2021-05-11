const Intern = require("../lib/classes/intern");

test("Can the school be defined with constructor?", () => {
  const testValue = "Stavanger School";
  const e = new Intern("Foo", 1, test@test.com, testValue);
  expect(typeof e.school).toBe("testValue");
});

test("getRole should return  \"Intern"\" => {
  const testValue = Intern;
  const e = new Intern("Foo",1,test@test.com,"Stavanger School");
  expect(typeof e.getRole()).toBe("testValue");
});

test("Can get school username via getSchool()?", () => {
  const testValue = "Stavanger School";
  const e = new Intern("Foo", 1, test@test.com, testValue);
  expect(typeof e.getSchool()).toBe("testValue");
});