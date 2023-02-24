// write title
function getTitle(data) {
  const licenseBadge = data.license
    ? `![License](https://img.shields.io/badge/License-${data.license.replaceAll(
        " ",
        "%20"
      )}-blue)`
    : "";

  return data.title ? `# ${data.title}\n${licenseBadge}\n` : "";
}

// write description
function getDescription(data) {
  return data.description ? `## Description\n${data.description}\n\n` : "";
}

// write table of contents
function getTableContents(data) {
  let str = "";

  if (
    data.installation ||
    data.usage ||
    data.contributions ||
    data.license ||
    data.tests ||
    data.username ||
    data.email
  ) {
    str += "## Table of Contents\n";

    if (data.installation) {
      str += `- [Installation](#installation)\n`;
    }

    if (data.usage) {
      str += `- [Usage](#usage)\n`;
    }

    if (data.contributions) {
      str += `- [Contributings](#contributings)\n`;
    }

    if (data.license) {
      str += `- [License](#license)\n`;
    }

    if (data.tests) {
      str += `- [Tests](#tests)\n`;
    }

    if (data.username || data.email) {
      str += `- [Questions](#questions)\n`;
    }

    str += "\n";
  }

  return str;
}

// write installation
function getInstallation(data) {
  return data.installation ? `## Installation\n${data.installation}\n\n` : "";
}

// write usage
function getUsage(data) {
  return data.usage ? `## Usage\n${data.usage}\n\n` : "";
}

// write contributions
function getContributions(data) {
  return data.contributions
    ? `## Contributings\n${data.contributions}\n\n`
    : "";
}

// write license
function getLicense(data) {
  return data.license
    ? `## License\nThis project is released under the ${data.license}.\n\n`
    : "";
}

// write tests
function getTests(data) {
  return data.tests ? `## Tests\n${data.tests}.\n\n` : "";
}

// write Questions
function getQuestions(data) {
  let str = "";

  if (data.username || data.email) {
    str = "## Questions\n";

    if (data.username) {
      str += `You can click [here](https://github.com/${data.username}) to visit my GitHub profile.\n`;
    }

    if (data.email) {
      str += `Please feel free to contact me via [email](mailto:${data.email}) for any questions.`;
    }

    str += "\n";
  }

  return str;
}

// function to generate markdown for README
function generateMarkdown(data) {
  let readmeStr = "";

  readmeStr += getTitle(data);
  readmeStr += getDescription(data);
  readmeStr += getTableContents(data);
  readmeStr += getInstallation(data);
  readmeStr += getUsage(data);
  readmeStr += getLicense(data);
  readmeStr += getContributions(data);
  readmeStr += getTests(data);
  readmeStr += getQuestions(data);

  return readmeStr;
}

module.exports = generateMarkdown;
