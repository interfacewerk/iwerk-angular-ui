#!/bin/sh

yarn run pree2e
yarn run nodemon \
  -e js,css,html,ts \
  -w e2e -w src \
  -x "yarn ng e2e --webdriver-update=false"
