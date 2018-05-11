#!/bin/sh

npm run pree2e
node ./node_modules/.bin/nodemon \
  -e js,scss,css,html,ts \
  -w src \
  -x "npm run build"
