// ***FILE SYSTEM MODULE***
// there are two kinds of file systems, async and sync

// -----SYNC-----
const {readFileSync, writeFileSync} = require('fs')

// READ FILE
// const first = readFileSync('./filesystem_1.txt', 'utf-8')
// const second = readFileSync('./filesystem_2.txt', 'utf-8')
// console.log(first, second)

// WRITE FILE
    // (new file)if you specify a file that doesn't exist, that file will be created
    // if you specify a file that exists, the contents of the file will be overwritten with you input
    
// writeFileSync(
//     './filesystem_combined.txt', 
//     "here is the result"
// )
    // if you want to append to existing file, use a third argument "{flag: 'a'}"
// writeFileSync(
//     './filesystem_1.txt', 
//     "appended text", 
//     {flag: 'a'}
// )


// -----ASYNC-----
const {readFile, writeFile} = require('fs')

// READ FILE
// if you want to open two files and have them both accessible at the same time
// you need to do readFile inside readFile
// cause this is async
readFile(
    './filesystem_1.txt',
    'utf-8',
    (err, result) => {
        if (err){
            console.log(err)
            return
        }
        const first = result
        readFile('./filesystem_2.txt', 'utf-8', (err, result) => {
            if (err){
                console.log(err)
                return
            }
            const second = result

            // when you run node with this block, the console result will be "undefined"
            // but the operation will be successful (new file created)
            writeFile(
                './async_filesystem_result.txt',
                `${first} ${second}`,
                (err, result)=> {
                    if (err){
                        console.log(err)
                        return
                    }
                    console.log(result)
                }
            )
        })
    }
)