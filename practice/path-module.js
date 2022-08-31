//To create path 
const path  = require('path')
// console.log(path)
console.log(path.sep)

//Creating a custopm path
const filePath = path.join('/content','subfolder','test.txt')

console.log(filePath) 

//Retrieving Base from a path
const base = path.basename(filePath)
console.log(base)