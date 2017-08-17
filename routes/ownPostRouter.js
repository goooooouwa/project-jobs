const router = require('express').Router();
router.post('/',function (req,res) {
    let username=req.session.username;
    let sql_own=`select id from usertable where username='${username}'`;
    connection.query(sql_own,function (err,result) {
        if (err || !result.length){
            res.end();
        }else{
    let data=req.body;
let userid=JSON.parse(JSON.stringify(result))[0].id;
    let sql=`insert into cgc_post(userid,title,catagory,company,salary,jobtype,city,country,description,apply,tags,sdate,edate,age,number,status) values(${userid},'${data.title}','${data.catagory}','${data.company}','${data.salary}','${data.jobtype}','${data.city}','${data.country}','${data.description}','${data.apply}','${data.tags}',unix_timestamp(now()),unix_timestamp(now())+${data.duration}*24*3600,'${data.age}',${data.number},${data.status})`;
    connection.query(sql,function (err,result) {
        if (!err){
            res.json({code:0,msg:'添加成功'});
        }
        else{
            res.json({code:1,msg:'添加失败'});
        }
    });
}
});});
router.delete('/:jobid',function (req,res) {
    let id=req.params.jobid;
    let sql=`delete from cgc_post where id=${id}`;
    connection.query(sql,function (err,result) {
        if (!err){
            res.json({code:0,msg:'删除成功'});
        }
        else{
            res.json({code:1,msg:'删除失败'});
        }
    })
});
router.put('/',function (req,res) {
    let data=req.body;
    let sql=`update cgc_post set title='${data.title}',company='${data.company}',jobtype='${data.jobtype}',catagory='${data.catagory}',salary='${data.salary}',jobtype='${data.jobtype}',city='${data.city}',country='${data.country}',description='${data.description}',apply='${data.apply}',tags='${data.tags}',edate=unix_timestamp(now())+${data.duration}*24*3600,age='${data.age}',number=${data.number},status=${data.status} where id=${data.id}`;
    console.log(sql);
    connection.query(sql,function (err,result) {
        if (!err){
            res.json({code:0,msg:'更新成功'});
        }
        else{
            res.json({code:1,msg:'更新失败'});
        }
    })
});
router.get('/',function (req,res) {
    let username=req.session.username;
    let sql_own=`select id from usertable where username='${username}'`;
    connection.query(sql_own,function (err,result) {
        if (err || !result.length){
            res.end();
        }else{
            let userid=JSON.parse(JSON.stringify(result))[0].id;
            let sql=`select id,jobtype,title,count,company,catagory,salary,from_unixtime(sdate,'%Y-%m-%d') as sdate,country,city,description,status,age,number,tags,apply,floor((edate-sdate)/(24*3600)) as duration from cgc_post where userid=${userid} order by sdate desc`;
            connection.query(sql,function (err,result) {
                if (err){
                    res.end();
                }else{
                    res.json(JSON.parse(JSON.stringify(result)));
                }
            });
        }
    });
});
module.exports=router;