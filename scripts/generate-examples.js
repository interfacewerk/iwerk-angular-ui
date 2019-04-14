const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { parse } = require('node-html-parser');

const projectName = process.argv[2];
if (!projectName) {
  throw new Error('project must be given as argument');
}

const angularJson = JSON.parse(fs.readFileSync('angular.json').toString());

const projectRootPath = angularJson.projects[projectName].sourceRoot;

const object = {};

glob(path.join(projectRootPath, 'app/**/*'), (error, allFiles) => {
  glob(path.join(projectRootPath, 'app/**/*.html'), (error, matches) => {
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
          object[path] = fs.readFileSync(completePath).toString();
        }
      });
    });
    fs.writeFileSync(path.join(projectRootPath, 'assets/examples.json'), JSON.stringify(object));
  });
});

function findMatchingFile(allFiles, shortName) {
  return allFiles.find(file => path.basename(file) === shortName);
}
