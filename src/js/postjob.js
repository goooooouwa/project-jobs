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
    var a=document.getElementById('editor-container').innerText;
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

function Release(){
    var title=document.getElementById('Title').value;
    var company=document.getElementById('company').value;
    var stime=document.getElementById('stime').value;
    var apply=document.getElementById('apply').value;
    var tags=document.getElementById('Tags').value;
    var salary=document.getElementById('salary').value;
    var category=document.getElementById('category').value;
    var jobtype=document.getElementById('job-type').value;
    var age=document.getElementById('age').value;
    var city=document.getElementById('city').value;
    var country=document.getElementById('country').value;
    var number=document.getElementById('number').value;
    var expirydate=document.getElementById('expiry-date').value;
    var description=document.getElementById('editor-container').innerText;
    jobinfo=[title, company, stime,apply, tags, salary, category, jobtype,age, city, country, number, expirydate,description]
    jobinformation=
        {
            Title: title,
            Company: company,
            Stime: stime,
            Apply: apply,
            Tags: tags,
            Salary: salary,
            Category: category,
            jobtype: jobtype,
            Age: age,
            City: city,
            Country: country,
            Number: number,
            Expirydate: expirydate,
            Description: description
        };
    
    if(isNull()==false){
        alert("Please refine your infomation!");
    }
   console.log(jobinformation);
}