// list the dependencies 
const fs = require('fs')
const inquirer = require('inquirer');

// create the questions object using inquirer 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
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
        name: 'uses',
        message: 'What can your project be used for?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to this project?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How can your project be tested?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license is your project using?',
        choices: ['Apache', 'Boost', 'MIT', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your username on GitHub?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
