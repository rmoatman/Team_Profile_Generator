const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        // Test for creation of new object if Name, ID, Email, and Role are provided //
        it("should create an object with a Name, ID, Email, and Role if provided valid arguments", () => {
            const employee = new Employee("Curt", "422", "curt@email.com", "Employee");
  
            // Verify that the new object has the correct properties
            expect(employee.getName()).toEqual("Curt");
            expect(employee.getId()).toEqual("422");
            expect(employee.getEmail()).toEqual("curt@email.com");
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});