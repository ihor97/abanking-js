const fs = require('fs/promises')

fs.writeFile('./text.txt','hello').then(
    ()=>{
        console.log('res');
    }
)

console.log('dsdsds');