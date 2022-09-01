const { readFileSync, writeFileSync } = require('fs')

//reading a file
const first = readFileSync('./content/first.txt', 'utf8')
console.log(first)

//writing a file (if there is not a file, it will create one)

writeFileSync('./content/result-sync.txt', `here is the result ${first}`)

// const read = readFileSync('./content/result-sync.txt', 'utf8')
// console.log(read)

//if we want to append the data (an not overwrite) in a file using 'writeFileSync' 
//then use {flag: 'a'}
writeFileSync('./content/result-sync.txt', `here is the result ${first}`,{flag: 'a'})
const read = readFileSync('./content/result-sync.txt', 'utf8')
console.log(read)