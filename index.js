/* VARIABLES */

const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { writeFile, copyFile } = require('./src/generate-site');
const generatePage = require('./src/page-template');

const engineerData = [];
const internData = [];
const teamData = {};
/* END VARIABLES */

/* FUNCTIONS */
// Prompt for Manager data
const promptManager = () => {
    console.log(`
  ================
  Add Team Manager
  ================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the team manager’s name (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the team manager’s name');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the team manager’s employee ID (Required)',
            validate(id) {
                const valid = !isNaN(parseFloat(id));
                return valid || 'Please enter a number';
            },
            filter: Number,
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the team manager’s email address (Required)',
            validate(email) {
                const pass = email.match(
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                );
                if (pass) {
                    return true;
                }
                return 'Please enter a valid email address';
            },

        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the team manager’s Office Number (Required)',
            validate(officeNumber) {
                const valid = !isNaN(parseFloat(officeNumber));
                return valid || 'Please enter a number';
                //if needed - validate phone number
                // const pass = officeNumber.match(
                //     /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
                // );
                // if (pass) {
                //     return true;
                // }
                // return 'Please enter a valid US phone number';
            },
        }
    ]);
};

// Prompt for Engineer data
const promptEngineer = engineerData => {
    console.log(`
  ===============
  Add an Engineer
  ===============
  `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the  engineer’s name (Required)",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name");
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the team engineer's employee ID (Required)",
            validate(id) {
                const valid = !isNaN(parseFloat(id));
                return valid || 'Please enter a number';
            },
            filter: Number,
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the engineer’s email address (Required)',
            validate(email) {
                const pass = email.match(
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                );
                if (pass) {
                    return true;
                }
                return 'Please enter a valid email address';
            },

        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the engineer’s Github Username (Required)',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log("Please enter the engineer's Github Username");
                    return false;
                }
            },
        }
    ]);
};

// Prompt for Intern data
const promptIntern = internData => {
    console.log(`
  =============
  Add an Intern
  =============
  `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the  intern’s name (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name");
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the team intern's employee ID (Required)",
            validate(id) {
                const valid = !isNaN(parseFloat(id));
                return valid || 'Please enter a number';
            },
            filter: Number,
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the intern’s email address (Required)',
            validate(email) {
                const pass = email.match(
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                );
                if (pass) {
                    return true;
                }
                return 'Please enter a valid email address';
            },

        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the intern’s school (Required)',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log("Please enter the intern's school");
                    return false;
                }
            },
        }
    ]);
};

// Menu question  engineer and interm team members or exit
const menuQuestions = menuData => {
    console.log(`
      ====================
      Add Team Member Menu
      ====================
      `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addTeamMember',
            message: 'Add Team Members?',
            choices: [
                { name: 'Add Engineer', value: 'engineer', },
                { name: 'Add Intern', value: 'intern', },
                new inquirer.Separator(),
                { name: 'Exit and generate Team Page', value: "exit" }
            ],
        }
    ]);

};

// Add engineer data to engineer array using Engineer class function
const addEngineer = () => {
    promptEngineer(engineerData).then(engineerAnswers => {

        const clsEngineer = new Engineer(
            engineerAnswers.name,
            engineerAnswers.id,
            engineerAnswers.email,
            engineerAnswers.github
        );

        engineerData.push(clsEngineer);
        teamData.engineer = engineerData;

        menuLoop();
    });
};

// Add intern data to intern array using Intern class function
const addIntern = () => {
    promptIntern(internData).then(internAnswers => {

        const clsIntern = new Intern(
            internAnswers.name,
            internAnswers.id,
            internAnswers.email,
            internAnswers.school
        );

        internData.push(clsIntern);
        teamData.intern = internData;

        menuLoop();
    });
};

// Menu function to loop through creating engineer and interm team members
const menuLoop = function () {
    menuQuestions()
        .then((answers) => {
            if (answers.addTeamMember === "engineer") {
                addEngineer();
            } else if (answers.addTeamMember === "intern") {
                addIntern();
            } else {
                writeFile(generatePage(teamData));
                copyFile();
            }
        });
};
/*  END FUNCTIONS */

// Main logic - start by creating Manager record using Manager class then use menu function to loop through creating employee records
promptManager()
    .then(managerAnswers => {

        const clsManager = new Manager(
            managerAnswers.name,
            managerAnswers.id,
            managerAnswers.email,
            managerAnswers.officeNumber
        );

        teamData.manager = clsManager

        menuLoop();

    })
    .catch(err => {
        console.log(err);
    });