const fs = require('fs');
fs.writeFile('test.html','hello', function(error){
    if(error) return console.error(error);
})