class Post{
    constructor(title, function1, company, city, salary, sdate, etime, description, number, education, age, category, jobtype){
        this.title = title;
        this.function1 = function1;
        this.company = company;
        this.city = city;
        this.salary = salary;
        this.sdate = sdate;
        this.etime = etime;
        this.description = description;
        this.number = number;
        this.education = education;
        this.age = age;
        this.category = category;
        this.jobtype = jobtype;
    }
}
module.exports = Post;