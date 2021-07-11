const teamArray = require("../index");

// New Index.html contents //
//function createNewHtmlFile() {
    
//const newHtml = (teamArray) =>
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
    ${teamArray[0].name}
`


/* 
`    <div class="container">
        <div class="row"
            <!-- Manager Card -->
            <div class="card m-5 col-4 mx-auto" style="width: 18rem;">
                <div class="card-body">
                    <div class="bg-danger py-2 mb-2">
                        <h5 class="card-title text-center">Manager</h5>
                        <h5 class="card-title text-center">Name</h5>
                    </div>
                
                    <div>
                        <p class="card-text">ID:</p>
                        <p class="card-text">Email:</p>
                        <p class="card-text">Office Number:</p>
                    </div>
                </div>
            </div><!-- end of Manager card -->

            <!-- Engineer Card -->
            <div class="card m-5 col-4 mx-auto" style="width: 18rem;">
                <div class="card-body">
                    <div class="bg-primary py-2 mb-2">
                        <h5 class="card-title text-center">Engineer</h5>
                        <h5 class="card-title text-center">Name</h5>
                    </div>
                
                    <div>
                        <p class="card-text">ID:</p>
                        <p class="card-text">Email:</p>
                        <p class="card-text">GitHub:</p>
                    </div>
                </div>
            </div><!-- end of engineer card -->

            <!-- Intern Card -->
            <div class="card m-5 col-4 mx-auto" style="width: 18rem;">
                <div class="card-body">
                    <div class="bg-success py-2 mb-2">
                        <h5 class="card-title text-center">Intern</h5>
                        <h5 class="card-title text-center">Name</h5>
                    </div>
                
                    <div>
                        <p class="card-text">ID:</p>
                        <p class="card-text">Email:</p>
                        <p class="card-text">School:</p>
                    </div>
                </div>
            </div><!-- end of intern card -->

            <!-- Intern Card -->
            <div class="card m-5 col-4 mx-auto" style="width: 18rem;">
                <div class="card-body">
                    <div class="bg-success py-2 mb-2">
                        <h5 class="card-title text-center">Intern</h5>
                        <h5 class="card-title text-center">Name</h5>
                    </div>
                
                    <div>
                        <p class="card-text">ID:</p>
                        <p class="card-text">Email:</p>
                        <p class="card-text">School:</p>
                    </div>
                </div>
            </div><!-- end of intern card -->

            <!-- Intern Card -->
            <div class="card m-5 col-4 mx-auto" style="width: 18rem;">
                <div class="card-body">
                    <div class="bg-success py-2 mb-2">
                        <h5 class="card-title text-center">Intern</h5>
                        <h5 class="card-title text-center">Name</h5>
                    </div>
                
                    <div>
                        <p class="card-text">ID:</p>
                        <p class="card-text">Email:</p>
                        <p class="card-text">School:</p>
                    </div>
                </div>
            </div><!-- end of intern card -->

            <!-- Intern Card -->
            <div class="card m-5 col-4 mx-auto" style="width: 18rem;">
                <div class="card-body">
                    <div class="bg-success py-2 mb-2">
                        <h5 class="card-title text-center">Intern</h5>
                        <h5 class="card-title text-center">Name</h5>
                    </div>
                
                    <div>
                        <p class="card-text">ID:</p>
                        <p class="card-text">Email:</p>
                        <p class="card-text">School:</p>
                    </div>
                </div>
            </div><!-- end of intern card -->

        </div><!-- end of row -->
    </div><!-- end of container -->
 

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="/index.js"></script>

  </body>

</html>
` */
//};

module.exports = { newHtml };