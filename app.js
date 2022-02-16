const fs = require('fs');
const generateReadme = require('./src/readme-template.js');

const readmeDataArgs = process.argv.slice(2, process.length);
const [name, github] = readmeDataArgs;


fs.writeFile('README.md', generateReadme(name,github), err=> {
    if (err) throw err;
    console.log('readme complete!')
});