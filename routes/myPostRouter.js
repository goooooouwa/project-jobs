const router = require('express').Router();
router.post('/add',function (req,res) {
    if (req.session.username){
        res.redirect('/account/login');
        return;
    }
    let data=req.body;
    let sql=`insert into cgc_post(title,company,salary,country,city,description) values('${data.title}','${data.company}','${data.salary}','${data.country}','${data.city}','${data.description}')`;
    connection.query(sql,function (err,result) {
        if (!err){
            res.json({code:0,msg:'添加成功'})
        }
        else{
            res.json({code:1,msg:'添加失败'});
        }
    })
});
module.exports=router;