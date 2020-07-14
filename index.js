const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [];
// function call to initialize program
//init();

// function to initialize program
// async function init() {
//   try {
//     const answers = await promptUser();
//     const html = generateREADME(generateREADME);

//     await fs.writeFileSync("README.md", answers);
//   } catch (err) {
//     console.log("ERR", err);
//   }
// }
promptUser();
// array of questions for user
function promptUser() {
  return inquirer
    .prompt([
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
    ])
    .then(function (answers) {
      fs.writeFile("README.md", JSON.stringify(answers, null, "\t"), function (
        err
      ) {
        if (err) {
          return console.log(err);
        }
        console.log("success");
      });
    });
}

// function to write README file
function writeToFile(fileName, data) {}
