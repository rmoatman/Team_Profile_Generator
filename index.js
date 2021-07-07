// PACKAGES NEEDED FOR EXECUTION //
const inquirer = require("inquirer");
const fs = require("fs");

// MODULES NEEDED FOR EXECUTION //
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// LIST OF FUNCTIONS //
// Init() -- initial function call to begin entering team members //
// enterTeamMembers() -- script to prompt user for team member information //
// yesNoMoreTeamMembers() -- prompts user if more members are to be added //


// VARIABLES //
const teamArray = [];



    
// Initial function call to begin entering team members //
function init(){
    enterTeamMembers();
}; // end of init

// Prompts users with questions to create an array called teamArray //
// const answers = {name, id, email, role, officeNumber, github, school} //
function enterTeamMembers(){
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
                } // end of switch

                console.log(teamArray);
                yesNoMoreTeamMembers();

            }) // end of .then

}; // end of enterTeamMembers

// Prompts user if more members are to be added
function yesNoMoreTeamMembers(){
    inquirer
        .prompt([

            {
                type: 'list',
                name: 'addMoreEmployees',
                message: 'Do you want to enter more team members?',
                choices: ['Yes', 'No'],
            },

        ]).then (addMore => {

            const { addMoreEmployees } = addMore;
            if (addMore.addMoreEmployees === 'Yes') {
                enterTeamMembers(); 
            } else {
                console.log(teamArray);
            /*
                // Creates the index.html file //
                const htmlcontent = newFile(answers);

                // Writes the index.html file //
                fs.writeFile("index.html", htmlcontent, (err) => err? console.log(err) : console.log("success!"));
            */
            }

        }); // end of .then

} // end of yesNoMoreTeamMembers




// EXECUTION //
// Function call to initialize app //
init();

