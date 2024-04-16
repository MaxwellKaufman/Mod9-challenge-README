const licenseData = {
  MIT: {
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    link: "https://opensource.org/licenses/MIT",
  },
  "GNU GPLv3": {
    badge:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    link: "https://www.gnu.org/licenses/gpl-3.0",
  },
  "Apache 2.0": {
    badge:
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    link: "https://opensource.org/licenses/Apache-2.0",
  },
  ISC: {
    badge:
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    link: "https://opensource.org/licenses/ISC",
  },
};

function renderLicenseBadge(license) {
  const licenseInfo = licenseData[license];
  return licenseInfo ? licenseInfo.badge : "";
}

function renderLicenseLink(license) {
  const licenseInfo = licenseData[license];
  return licenseInfo ? licenseInfo.link : "";
}

function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `## License
This project is licensed under the ${license} license. Click [here](${renderLicenseLink(
      license
    )}) for more information.

`;
  }
}

function generateMarkdown(data) {
  const githubLink = data.github
    ? `GitHub: [${data.github}](https://github.com/${data.github})\n`
    : "";
  const emailSection = data.email ? `- Email: ${data.email}\n` : "";

  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please feel free to reach out:
${githubLink}${emailSection}
`;
}

module.exports = generateMarkdown;
