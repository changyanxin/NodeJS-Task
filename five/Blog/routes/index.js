var express = require('express');
var router = express.Router();
var path = require("path");
var fs = require("fs");
const querystring = require("querystring");
//get data
var path = path.join(__dirname,'data.json');
// 二进制数据
var content = fs.readFileSync(path);
content = JSON.parse(content);
// console.log(content);
// console.log(content.users[0].password);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/list',function(req,res,next){
  console.log(req.body);
  if(req.body.username == content.users[0].username 
    && req.body.password == content.users[0].password){
      console.log("判断");
      console.log("right");
  }else{
    console.log("error");
  }
});

module.exports = router;
