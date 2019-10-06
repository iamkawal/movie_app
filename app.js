var express = require("express")
var app = express()
var request = require("request")
var bodyParser = require("body-parser")
//var parseJSON = require("parse-json")

app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    request('http://www.omdbapi.com/?s=Harry&apikey=thewdb', function (error, response, body) {
            console.log('error:', error) // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
            console.log('body:', body) // Print the HTML for the Google homepage.
            var results = JSON.parse(body)
            res.render("index")
        })
})



app.listen("2000", function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("Server now listening @ PORT 2000")
    }
})
