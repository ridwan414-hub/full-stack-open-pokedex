#!/bin/bash

echo "Build script starting..."

# Install dependencies
npm install

# Run linting
npm run eslint

# Run tests
npm test

# Build the project
npm run build

echo "Build script completed."
