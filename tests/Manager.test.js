const Manager = require('../lib/Manager');

describe("Employee", () => {
    describe("Initialization", () => {
        // Test for creation of new object if Name, ID, and Email, are provided //
        it("should create an object with a Name, ID, Email, and OfficeNumber if provided valid arguments", () => {
            const manager = new Manager("Bob", "727", "bob@email.com", "36", "Manager");

            // test getOfficeNumber function
            expect(manager.getOfficeNumber()).toEqual("36");
            
            // test getRole function
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});