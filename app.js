const inquirer = require('inquirer');

const fs = require('fs');
const generateReadme = require('./src/readme-template');

//fs.writeFile('README.md', generateReadme(name,github), err=> {
  //  if (err) throw err;
    //console.log('readme complete!')
//});

const promptReadme = readmeData => {

return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },

        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project.',
        },

        {
            type: 'input',
            name: 'installation',
            message: 'What sort of installation process is being used?',
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Please tell us what your project will be used for'
        },

        {
            type: 'list',
            name: 'license badge',
            message: 'What kind of license do you want your project to have?',
            choices: [
                'MIT',
                'Apache 2.0',
                'GPL 3.0',
                'BSD 3',
                'None',
            ]
        },

        {
            type: 'input',
            name: 'contributors',
            message: 'Who is contributing to this project?'
        },

        {
            type: 'test',
            name: 'tests',
            message: 'What command should be run to run tests?'
        },

        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?'

        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'project name',
            message: 'What is the name of your project?',

        },
       
        

    ]);
};

promptReadme()
.then(readmeData => {
    const pageReadme = generateReadme(readmeData)

    fs.writeFile('./README.md', pageReadme, err => {
   if (err) throw new Error(err);

    console.log('Page created!')
})

})

//const pageReadme = generateReadme();




