const Engineer = require('../lib/Engineer.js');

const clsEngineer = new Engineer('Dave', "AWOLRob");
clsEngineer.id = 1;
clsEngineer.email = "awolrob@gmail.com";

test('creates a Engineer object', () => {

  expect(clsEngineer.name).toBe('Dave');
  expect(clsEngineer.id).toEqual(expect.any(Number));
  expect(clsEngineer.email).toEqual(expect.any(String));
  expect(clsEngineer.role).toEqual("Engineer");
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