const express = require('express');
const app = express(); 
const chalk = require('chalk');
const prompt = chalk.green('\nprompt >')


app.use(function(req,res,next) {
    //setTimeout(function() {
            console.log(req.path)
            console.log(req.method)
            console.log('First middleware') // how do we check middleware, it shows up on our terminal
            //console.log('GET / ', res) //we are trying to custom log middleware to show the response status code GET / 200
            next();
        })

app.listen(3000, function(){
    console.log('server listening')
  })


app.get('/', function(request, response, next){
    response.send('<h1>Welcome to the fiesta!!!!!</h1>')
  })

app.get('/news', function(request, response, next){
    response.send('<h1>News!!!!!</h1>')
    next(); //was next properly invoked here
  })

  app.get('/special/', function(request, response, next){
    response.send('<h1>you reached the special area</h1>')
    next();
  })

