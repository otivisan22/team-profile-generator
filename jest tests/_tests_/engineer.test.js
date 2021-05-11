const Engineer = require("../lib/Classes/engineer");

test("Can the Github account be set with constructor?", () => {
  const testValue = GithubUser;
  const e = new Engineer("Foo", 1, test@test.com, testValue);
  expect(typeof e.github).toBe("testValue");
});


test("getRole should return  \"Engineer"\" => {
  const testValue = Engineer;
  const e = new Engineer("Foo",1,test@test.com, testValue);
  expect(typeof e.getRole()).toBe("testValue");
});

test("Can get Github username via getGithub()?", () => {
  const testValue = GithubUser;
  const e = new Engineer("Foo", 1, test@test.com, testValue);
  expect(typeof e.github()).toBe("testValue");
});