// Contains DEMO module Person.
//  For webpack assembly.
//  DEMO of  ES6 to engage Babel-webpack-loader
//
class Person {
  constructor( fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }

  greet() {
  var grt = `Hi There my name is  ${ this.name} , my favorite color is ${this.favoriteColor}`;
  console.log(grt);
  return grt;
  }
}

export default Person;
