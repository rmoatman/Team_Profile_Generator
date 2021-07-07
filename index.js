// Packages and modules needed for execution //
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./lib/Employee');
const {Manager} = require('./lib/Manager');
const {Engineer} = require('./lib/Engineer');
const {Intern} = require('./lib/Intern');


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

/*             {
                type: 'list',
                name: 'role',
                message: 'What is your role?',
                choices: ['Manager', 'Engineer', 'Intern'],
            }, */

            {
                type: 'confirm',
                name: 'role',
                message: 'Are you a Manager?'
            },

            // If role = Manager
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is your office number?',
                when(answers) {
                    return answers.role;
                }
            },

            {
                type: 'confirm',
                name: 'role',
                message: 'Are you an Engineer?'
            },

            // If role = Engineer
            {
                type: 'input',
                name: 'github',
                message: 'What is your github username?',
                when(answers) {
                    return answers.role;
                }
            },

            {
                type: 'confirm',
                name: 'role',
                message: 'Are you an Intern?'
            },

            // If role = Intern
            {
                type: 'input',
                name: 'school',
                message: 'What school are you attending?',
                when(answers) {
                    return answers.role;
                }
            },


            ]).then(function(answers){

                console.log("My Answers: " + answers);

                // someAction //
                functionname(answers);

                // Creates the index.html file //
                const htmlcontent = newFile(answers);

                // Writes the index.html file //
                fs.writeFile("index.html", htmlcontent, (err) => err? console.log(err) : console.log("success!"));
        })
    // End of inquirer //
}; 
// End of init //

// Function call to initialize app //
init();

