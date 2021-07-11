// test array
const teamArray1 = [
    {
      name: 'dd',
      id: 'dd',
      email: 'dd',
      role: 'Manager',
      officeNumber: 'dddd'
    },
    {
      name: 'ee',
      id: 'ee',
      email: 'eeee',
      role: 'Engineer',
      github: 'eeee'
    },
    {
      name: 'ii',
      id: 'iiii',
      email: 'iiii',
      role: 'Intern',
      school: 'iiiii'
    }
  ];



  {
    type: 'list',
    name: 'role',
    message: 'What is your role?',
    choices: ['Engineer', 'Intern'],
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


const mgr = new Manager();
//For loop
  //prompt for role
  //case on role
    //case intern
      //const intern = new Intern()
    //case engineer
      //const eng = new Engineer()
//end loop

// Prompts users with questions to create an array called teamArray //
// const answers = {name, id, email, role, officeNumber, github, school} //


console.log(teamArray);
yesNoMoreTeamMembers();


/*                 createNewHtmlFile(); */

            /*
                // Creates the index.html file //
                const htmlcontent = newFile(answers);

                // Writes the index.html file //
                fs.writeFile("index.html", htmlcontent, (err) => err? console.log(err) : console.log("success!"));
            */
              }











              // New Index.html contents //
function createNewHtmlFile() {
    
  // Create the beginning of the team.html file
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
     finalHTML.push(newHtmlPart1);
  
  // determine what card to add and push to finalHTML array
      console.log("add part 2");
     for (var i=0; i < teamArray.length; i++){

         switch(teamArray[i].role){

          case "Manager":
              const newHtmlPart2m = 
`
<!-- Manager Card -->
<div class="card m-5 col-4 mx-auto" style="width: 18rem;">
  <div class="card-body">
      <div class="bg-danger py-2 mb-2">
          <h5 class="card-title text-center">Manager</h5>
          <h5 class="card-title text-center">${teamArray[i].name}</h5>
      </div>
  
      <div>
          <p class="card-text">ID: ${teamArray[i].id}</p>
          <p class="card-text">Email: ${teamArray[i].email}</p>
          <p class="card-text">Office Number: ${teamArray[i].officeNumber}</p>
      </div>
  </div>
</div><!-- end of Manager card -->

`
              finalHTML.push(newHtmlPart2m);
              console.log(finalHTML);
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
          <p class="card-text">ID: ${teamArray[i].id}</p>
          <p class="card-text">Email: ${teamArray[i].email}</p>
          <p class="card-text">GitHub: ${teamArray[i].github}</p>
      </div>
  </div>
</div><!-- end of engineer card -->

`
              finalHTML.push(newHtmlPart2e);
              console.log(finalHTML);
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
          <p class="card-text">ID: ${teamArray[i].id}</p>
          <p class="card-text">Email: ${teamArray[i].email}</p>
          <p class="card-text">School: ${teamArray[i].school}</p>
      </div>
  </div>
</div><!-- end of intern card -->

`
              finalHTML.push(newHtmlPart2i);
              console.log(finalHTML);
              break;

          }; // end of switch
     }; // end of for

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
  finalHTML.push(newHtmlPart3);


  console.log(finalHTML);
}; // end of createNewHtmlFile








function yesNoMoreTeamMembers(){
  inquirer
      .prompt([




        function renderEmployees(employees) {
          let output = "";
          employees.forEach((person) => {
            output = output + renderEmployeeCard(person);
          });
        
          return output;