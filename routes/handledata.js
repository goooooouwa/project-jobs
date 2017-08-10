
var data = require('../db/IT_data');
var Post = require('../db/db');
var express = require('express');
var url = require('url');
var superagent = require('superagent');
var cheerio = require('cheerio');
var eventproxy = require('eventproxy');
let app = express();
var targetUrl = 'http://jobs.zhaopin.com/584346627252514.htm';


var getDetailInfomation = function(targetUrl,data,ID){
     superagent.get(targetUrl)
    .end(function (err, sres) {
      // 常规的错误处理
      if (err) {
        console.log(err);
      }else{
        var $ = cheerio.load(sres.text);
        let items = [];
        $('.terminalpage-left .terminal-ul.clearfix li').each(function (idx, element) {
            let $element = $(element);
            items.push($element.text())
        });
        let des = $('div.tab-cont-box div.tab-inner-cont').text().slice(50,200);  //获取简书的200字
        let item = simpleInfo(items);
        if(JSON.stringify(item) !== '{}'){
            //console.log(item)
            handle(item, des, data,ID);
        }
      }
    });
}
var simpleInfo = function(items){
    let sinfo = {};
    for(let i=0; i<items.length; i++){
        let arr = deleString(items[i]);
        sinfo[`n-${i}`] = arr[1];
    }
    return sinfo;
}
var deleString = function(s){   ///分解字符串根据：
    return s.split('：');
}

var handle = function(item,des, data,ID){  //用作接收数据函数,最后得到对象
    let posinfo = new Post('', data['zwzp'], data['gsmc'], item['n-1'], item['n-0'],item['n-2'], '30', des, item['n-6'], item['n-5'], '', item['n-7'], item['n-3']);
    addInfoTodb(posinfo,ID);
}


var firstStep = function(data){//获取data里面重要的数据
    //console.log(data["itinfodate"])
    let arr = data["itinfodate"];
    let ID = '2000'
    for(let i=0; i<arr.length; i++){
       // console.log(arr[i]["zpdz"]);
       getDetailInfomation(arr[i]["zpdz"], arr[i], ID);
       ID++;
    }
}


//===============将获取的信息存放到数据库中======================\\
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'zpinfo'
});

connection.connect();       
firstStep(data);
var addInfoTodb = function(posinfo, ID){
    var  addSql = 'INSERT INTO cgc_post(title,function1,company,city,salary,sdate,etime,desciption,number,education,age,category,jobtype,id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    var  addSqlParams = [posinfo.title, posinfo.function1, posinfo.company, posinfo.city, posinfo.salary, posinfo.sdate, posinfo.etime, posinfo.description, posinfo.number, posinfo.education, posinfo.age, posinfo.category, posinfo.jobtype,ID];
    //增
    connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result);        
       console.log('-----------------------------------------------------------------\n\n');  
});
}
//connection.end()
//==================================================\\


/* item des 
{ 'n-0': '10001-15000元/月',
  'n-1': '北京-朝阳区',
  'n-2': '2016-10-17 00:00:20',
  'n-3': '全职',
  'n-4': '1-3年',
  'n-5': '本科',
  'n-6': '1人 ',
  'n-7': 'WEB前端开发',
  'n-8': undefined }
  */
