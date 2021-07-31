const Employee = require('../lib/Employee.js');

const clsEmployee = new Employee('Dave', 1, "awolrob@gmail.com");

test('creates an EMPLOYEE object', () => {
    expect(clsEmployee.name).toBe('Dave');
    expect(clsEmployee.id).toEqual(expect.any(Number));
    expect(clsEmployee.email).toEqual(expect.any(String));
    expect(clsEmployee.role).toEqual("Employee");
});

test("Test Get Name", () => {
    expect(clsEmployee.getName()).toEqual("Dave");
});

test("Test Get ID - number", () => {
    expect(clsEmployee.getId()).toEqual(expect.any(Number));
    expect(clsEmployee.getId()).toEqual(1);
});

test("Test Get email", () => {
    expect(clsEmployee.getEmail()).toEqual(expect.any(String));
    expect(clsEmployee.getEmail()).toEqual("awolrob@gmail.com");
});

test("Test Get role equal to Employee", () => {
    expect(clsEmployee.getRole()).toEqual("Employee");
});