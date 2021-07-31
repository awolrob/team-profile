const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { writeFile, copyFile } = require('./src/generate-site');
const engineerData = [];

const promptManager = () => {
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
            name: 'employeeID',
            message: 'Enter the team manager’s employee ID (Required)',
            validate(employeeID) {
                const valid = !isNaN(parseFloat(employeeID));
                return valid || 'Please enter a number';
            },
            filter: Number,
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Enter the team manager’s email address (Required)',
            validate(employeeEmail) {
                const pass = employeeEmail.match(
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
            name: 'employeeOfficeNumber',
            message: 'Enter the team manager’s Office Number (Required)',
            validate(employeeOfficeNumber) {
                const pass = employeeOfficeNumber.match(
                    /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
                );
                if (pass) {
                    return true;
                }
                return 'Please enter a valid US phone number';
            },
        },
        {
            type: 'list',
            name: 'addTeamMember',
            message: 'Add Team Members?',
            choices: [
                { name: 'Add Engineer', value: 'engineer', },
                { name: 'Add Intern', value: 'intern', },
                new inquirer.Separator(),
                { name: 'Exit and generate Team Page', value: 'exit', }
            ],
        }
    ]);
};

const promptEngineer = engineerData => {
    console.log(`
  =================
  Add an Engineer
  =================
  `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the  engineer’s name (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name");
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Enter the team engineer's employee ID (Required)",
            validate(employeeID) {
                const valid = !isNaN(parseFloat(employeeID));
                return valid || 'Please enter a number';
            },
            filter: Number,
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Enter the engineer’s email address (Required)',
            validate(employeeEmail) {
                const pass = employeeEmail.match(
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
            name: 'engineerGithub',
            message: 'Enter the engineer’s Github Username (Required)',
            validate: engineerGithub => {
                if (engineerGithub) {
                    return true;
                } else {
                    console.log("Please enter the engineer's Github Username");
                    return false;
                }
            },
        },
        {
            type: 'list',
            name: 'addTeamMember',
            message: 'Add Team Members?',
            choices: [
                { name: 'Add Engineer', value: 'engineer', },
                { name: 'Add Intern', value: 'intern', },
                new inquirer.Separator(),
                { name: 'Exit and generate Team Page', value: true, }
            ],
        }
    ]);
};

const addEngineer = () => {
    promptEngineer(engineerData).then(engineerAnswers => {
        console.log(engineerAnswers);
        engineerData.push(engineerAnswers);
        if (engineerAnswers.addTeamMember === true) {
            console.log(engineerData);
            return;
        };
        if (engineerAnswers.addTeamMember = "engineer") {
            addEngineer();
        } else {
            addIntern();
        };
    });
};

promptManager().then(managerAnswers => {
    console.log(managerAnswers);
    if (managerAnswers.addTeamMember === true) {
        return;
    };
    if (managerAnswers.addTeamMember = "engineer") {
        addEngineer();
    } else {
        addIntern();
    };
    return;
    // return generatePage(portfolioData);
}).catch(err => {
    console.log(err);
});

        // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // })
    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return copyFile();
    // })
    // .then(copyFileResponse => {
    //     console.log(copyFileResponse);
    // })
