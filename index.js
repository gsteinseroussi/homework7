const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//function call to initialize program
init();

//function to initialize program
async function init() {
  try {
    const answers = await promptUser();
    //  const text = generateREADME(answers);

    await writeFileAsync("README.md", generateREADME(answers));
  } catch (err) {
    console.log("ERR", err);
  }
}

// array of questions for user
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "rawlist",
      name: "license",
      message: "Select your license:",
      choices: ["MIT", "IBM", "Mozilla", "None"],
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "How would you describe your project?",
    },
    {
      type: "input",
      name: "install",
      message: "Are there any installation instructions for this project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Any additional usage information?",
    },
    {
      type: "input",
      name: "contribute",
      message: "What are the contribution guidelines?",
    },
    {
      type: "input",
      name: "tests",
      message: "What tests have been run?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the github repository link?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
  ]);
}

// function to write README file

function generateREADME(answers) {
  return `
${
  answers.license === "MIT"
    ? "![](https://img.shields.io/badge/license-MIT-brightgreen)"
    : ""
}
${
  answers.license === "IBM"
    ? "![](https://img.shields.io/badge/License-IPL%201.0-blue.svg)"
    : ""
}
${
  answers.license === "Mozilla"
    ? "![](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)"
    : ""
}

# ${answers.title} 
      
## Table of Contents:
      
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions?](#created-by)
      
  
## Description: 
${answers.description}

      
## Installation: 
${answers.install}
      

      
## Usage: 
${answers.usage}


## License:
${
  answers.license === "MIT"
    ? "MIT: A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
    : ""
}
      

     
## Contributing:
${answers.contribute}
      

    
## Tests: 
${answers.tests}
      

## Created by: 
${answers.name}

${answers.github}

${answers.email}
      
`;
}
