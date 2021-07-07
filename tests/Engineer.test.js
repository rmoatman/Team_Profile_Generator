const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("getGitHub", () => {
        // Test for addition of GitHub property to employee //
        it("should append an object with a git Hub Username if an engineer and if provided valid arguments", () => {
            const engineer = new Engineer("Bob", 727, "bob@email.com", "Engineer", "btaylor");
  
            // Verify that the object has the correct properties
            expect(Employee.github).toEqual("btaylor");
        });
    });
});