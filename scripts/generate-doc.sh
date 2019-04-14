# $1 path to src folder
# $2 path to tsconfig.json file
# $3 project name where to take examples from
./node_modules/.bin/compodoc --output $1 -p $2 --exportFormat json
node ./scripts/generate-examples.js $3