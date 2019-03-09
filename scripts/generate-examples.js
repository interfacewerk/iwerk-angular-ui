const exampleConfig = require('../examples.json');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { parse } = require('node-html-parser');

const object = {};

glob(path.join(__dirname, '../projects/demo/src/app/**/*'), (error, allFiles) => {
  glob(path.join(__dirname, '../projects/demo/src/app/**/*.html'), (error, matches) => {
    matches.forEach(absPath => {
      const content = fs.readFileSync(absPath);
      const root = parse(`<!doctype><html><body>${content}</body></html>`);
      const codes = root.querySelectorAll('docs-code');
      codes.map(c => c.attributes).filter(a => a.path).forEach(c => {
        const path = c.path;
        const completePath = findMatchingFile(allFiles, path);
        if (!completePath) {
          console.error(`ERROR: could not find a file for the short path ${path}`);
        } else {
          object[path] = fs.readFileSync(completePath).toString().replace('src/public_api', exampleConfig.libraryName);
        }
      });
    });
    fs.writeFileSync(path.join(__dirname, '../projects/demo/src/assets/examples.json'), JSON.stringify(object));
  });
});

function findMatchingFile(allFiles, shortName) {
  console.log()
  return allFiles.find(file => path.basename(file) === shortName);
}


