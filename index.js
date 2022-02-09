const fs = require('fs');
const EmlParser = require('eml-parser');

const filenames = fs.readdirSync('./eml/');

for (let i = 0; i < filenames.length; i++) {
    const fileName = filenames[i];
    const htmlFileName = fileName.replace('.eml', '.html')

    new EmlParser(fs.createReadStream('./eml/' + fileName)).getEmailBodyHtml()
    .then(htmlString  => {
        fs.writeFileSync(`./html/${htmlFileName}`, htmlString);
    })
    .catch(err  => {
        console.log(err);
    })
}