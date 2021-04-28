'use strict';
/*
function calAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName);
  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW varible with same name as outer scope's varible
      const firstName = 'Steven';

      // Reassining outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);// NOT // because const and let variabels are block scoped, so they are avalible only inside the block
    console.log(millenial);
    // console.log(add(2, 3)); // NOT because function is also block scope
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calAge(1991);
// console.log(age); // NOT  const age is not accesable because the scope chain is one way street. Only an inner scope can have access to the variables of its outer scope, but not the other way around
// printAge(); // NOT
*/

// HOISTING - WINDOWANIE

// Variables
// console.log(me);
// // console.log(job);
// console.log(year);
/*
var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Function

// Function declacation

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArr);
console.log(addArr(2, 3)); // ERROR because we want to call undifined (2,3)

function addDecl(a, b) {
  return a + b;
}

// Function expresion

const addExpr = function (a, b) {
  return a + b;
};

// Arrow function

let addArr = (a, b) => a + b; // ERROR because
// Example

// 0 is a falsy value and so we can
// Hoisting works that way that numProducts is not 10 but "Undefind"
console.log(numProducts);
if (!numProducts) deleteShoppingCard();

var numProducts = 10;

function deleteShoppingCard() {
  console.log('All products deleted');
}
*/
/*
var x = 1; // Variables declared with var will create a propperty on the global window object.
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);
*/
/*
console.log(this); // calAgeArrow keyword *

const calAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calAge(1991);
// "This" keyword is " this " keyword of it's parents scope and in this case parents is window
const calAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calAge();

const f = jonas.calcAge; // "This" keyward is now undefined because f is just a regular function.
*/

// New lesson // Regular function vs. Arrow function
/*
var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this); // This keyWord shoud be the Jonas but not function "isMillenial" make it's "undefind";
    console.log(2037 - this.year);

    // SOLUTION 1
    // const self = this; // self or that
    // // When we hava a function inside of a method
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // SOLUTION 2
    // When we hava a function inside of a method
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  // NOT !
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
    // YES !
    // greet: function () {
    //   console.log(this);
    //   console.log(`Hey ${this.firstName}`);
  },
}; // Will print ` Hey undefined ` global scope* Reason is errow function don't have own keyword, and it's get perents keyword and the perenst keyword is variable jonas * and variable shows like undefined
jonas.greet();
jonas.calcAge();
// console.log(this.firstName);

// Arguments keyword exist but it only exist iin regular function.
// YES !
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);
// NO !
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(1, 5, 8);
*/

// Primitives vs Object
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 30
console.log(oldAge); // 31

// Another scenario which has an object.

const me = {
  name: 'Jonas',
  age: 30,
};
const firend = me;
firend.age = 27;
console.log('Friend', firend); // 27
console.log('Me', me); // 27

/* // Primitives vs Object 
Primitives ( Primitives types) : 
1. Number 
2. String 
3. Boolean 
4. Undefined 
5. Null 
6. Symbol 
7. Biglnt 

Objects ( Reference types) : 
1. Object literal 
2. Arrays 
3. Function 
...  */

// Primitives  types
let lastName = 'Wiliams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName); // lastName = Davis oldLastName = Wiliams. And this is work because each primitive value will be saved into its own piece of memory in the stack.

// Referece types
const jessica = {
  fierstName: 'Jassica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis'; // Same adress as Jassica variables in call stack
console.log('Before marrige:', jessica);
console.log('Afrer marrige:', marriedJessica);

// marriedJessica = {}; Don't work

// Copying object
const jessica2 = {
  fierstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // New object created in the heap and jassicaCopy now pointing to that object. Using this technique only works on the fierst level. (If we have an object inside the object)
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary'); // Add object into jessicaCopy too, not we want to...Because ocject.assign point to the same adress into the heap in bouth case.
jessicaCopy.family.push('John'); // Add object into jessicaCopy too, not we want to...Because ocject.assign point to the same adress into the heap in bouth case.

console.log('Before marrige:', jessica2);
console.log('Afrer marrige:', jessicaCopy);
