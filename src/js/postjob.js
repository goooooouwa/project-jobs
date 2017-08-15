function A(){
    document.getElementById('category').value=
        document.getElementById('SS').options[document.getElementById('SS').selectedIndex].value;
}

function B(){
    document.getElementById('job-type').value=
        document.getElementById('job-typess').options[document.getElementById('job-typess').selectedIndex].value;
}

function C(){
    document.getElementById('country').value=
        document.getElementById('countryss').options[document.getElementById('countryss').selectedIndex].value;
}
function D(){
    document.getElementById('age').value=
        document.getElementById('agess').options[document.getElementById('agess').selectedIndex].value;
}

function Description(){
    var a=quill.container.firstChild.innerText;
    document.getElementById('Description').value=a;
}

var jobinformation=Object;
var jobinfo=[];
var des;

function isNull(){
    var count=0;
    for(var i=0;i<jobinfo.length;i++){
       if(jobinfo[i]===''){
           count++;
       }
    }
   for(var j=6;j<8;j++){
        if(jobinfo[j]===''){
            count++;
        }
    }

    for(var m=9;m<jobinfo.length-1;m++){
        if(jobinfo[m]===''){
            count++;
        }
    }
    if(jobinfo[jobinfo.length-1].length===1) {
        count++;
    }
    if(count!==0)
        return false;
}

function  Save() {
    var description=quill.container.firstChild.innerHTML;
    var title=document.getElementById('Title').value;
    var company=document.getElementById('company').value;
    var apply=document.getElementById('apply').value;
    var tags=document.getElementById('Tags').value;
    var salary=document.getElementById('salary').value;
    var category=document.getElementById('category').value;
    var jobtype=document.getElementById('job-type').value;
    var age=document.getElementById('age').value;
    var city=document.getElementById('city').value;
    var country=document.getElementById('country').value;
    var number=document.getElementById('number').value;
    var etime=document.getElementById('etime').value;

    jobinfo=[title, company,apply, tags, salary, category, jobtype,age, city, country, number, etime,description]
    jobinformation=
        {
            title: title,
            company: company,
            apply: apply,
            tags: tags,
            salary: salary,
            category: category,
            jobtype: jobtype,
            age: age,
            city: city,
            country: country,
            number: number,
            duration: etime,
            description: description,
            status:1,
        };

    if(isNull()==false){
        alert("Please refine your infomation!");
    }else {
        $.post('http://47.93.200.205:8080/account/post', {
            data: JSON.stringify(jobinformation),
            dataType: 'JSONP',
            crossDomain: true
        }, function (data) {
            postSuccess(data);
        }).error(function (data) {
            postFailed(data.responseText);
        });
    }
    console.log(jobinformation);
    return jobinformation;
}

function Release(){

    var description=quill.container.firstChild.innerHTML;
    var title=document.getElementById('Title').value;
    var company=document.getElementById('company').value;
    var apply=document.getElementById('apply').value;
    var tags=document.getElementById('Tags').value;
    var salary=document.getElementById('salary').value;
    var category=document.getElementById('category').value;
    var jobtype=document.getElementById('job-type').value;
    var age=document.getElementById('age').value;
    var city=document.getElementById('city').value;
    var country=document.getElementById('country').value;
    var number=document.getElementById('number').value;
    var etime=document.getElementById('etime').value;
   // var description=document.getElementById('q1-editor').innerText;
    jobinfo=[title, company,apply, tags, salary, category, jobtype,age, city, country, number, etime,description]
    jobinformation=
        {
            title: title,
            company: company,
            apply: apply,
            tags: tags,
            salary: salary,
            category: category,
            jobtype: jobtype,
            age: age,
            city: city,
            country: country,
            number: parseInt(number),
            duration: parseInt(etime),
            description: description,
            status:0,
        };
    
    if(isNull()==false){
        alert("Please refine your infomation!");
    }else {
        $.post('http://47.93.200.205:8080/account/post', {

            data: JSON.stringify(jobinformation),
            dataType: 'JSONP',
            crossDomain: true
        }, function (data) {
            postSuccess(data);
        }).error(function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest+"\n"+textStatus+"\n"+errorThrown);
        });
    }
   console.log(jobinformation);
    return jobinformation;
}
function postSuccess(data) {
    alert(data.msg);
}


