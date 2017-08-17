const router = require('express').Router();
router.get('/list',function (req,res) {
    let keyword=req.query.keyword || '';
    let jobtype=req.query.jobtype || '';
    let catagory=req.query.catagory || '';
    let page=parseInt(req.query.page);
    let sql=`select id,catagory,title,company,salary,from_unixtime(sdate,'%m-%d') as sdate,country,city,jobtype from cgc_post where (title like '%${keyword}%' or company like '%${keyword}%')`;
    let sql_count=`select count(*) as count from cgc_post where (title like '%${keyword}%' or company like '%${keyword}%')`;
    sql=jobtype==''?sql:sql+` and jobtype='${jobtype}'`;
    sql_count=jobtype==''?sql_count:sql_count+` and jobtype='${jobtype}'`;
    sql=catagory==''?sql:sql+` and catagory='${catagory}'`;
    sql_count=catagory==''?sql_count:sql_count+` and catagory='${catagory}'`;
    sql+=' and status=0 and edate>unix_timestamp(now()) order by sdate desc';
    sql_count+=' and status=0 and edate>unix_timestamp(now())';
    sql=isNaN(page)?sql:sql+` limit 20 offset ${page*20}`;
    connection.query(sql,function (err,result) {
        if (err){
            res.end();
        }else{
            let data=JSON.parse(JSON.stringify(result));
            console.log(sql_count);
            connection.query(sql_count,function (err,result) {
                if(err){
                    res.json(data);
                }else{
                    data={data,count:JSON.parse(JSON.stringify(result))[0].count};
                    console.log(data);
                    res.json(data);
                }
            });
        }
    });
});
router.get('/detail',function (req,res) {
    let id=req.query.jobid;
    let sql=`select id,count,title,company,catagory,jobtype,salary,from_unixtime(sdate,'%Y-%m-%d') as sdate,country,city,description,age,number,tags,apply from cgc_post where status=0 and edate>unix_timestamp(now()) and id=${id}`;
    connection.query(sql,function (err,result) {
        if (err){
            res.end();
        }else{
            res.json(JSON.parse(JSON.stringify(result)));
            let sql_count=`update cgc_post set count=count+1 where id=${id}`;
            connection.query(sql_count);
        }
    })
});
router.get('/similar',function (req,res) {
    let id=req.query.jobid;
    let sql=`select catagory,jobtype from cgc_post where id=${id}`;
    connection.query(sql,function (err,result) {
        if (err || !result.length){
            res.end();
        }else {
            let {catagory,jobtype}=JSON.parse(JSON.stringify(result))[0];
            let sql_query=`select id,count,title,company,catagory,jobtype,salary,from_unixtime(sdate,'%Y-%m-%d') as sdate,country,city,description,age,number,tags,apply from cgc_post where status=0 and edate>unix_timestamp(now()) and catagory='${catagory}' and jobtype='${jobtype}' limit 10`
            connection.query(sql_query,function (err,result) {
                if(err){
                    res.end();
                }else{
                    res.json(JSON.parse(JSON.stringify(result)));
                }
            })
        }
    });
});
router.get('/hot',function (req,res) {
    let sql=`select id,count,title,company,catagory,jobtype,salary,from_unixtime(sdate,'%Y-%m-%d') as sdate,country,city,description,age,number,tags,apply from cgc_post where status=0 and edate>unix_timestamp(now()) order by count desc limit 10`;
    connection.query(sql,function (err,result) {
        if (err){
            res.end();
        }else{
            res.json(JSON.parse(JSON.stringify(result)));
        }
    })
});
module.exports = router;