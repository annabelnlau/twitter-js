const express = require('express'); 
const app = express(); 
const nunjucks = require('nunjucks');
const chalk = require('chalk');
const prompt = chalk.green('\nprompt >');
const routes = require('./routes')
app.use('/', routes);

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

app.use(express.static('public'))

app.use(function(req,res,next) {
    //setTimeout(function() {
            console.log(req.path)
            console.log(req.method)
            console.log('First middleware') // how do we check middleware, it shows up on our terminal
            //console.log('GET / ', res) //we are trying to custom log middleware to show the response status code GET / 200
            next();
        })

app.listen(3000, function(){
    console.log('server is listening')
  })


// app.get('/', function(request, response, next){
//     //response.send('<h1>Welcome to the fiesta!!!!!!!</h1>')
//     const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//     response.render( 'index', {title: 'Hall of Shame', people: people} );
//   })

// app.get('/news', function(request, response, next){
//     response.send('<h1>News!!!!!</h1>')
//     next(); //was next properly invoked here
//   })

//   app.get('/special/', function(request, response, next){
//     response.send('<h1>you reached the special area</h1>')
//     next();
//   })

