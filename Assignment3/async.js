const fs = require('fs').promises;

async function readFileContent() {
    try {
        const data = await fs.readFile('example.txt', 'utf8'); 
        console.log('File content:', data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

module.exports = { readFileContent };