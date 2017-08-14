const router = require('express').Router();
router.get('/list',function (req,res) {
    let keyword=req.query.keyword || '';
    let jobtype=req.query.jobtype || '';
    let occupation=req.query.occupation || '';
    let sql=`select id,title,company,salary,from_unixtime(sdate,'%Y-%m-%d') as sdate,country,city from cgc_post where title like '%${keyword}%'`;
    sql=jobtype==''?sql:sql+`and jobtype=='${jobtype}'`;
    sql=occupation==''?sql:sql+`and occupation=='${occupation}'`;
    sql+='and status=1 and edate>unix_timestamp(now()) order by sdate desc'
    connection.query(sql,function (err,result) {
        if (err){
            res.end();
        }else{
            res.json(JSON.parse(JSON.stringify(result)));
        }
    })
});
router.get('/detail',function (req,res) {
    let id=req.query.id;
    let sql=`select id,title,company,salary,from_unixtime(sdate,'%Y-%m-%d') as sdate,country,city,description from cgc_post where status=1 and edate>unix_timestamp(now()) and id=${id} order by sdate desc`;
    connection.query(sql,function (err,result) {
        if (err){
            res.end();
        }else{
            res.json(JSON.parse(JSON.stringify(result)));
        }
    })
});
module.exports = router;