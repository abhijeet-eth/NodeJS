const { readFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data)
            }
        })
    })
}
//Using promise method
// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

//using sync async
const start = async () => {
    try {
        const first = await getText('./content/first.txt');
        const second = await getText('./content/result-async.txt');

        console.log(first)
        console.log(second)
    } catch (error) {
        console.log(error)
    }

}

start()


