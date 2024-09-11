// File: fileCopy.js

const fs = require('fs');

// Define the input and output file names
const inputFile = 'input.txt';
const outputFile = 'output.txt';

// Read content from the input file
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        // Handle file read error
        console.error(`Error reading the file ${inputFile}:`, err);
        return;
    }

    // Write content to the output file
    fs.writeFile(outputFile, data, (err) => {
        if (err) {
            // Handle file write error
            console.error(`Error writing to the file ${outputFile}:`, err);
            return;
        }

        console.log(`Content successfully copied from ${inputFile} to ${outputFile}`);
    });
});
