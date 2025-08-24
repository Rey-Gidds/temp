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

const _ = require('lodash')

const items = [1,[2,3],[4,5]]
const flattened = _.flattenDeep(items)
console.log(flattened)