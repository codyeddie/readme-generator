// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# Table of Contents 
* [Installation](#installation)
${data.installation}
* [Usage](#usage)
${data.usage}
* [License](#contribution)
${data.contribution
}
* [Credits](#license)
${data.license}

# Description
${data.description}
* GitHub Link
${data.projectLink}
# Installation
${data.installation}
# Usage
${data.usage}
# Contribution
${data.contributors}
# Tests
${data.testing}
# License
Your project is covered under license:\n
${data.license} 
${renderLicenseBadge(data.license)}\n

`;
}

module.exports = generateMarkdown;
