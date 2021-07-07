const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        // Test for creation of new object if Name, ID, Email, and Role are provided //
        it("should create an object with a Name, ID, Email, and Role if provided valid arguments", () => {
            const employee = new Employee("Bob", 727, "bob@email.com", "Manager");
  
            // Verify that the new object has the correct properties
            expect(Employee.name).toEqual("Bob");
            expect(Employee.ID).toEqual(727);
            expect(Employee.email).toEqual("bob@email.com");
            expect(Employee.role).toEqual("Manager");
        });
    });
});