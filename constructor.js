// 1) Constructor Function
//You can tell it is a constructor function because it is Uppercased(the first letter of the name)
//This is why they say the OOP in JS is basically a function and you can see these objects are creating using a function. 
const Person = function(name, birthYear){
  this.name = name;
  this.birthYear = birthYear;
}


const jonas = new Person('jonas', 1990);
console.log(jonas);

const ayush = new Person('ayush', 1992);
console.log(ayush);

//the "new" keyword is very powerful. When it is used:

// 1)  an empty object is created,
// 2) makes sure that "this" in the constructor is being referred to the instantiated object it is called on.
// 3) and finally return that object.You can see that in the original constructor above there is no return statement, but the new keyword takes care of that.
// 4) The new key word is also responsible for establishing (the concept of prototypal chain)

Person.prototype.calcAge = function(){
  console.log(2022 - this.birthYear);
}
jonas.calcAge();
ayush.calcAge();
