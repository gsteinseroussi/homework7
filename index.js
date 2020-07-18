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
  answers.license === "Apache"
    ? "![](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
    : ""
}
${
  answers.license === "Mozilla"
    ? "![](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)"
    : ""
}
${
  answers.license === "None"
    ? "![](https://img.shields.io/badge/License-None-blue)"
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
${
  answers.license === "Mozilla"
    ? "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work."
    : ""
}
${
  answers.license === "Apache"
    ? "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
    : ""
}
${
  answers.license === "None" ? "No license was required for this project." : ""
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
