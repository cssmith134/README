






module.exports = templateData => {

const {description, title, installation, usage, badge, contributors, tests, username, email, name} = templateData;
 console.log(templateData)


 let badgeSelection = ""


 if(templateData.badge == "MIT") {
  badgeSelection = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
 } else if (templateData.badge == "Apache 2.0") {
     badgeSelection = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
 } else if (templateData.badge == "GPL 3.0") {
     badgeSelection = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
 } else if (templateData.badge == "BSD 3") {
     badgeSelection = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
 }


    return `
    
## Title
${templateData.title}


## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#badge)
[Contributors](#contributors)
[Tests](#tests)
[Questions](#questions)




## Description:
${templateData.description}

## Installation:
${templateData.installation}

## Usage:
${templateData.usage}

## Badge

${badgeSelection}
${templateData.badge}

## Contributors
${templateData.contributors}

## Tests 
${templateData.tests}

## Questions
My Github : ${templateData.username} 


My Email: ${templateData.email}

link to video: https://drive.google.com/file/d/1-hKDHBCpSiP0gFemwWx6hdQk-eGLkfg_/view
    `;
    
};
    







