const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
        // Test for creation of new object if Name, ID, Email, School, and Role are provided //
        it("should create an object with a Name, ID, Email, School, and Role if provided valid arguments", () => {
            const intern = new Intern("Hope", "825", "hope@email.com", "Online", "Intern");
  
            // Verify that the new object has the correct properties
            expect(intern.name).toEqual("Hope");
            expect(intern.id).toEqual("825");
            expect(intern.email).toEqual("hope@email.com");
            expect(intern.getSchool()).toEqual("Online");
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});