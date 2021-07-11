// PACKAGES NEEDED FOR EXECUTION //
const inquirer = require("inquirer");

// MODULES NEEDED FOR EXECUTION //
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const newHtml = require('./src/generateHtml');

// VARIABLES //
const teamArray = [];

// LIST OF FUNCTIONS //
// Init() -- initial function call to begin entering team members //
// getManager -- script to prompt user for Manager information //
// addOtherEmployees -- script to add Engineers and Interns //
// yesNoMoreTeamMembers() -- prompts user if more members are to be added //

// Initial function call to begin entering team members //
function init(){
    
    getManager();

}; // end of init

// Script to prompt user for Manager information //
const getManager = () => {
    return inquirer.prompt ([

        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Project Manager?',
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is the Project Manager id?',
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is the Project Manager email?',
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
        },

    ]) // end return inquirer.prompt

    .then (managerInfo => {
        const { name, id, email, officeNumber } = managerInfo;
        const manager = new Manager(name, id, email, officeNumber);
    
        teamArray.push(manager);
        console.log(" ");
        console.log("Now, let's enter the rest of the team!")
        console.log(" ");
        addOtherEmployees();

    }); // end of .then

} // end const getManager

// Script to add Engineers and Interns //
const addOtherEmployees = () => {
    return inquirer.prompt ([
        
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee`s name?',
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is the employee`s id?',
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is the employee`s email?',
        },
                
        {
            type: 'list',
            name: 'role',
            message: 'What is the employee`s role?',
            choices: ['Engineer', 'Intern'],
        },
        
        // If role = Engineer
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineer`s gitHub username?',
            when: (input) => input.role === "Engineer",
        },
        
        // If role = Intern
        {
            type: 'input',
            name: 'school',
            message: 'What school is the Intern attending?',
            when: (input) => input.role === "Intern",
        },

    ]) // end of return inquirer.prompt

    .then (employeeInfo => {
        const { name, id, email, github, school  } = employeeInfo;
        
        if (employeeInfo.role === "Engineer") {
            const employee = new Engineer(name, id, email, github);

            teamArray.push(employee);
            //console.log(teamArray);

        } else {
            const employee = new Intern(name, id, email, school);

            teamArray.push(employee);
            console.log(teamArray);
        }; // end if else

        console.log(" ");
        yesNoMoreTeamMembers();
        
    }); // end of .then

}; // end of addOtherEmployees

// Prompts user if more team members are to be added
const yesNoMoreTeamMembers = () => {
    return inquirer.prompt ([

        {
            type: 'list',
            name: 'addMoreEmployees',
            message: 'Do you want to enter more team members?',
            choices: ['Yes', 'No'],
        },
    
    ]) // end of .prompt
        
    .then (addMore => {
        if (addMore.addMoreEmployees === 'Yes') {
            addOtherEmployees(); 

        } else {
            console.log("");
            console.log("You have finished entering employees");
            console.log("This is the team:");
            console.log(teamArray);

            newHtml(teamArray);
            console.log()
            
        } // end of if else
    }); // end of .then

} // end of yesNoMoreTeamMembers


// EXECUTION //
// Function call to initialize app //
init();