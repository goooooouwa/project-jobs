
/**
 * lodash是一个Javascript工具库，其merge方法将会将其参数的所有属性合并到第一个参数，
 * 并返回合并结果。这里我们将defaultMail，mail依次合并到一个空对象中，事实上模拟了默认参数的行为。
 */
var _ = require('lodash');	
var nodemailer = require('nodemailer');

var config = {
    host: 'smtp.163.com',
    port: 25,
    auth: {
        user: '13645563853@163.com',
        pass: 'zzclcs'
    }
};
    
var transporter = nodemailer.createTransport(config);

var defaultMail = {
    from: 'Rabbitc <13645563853@163.com>',
    text: 'test text',
};

module.exports = function(mail){
    // 应用默认配置
    mail = _.merge({}, defaultMail, mail);
    
    // 发送邮件
    transporter.sendMail(mail, function(error, info){
        if(error) return console.log(error);
        console.log('mail sent:', info.response);
    });
};