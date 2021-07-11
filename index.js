// PACKAGES NEEDED FOR EXECUTION //
const inquirer = require("inquirer");
const fs = require("fs");

// MODULES NEEDED FOR EXECUTION //
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const newFile = ""; //require("./Miscellaneous/generateMarkdown");
//const newHtml = require('./dist/generateHtml');


// LIST OF FUNCTIONS //
// Init() -- initial function call to begin entering team members //
// getManager -- script to prompt user for Manager information //
// addOtherEmployees -- script to add Engineers and Interns //
// yesNoMoreTeamMembers() -- prompts user if more members are to be added //


// VARIABLES //
const teamArray = [];
const finalHTML = "";
let str = "";
const newHtmlPart1 = "";
const newHtmlPart2m = "";
const newHtmlPart2e = "";
const newHtmlPart2i = "";
const newHtmlPart3 = "";
let interimString = "";




    
// Initial function call to begin entering team members //
function init(){
    
    getManager();

}; // end of init

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
        //console.log(manager);
        //console.log(teamArray);
        addOtherEmployees();

    }); // end of .then

} // end const getManager

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

} // end of addOtherEmployees

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
            console.log("finished entering employees");
            console.log("This is my team:");
            console.log(teamArray);
            newHtml(teamArray);
            console.log()
        } // end of if else
    }); // end of .then

} // end of yesNoMoreTeamMembers

// New Index.html contents //
//function createNewHtmlFile() {
function newHtml(){
    const newHtmlPart1 = 
    `
    <!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link href="/dist/style.css" rel="stylesheet">
    
        <title>Team Profile</title>
      </head>
    
      <body>
        <header>
            <div class="bg-primary text-secondary px-4 py-5 text-center">
                <div class="py-5">
                <h1 class="display-5 fw-bold text-white">My Team</h1>
                </div>
            </div>
        </header>
  
        <div class="container">
            <div class="row"
       `
       ;
//lat
       //finalHTML.push(newHtmlPart1);
    
    // determine what card to add and push to finalHTML array

         console.log("add part 2");
       for (var i=0; i < teamArray.length; i++){
  
        //console.log(teamArray[i].getRole());}
        
        {
           switch(teamArray[i].getRole()){
  
            case "Manager":
                const newHtmlPart2m = 
  `
  <!-- Manager Card -->
  <div class="card m-5 col-4 mx-auto" style="width: 18rem;">
    <div class="card-body">
        <div class="bg-danger py-2 mb-2">
            <h5 class="card-title text-center">Manager</h5>
            <h5 class="card-title text-center">${teamArray[i].getName()}</h5>
        </div>
    
        <div>
            <p class="card-text">ID: ${teamArray[i].getId()}</p>
            <p class="card-text">Email: ${teamArray[i].getEmail()}</p>
            <p class="card-text">Office Number: ${teamArray[i].getOfficeNumber()}</p>
        </div>
    </div>
  </div><!-- end of Manager card -->
  
  `
  //lat
                interimString = str.concat(newHtmlPart1, newHtmlPart2m);
                console.log("interimString: ");
                console.log(interimString);
                //finalHTML.push(newHtmlPart2m);
                //console.log(finalHTML);
                break;
  
            case "Engineer":
                const newHtmlPart2e = 
  `
  <!-- Engineer Card -->
  <div class="card m-5 col-4 mx-auto" style="width: 18rem;">
    <div class="card-body">
        <div class="bg-primary py-2 mb-2">
            <h5 class="card-title text-center">Engineer</h5>
            <h5 class="card-title text-center">${teamArray[i].name}</h5>
        </div>
    
        <div>
            <p class="card-text">ID: ${teamArray[i].getId()}</p>
            <p class="card-text">Email: ${teamArray[i].getEmail()}</p>
            <p class="card-text">GitHub: ${teamArray[i].getGithub()}</p>
        </div>
    </div>
  </div><!-- end of engineer card -->
  
  `
  //lat
                interimString = interimString.concat(newHtmlPart2e);            
  //finalHTML.push(newHtmlPart2e);
                //console.log(finalHTML);
                break;
  
            case "Intern":
                const newHtmlPart2i =
  `
  <!-- Intern Card -->
  <div class="card m-5 col-4 mx-auto" style="width: 18rem;">
    <div class="card-body">
        <div class="bg-success py-2 mb-2">
            <h5 class="card-title text-center">Intern</h5>
            <h5 class="card-title text-center">${teamArray[i].name}</h5>
        </div>
    
        <div>
            <p class="card-text">ID: ${teamArray[i].getId()}</p>
            <p class="card-text">Email: ${teamArray[i].getEmail()}</p>
            <p class="card-text">School: ${teamArray[i].getSchool()}</p>
        </div>
    </div>
  </div><!-- end of intern card -->
  
  `
  //lat
                interimString = interimString.concat(newHtmlPart2i);
                //finalHTML.push(newHtmlPart2i);
                //console.log(finalHTML);
                break;
  
            }; // end of switch
       }; 
    };// end of for
  
    // Add end of team.html file //
    console.log("add part 3");


    const newHtmlPart3 = 
    `    
            </div><!-- end of row -->
        </div><!-- end of container -->
     
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <script src="/index.js"></script>
    
      </body>
    
    </html>
    `
    //lat
    // finalHTML.push(newHtmlPart3);
    const finalHTML = str.concat(interimString, newHtmlPart3 )
    console.log(finalHTML);

                // Creates the README.md file //
                

                // Writes the README.md file //
                fs.writeFile("index.html", finalHTML, (err) => err? console.log(err) : console.log("success!"));
                

  }; // end of createNewHtmlFile */




// EXECUTION //
// Function call to initialize app //
init();