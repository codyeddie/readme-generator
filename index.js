// list the dependencies 
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// create the questions object using inquirer 
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your username on GitHub?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'projectLink',
        message: 'What is the link to your project on GitHub?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is your project installed?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What can your project be used for?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who did you collaborate with on this project?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How was your project be tested?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license is your project using?',
        choices: ['Apache', 'Boost', 'MIT', 'None'],
    },

];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
    });
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('./README.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
