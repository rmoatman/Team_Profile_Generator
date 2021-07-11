const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        // Test for creation of new object if Name, ID, Email, GitHubUsername, and Role are provided //
        it("should create an object with a Name, ID, Email, GitHubUsername, and Role if provided valid arguments", () => {
            const engineer = new Engineer("Adam", "1014", "adam@email.com", "theBoss", "Engineer");
  
            // Verify that the new object has the correct properties
            expect(engineer.name).toEqual("Adam");
            expect(engineer.id).toEqual("1014");
            expect(engineer.email).toEqual("adam@email.com");
            expect(engineer.getGithub()).toEqual("theBoss");
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});