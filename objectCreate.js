const print = require('./print')

// 3) Object.create()
//This approach is rarely used but for the sake of variations/options out there in js, it is included here.

const Person1 = function(firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
}

Person1.prototype.calcAge = function(){
  console.log(2022 - this.birthYear);
}

const Student = function(firstName, birthYear, course){
  //this.firstName = firstName;
  //this.birthYear = birthYear;
    Person1.call(this,firstName, birthYear);
    this.course = course;
}

//Linking prototypes
Student.prototype = Object.create(Person1.prototype);

Student.prototype.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}.`)
}

const mike = new Student('Mike','1992','Computer Science');
console.log(mike);

mike.introduce();

mike.calcAge(); //30
