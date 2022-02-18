

module.exports = templateData => {

const {description, title, installation, usage} = templateData;
 console.log(templateData)


    return `
    
    ## Title
    ${templateData.title}

    ## Description
    ${templateData.description}

    ##Installation
    ${templateData.installation}

    ## Usage 
    ${templateData.usage}


    Name: ${templateData.name}
    Github: ${templateData.github}
    `;
    
};
    







//module.exports = generateReadme;