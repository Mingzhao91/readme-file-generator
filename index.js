const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { LICENSES } = require("./utils/constants");

// array of questions for user
let questions = [];

// generate a question by providing essential information
function createQuestion(name, message, type = "input", choices) {
  const question = {};

  if (name) question.name = name;
  if (message) question.message = message;
  if (type) question.type = type;
  if (choices) question.choices = choices;

  return question;
}

// generate questions to put into inquirer
function generateQuertions() {
  const questionsArr = [];

  questionsArr.push(
    createQuestion("title", "Please enter the title for your project?")
  );
  questionsArr.push(
    createQuestion(
      "description",
      "Please enter the description for your project?"
    )
  );
  questionsArr.push(
    createQuestion(
      "installation",
      "Please enter the installation instructions for your project?"
    )
  );
  questionsArr.push(
    createQuestion(
      "usage",
      "Please enter the usage information for your project?"
    )
  );
  questionsArr.push(
    createQuestion(
      "contributions",
      "Please enter the contribution guidelines for your project?"
    )
  );
  questionsArr.push(
    createQuestion(
      "tests",
      "Please enter the test instructions for your project?"
    )
  );
  questionsArr.push(
    createQuestion(
      "license",
      "Please choose the license for your project?",
      "list",
      LICENSES
    )
  );
  questionsArr.push(
    createQuestion("username", "Please enter your GitHub username?")
  );
  questionsArr.push(
    createQuestion("email", "Please enter your email address?")
  );

  return questionsArr;
}

async function getUserAnswers(questions) {
  return await inquirer.prompt(questions);
}

// function to write README file
async function writeToFile(fileName, data) {
  try {
    await fs.writeFileSync(path.join(__dirname, fileName), data);
    console.log(`The readme file, ${fileName}, is successfully generated!`);
  } catch (error) {
    console.log("ERROR: ", error);
  }
}

// function to initialize program
async function init() {
  // get questions to put into inquirer
  questions = [...generateQuertions()];
  // get all answers from the user
  const answers = await getUserAnswers(questions);
  // create a readme file in text according to the user's answer
  const readmeStr = generateMarkdown(answers);
  // write the text into a file
  await writeToFile("example-readme.md", readmeStr);
}

// function call to initialize program
init();
