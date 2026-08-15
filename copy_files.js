const fs = require('fs');
fs.copyFileSync('public/logo.png', 'public/favicon.ico');
fs.copyFileSync('public/logo.png', 'app/icon.png');
console.log('Files copied successfully');
fs.unlinkSync('download_logo.js');
