// HTTP MODULE HELPS YOU TO CREATE WEB SERVER

const { rmdir } = require('fs')
const http = require('http')
const server = http.createServer(
    (req,res)=>{
        // console.log(req)

        //1st way to output stuff to the webpage
        // res.write('welcome to our home page')

        // 2nd way to output stuff to the webpage
            // you can also use this to create pages
        if (req.url === '/'){
            res.end('welcome to the home page')
        }
        if (req.url === '/about'){
            res.end('welcome to the about page')
        }
        res.end(`
            <h1>404</h1>
            <h3>can't seem to find this page</h3>
            <a href="/">back to home page</a>
        `)
    }
)
server.listen(5000)