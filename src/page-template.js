// create the about section
const generateManager = managerText => {
  if (!managerText) {
    return '';
  }

  return `

    <div class="card">
      <div class="card-header col-12 col-md-6 bg-dark text-light flex-column">
        <h3 class="portfolio-item-title text-light pl-3">${managerText.name}</h3>
        <h3 class="portfolio-item-title text-light pl-3"><i class="fas fa-mug-hot"></i>  ${managerText.getRole()}</h3>
      </div>
      <div class="card-body bg-light text-dark p-4">
        <p>ID: ${managerText.getId()}</p>
        <a href="mailto:${managerText.getEmail()}">email: ${managerText.getEmail()}</a>
        <p>Office Number: ${managerText.officeNumber}</p>
      </div>
    </div>

`;
};

// create the projects section
const generateEngineerCards = engineerIn => {
return `

  ${engineerIn
      .map(({ name, id, email, role, github }) => {
  return `

    <div class="card">
      <div class="card-header col-12 col-md-6 bg-dark text-light flex-column">
        <h3 class="portfolio-item-title text-light pl-3">${name}</h3>
        <h3 class="portfolio-item-title text-light pl-3"><i class="fas fa-glasses"></i>  ${role}</h3>
      </div>
      <div class="card-body bg-light text-dark p-4">
        <p>ID: ${id}</p>
        <a href="mailto:${email}">email: ${email}</a>
        <p>
        <a href="https://github.com/${github}" target="_blank"><i class="fab fa-github mr-2"></i>GitHub Profile</a>
        </p>
      </div>
    </div>
    
  `;
      })
      .join('')}
`;
};



const generateInternCards = internIn => {
return `
  
  ${internIn
    .map(({ name, id, email, role, school }) => {
  return `
  
    <div class="card">
      <div class="card-header col-12 col-md-6 bg-dark text-light flex-column">
        <h3 class="portfolio-item-title text-light pl-3">${name}</h3>
        <h3 class="portfolio-item-title text-light pl-3"><i class="fas fa-user-graduate"></i>  ${role}</h3>
      </div>
      <div class="card-body bg-light text-dark p-4">
        <p>ID: ${id}</p>
        <a href="mailto:${email}">email: ${email}</a>
        <p>
        <p>School: ${school}</p>
        </p>
      </div>
    </div>

    `;
      })
      .join('')}
  `;
};
// export function to generate entire page
module.exports = (myTeamData) => {

  if (!myTeamData.engineer) {
    myTeamData.engineer = [];
  }
  if (!myTeamData.intern) {
    myTeamData.intern = [];
  }
  return `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>My Team</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header>
    <div class="container flex-column justify-space-between align-center py-5">
      <h1 class="page-title">My Team</h1>
      <!-- <nav class="flex-row"> -->
      <!-- <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/AWOLRob">GitHub</a> -->
      <!-- </nav> -->
    </div>
  </header>
  <main class="container my-5">
    <section class="my-3" id="portfolio">
      <div class="flex-row justify-space-evenly">
        ${generateManager(myTeamData.manager)}
        ${generateEngineerCards(myTeamData.engineer.filter(function (e) { return e.role = "Engineer" }))}
        ${generateInternCards(myTeamData.intern.filter(function (e) { return e.role = "Intern" }))}
      </div>
    </section>

  </main>
  <footer class="container text-center py-3">
    <h3 class="text-dark">&copy;2020 by Rob Ellingson</h3>
  </footer>
</body>

</html>
  `;
};