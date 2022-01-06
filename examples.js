// const person = {
//   name: "tenzin",
//   gender: "male",

const print = require("./print.js")

//   greet: function(){
//     console.log(`hi, my name is ${this.name}`)
//   }
// }

// console.log(person)

// function person(name, age){
//   return {
//     name: name,
//     age: age,
//     greet: function(){
//           console.log(`hi, my name is ${this.name}`)
//         }
//   }
// }

//Contructor Function

// function Person(name, age){
//   this.name = name,
//   this.age = age
// }

// Person.prototype.greet = function(){
//   console.log(`hi, my name is ${this.name}`)
// }

//new
// 1)  an empty object is created,
// 2) makes sure that "this" in the constructor is being referred to the instantiated object it is called on.
// 3) and finally return that object.You can see that in the original constructor above there is no return statement, but the new keyword takes care of that.
// 4) The new key word is also responsible for establishing (the concept of prototypal chain)

// const ben = new Person("Ben", 19)
// console.log(ben)
// console.log(ben.name)
// ben.greet()
// const mohamed = person("Mohamed", "21")
// console.log(ben)
// console.log(mohamed)




// `` ${}

class Person{
  constructor(name, age){
    this.name = name,
    this.age = age
  }
  greet(){
      console.log(`hi, my name is ${this.name}`)
  }
}

class Student extends Person {
  constructor(name, age, major){
    super(name, age)
    this.major = major
  }
  greet(){
    console.log(`hi, my major is ${this.major}`)
  }
}

const ariel = new Student("Ariel", 24, "CS")
print(ariel)
ariel.greet()
// const ben = new Person("Ben", 19)
// console.log(ben)

