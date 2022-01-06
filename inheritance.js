const print = require('./print')
// Inheritance using classes



class Person{
  constructor(name, year){
    this.name = name;
    this.year = year;
    this.type = "person"
  }

  calcAge(){
    console.log(new Date().getFullYear() - this.year)
  }
}

const ben = new Person("Ben", "2002")
console.log(ben)

class Student extends Person{
  constructor(name, year, batch){
    super(name, year)
    this.batch = batch
  }
  //You have access to all the methods in the parent class, but you can modify/edit that function here if that's want to do.
}

const xiao = new Student("Xiao", 2001, 2023)
console.log(xiao)
xiao.calcAge()
