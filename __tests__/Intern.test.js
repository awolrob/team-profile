const Intern = require('../lib/Intern.js');

const clsIntern = new Intern('Dave', "CWRU");
clsIntern.id = 1;
clsIntern.email = "awolrob@gmail.com";

test('creates a Intern object', () => {

  expect(clsIntern.name).toBe('Dave');
  expect(clsIntern.id).toEqual(expect.any(Number));
  expect(clsIntern.email).toEqual(expect.any(String));
  expect(clsIntern.role).toEqual("Intern");
});

test("Test Get Name", () => {
    expect(clsIntern.getName()).toEqual("Dave");
});

test("Test Get ID - number", () => {
    expect(clsIntern.getId()).toEqual(expect.any(Number));
    expect(clsIntern.getId()).toEqual(1);
});

test("Test Get email", () => {
    expect(clsIntern.getEmail()).toEqual(expect.any(String));
    expect(clsIntern.getEmail()).toEqual("awolrob@gmail.com");
});

test("Test Get role equal to Intern", () => {
    expect(clsIntern.getRole()).toEqual("Intern");
});

test("Test Get Intern Github", () => {
    expect(clsIntern.getSchool()).toEqual("CWRU");
});