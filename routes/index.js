const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweetList = tweetBank.list(); //what is list here
  res.render( 'index', { tweets: tweetList } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var data = tweetBank.find({name: name});
  res.render( 'index', { tweets: data } );
});

module.exports = router;