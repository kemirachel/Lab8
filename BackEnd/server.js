const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');

{/*Made a new folder in React App and called BackEnd and added a file to that folder called
server.js. */}
{/*In server.js i intalled express and cors.*/}
{/*In server.js in the terminal section i intalled body parser.*/}



{/*in my server.js i added a few lines of code to to avoid a CORS error.*/}
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

const path = require('path');
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

{/*Changed the React app so that it now makes a post request to the server (sending a
”book” object to the server).*/}

{/*Added a post method on the Express Server */}
app.post('/api/book', (req,res) =>{
    console.log(req,body);
    res.send("Book Created")
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

{/*added api books here from lab 5 */}
app.get('/api/books', (req, res)=>{
    const data = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
        ];
        
        res.json({
            books:data,
            "MyMessage":"Hello Data"
        })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})