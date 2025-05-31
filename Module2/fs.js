// 1. synchronous file system operations
// note: file read > I/O intensive task > single thread > didn't go thread pool

// 2. Asynchronous 
// note: file read > single thread > event loop > thread Pool > task Completed


const fs = require('fs');

fs.readFile('./hello.txt', {encoding: 'utf-8'}, (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});