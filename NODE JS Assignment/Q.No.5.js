// File: pathManipulation.js

const path = require('path');

// Define a sample file path
const filePath = '/Users/username/Documents/project/file.txt';

// Display the directory name of the file
console.log(`Directory: ${path.dirname(filePath)}`);

// Display the base (file) name
console.log(`Base Name: ${path.basename(filePath)}`);

// Display the file extension
console.log(`Extension: ${path.extname(filePath)}`);

// Parse the file path into an object
const parsedPath = path.parse(filePath);
console.log('Parsed Path:', parsedPath);

// Construct a path from segments
const newFilePath = path.join(parsedPath.dir, 'newfile.txt');
console.log(`New File Path: ${newFilePath}`);

// Normalize a path (handling extra slashes, etc.)
const normalizedPath = path.normalize('/Users//username/Documents/../Documents/project/file.txt');
console.log(`Normalized Path: ${normalizedPath}`);

// Resolve an absolute path from relative segments
const absolutePath = path.resolve('project', 'file.txt');
console.log(`Resolved Absolute Path: ${absolutePath}`);
