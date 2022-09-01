const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8', (err,result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    first = result
    writeFile('./content/result-async.txt',`Here is the resultt : ${first}`,(err, result)=>{
        if (err){
            console.log(err)
            return
        }
        console.log(result)
    })
})