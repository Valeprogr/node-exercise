const fs = require('fs');

fs.readFile('test.html', 'utf-8', function(error,data){
    if(error){
       return console.error(error); 
    } else{
        console.log(data)
    }
} )