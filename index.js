// Packages and modules needed for execution //
const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];


// Prompts users with questions to create an array called answers.  .then calls function to create badge and write new README.file //
// const answers = {name, id, email, role, officeNumber, github, school} //    
function init(){
    inquirer
        .prompt([

            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            },

            {
                type: 'input',
                name: 'id',
                message: 'What is your id?',
            },

            {
                type: 'input',
                name: 'email',
                message: 'What is your email?',
            },

             {
                type: 'list',
                name: 'role',
                message: 'What is your role?',
                choices: ['Manager', 'Engineer', 'Intern'],
            },

            // If role = Manager
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is your office number?',
                when: (input) => input.role === "Manager",
            },

            // If role = Engineer
            {
                type: 'input',
                name: 'github',
                message: 'What is your github username?',
                when: (input) => input.role === "Engineer",
            },

            // If role = Intern
            {
                type: 'input',
                name: 'school',
                message: 'What school are you attending?',
                when: (input) => input.role === "Intern",
            },

            ]).then(teamInput => {

                const  { name, id, email, role, officeNumber, github, school } = teamInput;

                switch (teamInput.role) {
                    case "Manager":
                        const manager = new Manager(name, id, email, role, officeNumber);
                        teamArray.push(manager);
                        break;
    
                    case "Engineer":
                        const engineer = new Engineer(name, id, email, role, github);
                        teamArray.push(engineer);
                        break;

                    case "Intern":
                        const intern = new Intern(name, id, email, role, school);
                        teamArray.push(intern);
                        break;
                }










 
/*                     const employee = new Employee(name, id, email, role, officeNumber, github, school);
            
                    teamArray.push(employee); 
                    console.log(employee); */
                    console.log(teamArray);
                })



               /*  console.log("My Answers: " + answers);

                // someAction //
                functionname(answers);

                // Creates the index.html file //
                const htmlcontent = newFile(answers);

                // Writes the index.html file //
                fs.writeFile("index.html", htmlcontent, (err) => err? console.log(err) : console.log("success!"));
        }) */
    // End of inquirer //
}; 
// End of init //

// Function call to initialize app //
init();

