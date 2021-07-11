const Manager = require('../lib/Manager');

describe("Employee", () => {
    describe("Initialization", () => {
        // Test for creation of new object if Name, ID, Email, and Role are provided //
        it("should create an object with a Name, ID, Email, OfficeNumber, and Role if provided valid arguments", () => {
            const manager = new Manager("Bob", "727", "bob@email.com", "36", "Manager");
  
            // Verify that the new object has the correct properties
            expect(manager.name).toEqual("Bob");
            expect(manager.id).toEqual("727");
            expect(manager.email).toEqual("bob@email.com");
            expect(manager.getOfficeNumber()).toEqual("36");
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});