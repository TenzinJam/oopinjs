// 2) Class constructor
// This way of creating an object and instantiating objects out of it works the same way as constructor function. The class key and the rest of the syntax is just a syntactical sugar over class constructor. The syntax was designed this way so that users of other languages can find a familiar syntax in this.

class PersonCl{
  constructor(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Method will be added to .prototype property
  //Notice how even if you have explicitly defined the method here, it does not seem to be copied when the object is instantiated.
  // Notice that how less tedious it looks without the whole "prototype" syntax to add a method to the class.
  calcAge (){
    console.log(2022 - this.birthYear)
  }
}

const joe = new PersonCl('Joe','1993');
console.log(joe);
joe.calcAge();
