const Manager = require('../lib/Manager.js');

const clsManager = new Manager('Dave', "+1 555-555-5555");
clsManager.id = 1;
clsManager.email = "awolrob@gmail.com";

test('creates a Manager object', () => {

  expect(clsManager.name).toBe('Dave');
  expect(clsManager.id).toEqual(expect.any(Number));
  expect(clsManager.email).toEqual(expect.any(String));
  expect(clsManager.role).toEqual("Manager");
  expect(clsManager.officeNumber).toEqual("+1 555-555-5555");
});

test("Test Get Name", () => {
    expect(clsManager.getName()).toEqual("Dave");
});

test("Test Get ID - number", () => {
    expect(clsManager.getId()).toEqual(expect.any(Number));
    expect(clsManager.getId()).toEqual(1);
});

test("Test Get email", () => {
    expect(clsManager.getEmail()).toEqual(expect.any(String));
    expect(clsManager.getEmail()).toEqual("awolrob@gmail.com");
});

test("Test Get role equal to Manager", () => {
    expect(clsManager.getRole()).toEqual("Manager");
});