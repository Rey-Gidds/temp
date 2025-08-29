// const path = require('path');
// const {readFileSync , writeFileSync} = require('fs');

// const first = readFileSync('./content/first.txt' , 'utf8');
// const second = readFileSync('./content/second.txt' , 'utf8');

// writeFileSync('./content/third.txt' , 'Appended value' , {flag: 'a'})


// const {readFile , writeFile} = require('fs');


// console.log('start')
// readFile('./content/first.txt' ,'utf8', (err , result) => {
//     if(err) throw err
//     const first = result
//     readFile('./content/second.txt' , 'utf8' , (err , result2) => {
//         if(err) throw err
//         const second = result2
//         writeFile('./content/result-async.txt' , 'Here is the asynchronous result...' , {flag: 'a'} , (err , res) => {
//             if(err) throw err
//             console.log('Done with this task')
//         })
//     })
// })
// console.log('Starting next task')

// const http = require('http')

// const server = http.createServer((req , res) => {
//     if(req.url == '/'){
//         res.end('This is the home page')
//     }
//     if(req.url == '/about'){
//         res.end('This is the about page , sort of...')
//     }
//     res.end(`
//         <h1> Oops this section does not exist , please redirect to this page <a href="/"> Back Home </a> </h1>
//     `)
// })

// server.listen(5000 , () => {
//     console.log('Running server on port 5000')
// })

// const _ = require('lodash')

// const items = [1,[2,3],[4,5]]
// const flattened = _.flattenDeep(items)
// console.log(flattened)
// console.log('Bas karo abhi yaar')

// const path = require('path')
// require(path.resolve(__dirname , 'content' , 'extra' , 'test.js'))

// console.log('first')
// //setTimeout is asynchronous because of which it is executed later even if the second argument is 0 for the function
// setTimeout(() => {
//     console.log('Second task')
// } , 0)
// console.log('third task')

// // acts like a loop whilst being asynchronous and it will be executed afterwards.
// setInterval(() => {
//     console.log('This is the task')
// } , 2000)
// console.log('i will run first')

// const http = require('http')
// const server = http.createServer((req , res) => {
//     console.log('Hello from the server')
//     res.end('Hello server !!!')
// })
// server.listen(5000 , () => {
//     console.log('Listening...')
// })

// const http = require('http')
// const server = http.createServer((req , res) => {
//     setTimeout(() => {
//          // BLOCKING CODE !!! (for all the users requesting the home page.)
//         for(let i = 0 ; i<1000 ; i++){
//             for(let j = 0 ; j<1000 ; j++){
//                 console.log(i , j)
//             }
//         }
//     } , 0)
//     res.end('Home Page')
// })
// server.listen(5000 , () => {
//     console.log('Listening...')
// })

// const EventEmitter = require('events')
// const customEmitter = new EventEmitter()

// customEmitter.on('response' , (name , age) => {
//     console.log(`${name} is ${age} yrs old.`)
// })

// customEmitter.emit('response' , 'Reyansh' , 19)

// const http = require('http')
// const server = http.createServer()

// server.on('request' , (req , res) => {
//     console.log('Request Received.')
// })

// server.listen(3000 , () => { console.log('Server started at port 3000') })

const {writeFileSync} = require('fs')
// for(let i = 0 ; i<100000 ; i++){
//     writeFileSync('./content/bigfile.txt' , 'hello world\n' , {flag: 'a'})
// }

const {createReadStream} = require('fs')
const stream = createReadStream('./content/bigfile.txt' , {
    encoding: 'utf8'
});

stream.on('data' , (result) => {
    console.log(result.length/1024)
})

var fs = require('fs')

const http = require('http')
http.createServer((req , res) => {
    // const data = fs.readFileSync('./content/bigfile.txt')
    // res.end(data);
    const fileStream = fs.createReadStream('./content/bigfile.txt' , 'utf8')
    fileStream.on('data' , (result) => {
        res.end(result)
    })
}).listen(3000 , () => {console.log('Server running on port: 3000')})



















