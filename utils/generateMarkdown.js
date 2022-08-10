// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents 
* [Installation](#installation)
${data.installation}
* [Usage](#usage)
${data.usage}
* [License](#license)
${data.license
}
* [Contribution](#contribution)
${data.contribution}

## Description
${data.description}
* GitHub Link
${data.projectLink}
## Installation
${data.installation}
## Usage
${data.usage}
## Tests
${data.testing}
## License
Your project is covered under license:\n
${data.license} 

## Contribution
${data.contribution} helped with the creation of this project.
`;
}

module.exports = generateMarkdown;
