const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        // Test for creation of new object if Name, ID, Email, and GitHubUsername are provided //
        it("should create an object with a Name, ID, Email, and GitHubUsername if provided valid arguments", () => {
            const engineer = new Engineer("Adam", "1014", "adam@email.com", "theBoss");
  
            // test getGithub function
            expect(engineer.getGithub()).toEqual("theBoss");

            // test getRole function
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});