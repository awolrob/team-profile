const Engineer = require('../lib/Engineer.js');

const clsEngineer = new Engineer('Dave', 1,"awolrob@gmail.com","AWOLRob");

test('creates a Engineer object', () => {

  expect(clsEngineer.name).toBe('Dave');
  expect(clsEngineer.id).toEqual(expect.any(Number));
  expect(clsEngineer.email).toEqual(expect.any(String));
  expect(clsEngineer.role).toEqual("Engineer");
  expect(clsEngineer.github).toEqual("AWOLRob");
});

test("Test Get Name", () => {
    expect(clsEngineer.getName()).toEqual("Dave");
});

test("Test Get ID - number", () => {
    expect(clsEngineer.getId()).toEqual(expect.any(Number));
    expect(clsEngineer.getId()).toEqual(1);
});

test("Test Get email", () => {
    expect(clsEngineer.getEmail()).toEqual(expect.any(String));
    expect(clsEngineer.getEmail()).toEqual("awolrob@gmail.com");
});

test("Test Get role equal to Engineer", () => {
    expect(clsEngineer.getRole()).toEqual("Engineer");
});

test("Test Get Engineer Github", () => {
    expect(clsEngineer.getGithub()).toEqual("AWOLRob");
});