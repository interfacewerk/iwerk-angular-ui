#!/bin/bash

cp -R src/app/ui build/
find ./build -name "*.spec.ts" -exec rm {} \;
