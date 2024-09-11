// File: osInfo.js

const os = require('os');

// Retrieve and display various OS-related information
console.log('Operating System Info:');
console.log(`Operating System Name: ${os.type()}`);
console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`Release Version: ${os.release()}`);
console.log(`Host Name: ${os.hostname()}`);
console.log(`Total Memory: ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Free Memory: ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`System Uptime: ${os.uptime()} seconds`);
console.log(`CPU Info:`);
os.cpus().forEach((cpu, index) => {
    console.log(`  CPU ${index + 1}: ${cpu.model}`);
});
console.log(`Home Directory: ${os.homedir()}`);
