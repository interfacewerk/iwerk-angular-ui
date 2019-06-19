#!/bin/sh

npm run pree2e
node ./node_modules/.bin/nodemon \
  -e js,css,html,ts \
  -w e2e -w src \
  -x "npm run ng -- e2e iwerk-angular-ui-e2e --webdriver-update=false"
