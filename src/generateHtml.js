const fs = require("fs");

const finalHTML = "";
let str = "";
let interimString = "";

// function newHtml - generates index.html file from user input() {
    
function newHtml(teamArray){
    // Add html head to index.html
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
    ` // end of html head string text
    ; // end of add html head to index.html

        
    // add Employee Cards

    for (var i=0; i < teamArray.length; i++){

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
                        <p class="card-text">Email: <a href="mailto:${teamArray[i].getEmail()}">${teamArray[i].getEmail()}</a></p>
                        <p class="card-text">Office Number: ${teamArray[i].getOfficeNumber()}</p>
                    </div>
                </div>
                </div><!-- end of Manager card -->
                
                ` // end of Manager card string text

                // Add Manager card string text to html string
                interimString = str.concat(newHtmlPart1, newHtmlPart2m);

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
                        <p class="card-text">Email: <a href="mailto:${teamArray[i].getEmail()}">${teamArray[i].getEmail()}</a></p>
                        <p class="card-text">GitHub: <a href="http://github.com/${teamArray[i].getGithub()}" target="_blank">${teamArray[i].getGithub()}</a></p>
                    </div>
                </div>
                </div><!-- end of engineer card -->
                
                ` // end of Engineer card string text

                // Add Engineer card to html string            
                interimString = interimString.concat(newHtmlPart2e);            

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
                    <p class="card-text">Email: <a href="mailto:${teamArray[i].getEmail()}">${teamArray[i].getEmail()}</a></p>
                    <p class="card-text">School: ${teamArray[i].getSchool()}</p>
                </div>
            </div>
            </div><!-- end of intern card -->
            
            ` // end of Intern card string text

            // Add Intern card to html string
            interimString = interimString.concat(newHtmlPart2i);

            break;
    
            }; // end of switch
        }; // end of for loop

      
        // Add end of team.html file //
    
    // Complete index.html file
    const newHtmlPart3 = 
        `    
                </div><!-- end of row -->
            </div><!-- end of container -->
         
        
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            <script src="/index.js"></script>
        
          </body>
        
        </html>
        `

    // Add end of html to string
    const finalHTML = str.concat(interimString, newHtmlPart3 )
   
    // Writes the index.html file //
    fs.writeFile("index.html", finalHTML, (err) => err? console.log(err) : console.log("success!"));
    
}; // end of createNewHtmlFile */

module.exports = newHtml;
//module.exports = generateHtml;