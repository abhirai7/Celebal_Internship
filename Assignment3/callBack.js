
// Callback version
const fsCallback = require('fs');

fsCallback.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file (callback):', err);
        return;
    }
    console.log('File content (callback):', data);
});
