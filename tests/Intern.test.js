const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
        // Test for creation of new object if Name, ID, Email, and School are provided //
        it("should create an object with a Name, ID, Email, and School if provided valid arguments", () => {
            const intern = new Intern("Hope", "825", "hope@email.com", "Online");

            // test getSchool function
            expect(intern.getSchool()).toEqual("Online");

            // test getRole function
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});