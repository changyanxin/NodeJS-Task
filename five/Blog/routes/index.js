var express = require('express');
var router = express.Router();
const path = require("path");
const fs = require("fs");
const querystring = require("querystring");
//get data
var filePath = path.join(__dirname,'data.json');
var content = fs.readFileSync(filePath);
content = JSON.parse(content);
console.log(content);
console.log(content.chapterList);
// console.log(content.users[0].password);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/check',function(req,res,next){
  // console.log(req.body);
  if(req.body.username == content.users[0].username 
    && req.body.password == content.users[0].password){
      // console.log("判断");
      res.end("right");
  }else{
    res.end("error username and password");
  }
});
router.get('/list',function(req,res,next){
  // res.write(content.chapterList);
  res.render('list',{chapterList:content.chapterList});
});

module.exports = router;
