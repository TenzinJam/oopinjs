function person(name, age){
  return {
    name: name,
    age: age,
    greet: function(){
      console.log(`My name is ${this.name} and I am ${age} years old`)
    }
  }
}

const ten = person("tenzin", 30)

const ben = person("Ben", 19)
console.log(ten)
ten.greet()
