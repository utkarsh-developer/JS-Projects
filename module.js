const color = require('cli-color')
console.log(color.green('Hello Node js'))

const auth = require('./auth')

auth.register('codersGyan')
auth.login('coder', 'secret')

//Core modules

const path = require('path')
//dirname
console.log('Folder name: ', path.dirname(__filename));

//filename
console.log('Folder name: ', path.basename(__filename));

//Extension
console.log('Ext name: ', path.extname(__filename));
///Parse
console.log('Ext name: ', path.parse(__filename));
///Join
console.log('Ext name: ', path.join(__dirname, 'order', 'app.js'));

const fs = require('fs')
///Nake a folder
// fs.mkdir(path.join(__dirname, '/test'), (err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('Folder created...')
// })

///If file already exists then it overwrites the file
///otherwise create a new file
fs.writeFile(path.join(__dirname, 'test', 'test.txt'), 'Hello Node', (err)=>{
    if(err){
        throw err;
    }

    fs.appendFile(path.join(__dirname, 'test', 'test.txt'), 'More data', (err)=>{
        if(err){
            throw err;
        }
        console.log("File appended");
    }
    )

    //console.log('File created....')
}
)
