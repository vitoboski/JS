'use strict';

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

/// Function that will return an array  ///

//We can have a function that will return an array and then we can immediately restruct the result into the different variables. And this allows us to return multiple values frome a function. SHOW DOWN HERE

//   order: /* This is a method*/ function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// And then in the outside we could wriete " Receive 2 return values frome a function " "
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse); // Will print: Garlic Bread Pizza
// };

// // This is the way how to retrieve elements frome array without restructuring.
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// With restructuring we declare 3 variables at the same time.
/*
const [x, y, z] = arr;
console.log(x, y, z); // Will print: 2 3 4

// JS will take fierst and second element of array
// const [first, second] = restaurant.categories;
// console.log(first, second); // Print: Italian Pizzeria

// If we want to take fierst and third we simply leave a hole in destructuring operator.

// const [first, , second] = restaurant.categories;
// console.log(first, second); // Print: Italian Pizzeria

// If the owner of restaurant decide to swich the main and the secondary category.

// Whihout destructuring!

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Print: Italian Vegetarian

// Switching variables;
// const temp = main;
// main = secondary; // We could not just do main equal secondaty, and secondary equals main because by then we would already have overwritten the main variable
// secondary = temp;

// Another example //
// const notForLong = first;
// first = second;
// second = notForLong;
// console.log(first, second);

// With destructuring!

[main, secondary] = [secondary, main];
console.log(main, secondary); // Print Vegetarian Italian

console.log(restaurant.order(2, 0)); // Will ptint  ["Garlic Bread", "Pizza"]

// Receive 2 return values frome a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Will print: Garlic Bread Pizza

// Nested destructuring
// What we mean is: if we have one array inside of another
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // Will print:  2 (2) [5, 6]
// // If we need individual values
const [i, , [j, k]] = nested;
console.log(i, j, k);
*/
/*
// If we have an array that is shorter than we might think, then we might try to unpack the array in position that don't even exist.

// Default values
// We have array [8,9] and then we are trying to distracture it.
let [p, q, r] = [8, 9];
console.log(p, q, r); // Print 8 9 undefined, it's try to read element at position number two. But we can sat default values. 
let [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);// Print 8 9 undefined, it's try to read element at position number two, and 'r' will become 1. This can be useful, for exampele, when we get data frome an API. 
*/

/// OBJECT DESTRUCTURING ///

// New way to write ocject literals 1), 2), 3).
// 3) We can now actually compute property names instead of having to write them out manually and literaly
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  // thu: { // OLD, and NEW below:
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours:openingHours, // Old way, copy name
  // ES^ enchance object literals

  // 1)
  openingHours, // New way

  // 2) Is about writing the methods
  // order: function (starterIndex, mainIndex) { *** OLD VERSION, and below is new version

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // Insted of difining the parameters manually, we can just pass an object into a function as an argument, and the fucntion will then immediately desctructure that object.
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    // console.log(
    // //   `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    // );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    // console.log(mainIngredient);
    // console.log(otherIngredients);
  },
};
//  Working With Strings - Part 3

// Split and join

// The split() method is used to split a string into an array of substrings, and returns the new array.

// Tip: If an empty string ("") is used as the separator, the string is split between each character.

// Note: The split() method does not change the original string.
/*
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// Join mathod, that is oposite of split

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Result of .join is a string not an array!

// Capitalize with use function:

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // another way to do this
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schemedmann');

// Padding in string is adding a space or other character at the beginning or end of a string. ... Padding in string is adding a space or other character at the beginning or end of a string. The String class has String. PadLeft() and String. PadRight() methods to pad strings in left and right sides.

const massage = 'Go to gate 23!';
console.log(massage.padStart(20, '+').padEnd(30, '+')); // fierst argument is length that we want for the string, and secound character that we want to pad the string with
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// Real World example of padding: when you see credit card number on internet you never see the entire number. Usualy you see the last four digits and the rest is masked with some symbol. And now we emplement function that do this:

const maskCreditCard = function (number) {
  const str = number + ''; // This trick give as number as a string, and this is work becouse if one of the operands of the plus sign is a string it will convert all the operands to a string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(944984984947558));
console.log(maskCreditCard('6464654651626561568468468'));

// The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

const massage2 = 'Bad waether... All Departues Delayes...';

console.log(massage2.repeat(5));

const planesInLine = function (params) {
  console.log(`There are ${params} planes waiting`);
};
planesInLine(5);

*/

//  Working With Strings - Part 2
// Example 1 : Changing a case of a string.
/*
const airline = 'Tap Air Portugal';
console.log(airline.toLocaleLowerCase()); // Doesn't require any argument at all
console.log(airline.toUpperCase());

// Practical example to fix the capitalization in name:

const passenger = 'jOnAS'; // Should look like " Jonas "
// Fix
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Example 2: Check (comparing) emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io  \n'; // \n - is enter *
// We try to convert one for another and check are they the same...In this case is just a metter of capitalization.
// 1. Step: convert to lowerCase

const lowerEmail = loginEmail.toLowerCase();
// 2. Get rid of all the whitespace and enter (also counts as whitespace)
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// Customize solution// Same

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

/// Replace strings

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.'); // this return a string and with this string we will emidiatly call the next replace method

console.log(priceUS); // Here we have 2 argument, first is that what we want to replace and second one is the string that will replace the fierst one.

const announcement =
  'All passengers come to barding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

// Another solution: regular expreson - are one of the most complex and confiusing topic in programing

console.log(announcement.replace(/door/g, 'gate'));

/// Boleans
// There are 3 simple methods that return a Booleans:
// 1 .include
// 2 .startWith
// 3 .endWith

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('Air'));
console.log(plane.endsWith('0neo'));

// Example: if we want to check if the if the current plane is part of the new Airbus family

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('part of the NEW AirBus family');
}

// Exercise: We want to check if the baggage of the certain passenger is allowed to be check in.

const checkBaggage = function (items) {
  // When we get imput for users we almost always convert this to lowerCase
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a leptop, some Food and the packet Knife ');
checkBaggage('Socks and camera');
checkBaggage('Get some snacks and a gun for protection');
*/
//  Working With Strings - Part 1

// const airline = 'TAP Air Portugal';

// Position

// console.log(plane[0]); // Print 'A'
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(airline.length);
// console.log('B737'[0]); // Print B

// console.log(airline.length);
// console.log('B737'.length);

// Now the strings, strings also have methods.

// console.log(airline.indexOf('r')); // Position of 'r' letter.
// console.log(airline.lastIndexOf('r')); // Position of last 'r' letter.
// This work for same for words
// console.log(airline.indexOf('Portugal')); // Print

// Use case of Index:

// 1. Extract part of a string using the slice method
// console.log(airline.slice(4)); // Print Air Portugal/ '4' here is a bigin parameter, position at with the extraction will start.
// This does not change the underlying string, becous it's imposible to mutate strings, there are primitives, and if we want to use string we must mutate this string.

// We could also specify an end parameter
// console.log(airline.slice(4, 7)); // Print " Air" and value not included in the string. Side note: the lenght of the extracted string, is always going to be end minus beginning.

// Now try to extract just the first word of this string here, but without knowing any of the indexes.

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // WE don't need the and parameter because it will extract everything until the end.

// Start frome the end

// console.log(airline.slice(-2)); // Last 2 word of Portugal
// console.log(airline.slice(1, -1));

// Example < write the function that receives an airplane seat and locks to the constole, thether it is a middle seat or not.
/*
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  // We must take a last haracter and check whether it is a B or E
  const s = seat.slice(-1); // This is how we take last character
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/

//Methods are available at the stings because JS take a string " primitive " and convert it to the object, this proces call boxing.

// This will habend whenever we call a method on a string.

// console.log(new String('jonas')); // Prinst: String {"jonas"}
// console.log(typeof new String('jonas')); // Print: object.

// console.log(typeof new String('jonas').slice(1)); // String

/// /// New leson /// MAPS ///
//

const rest = new Map();
rest.set('name', 'Clasiico Italiano');
rest.set(1, 'Firence, Italy');
rest.set(2, 'Lisbon, Portugal');
// console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));

// We want to get correct string acording to the time
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
rest.delete(2); // '2' is a key.
// rest.clear();
const arr = [1, 2];
// console.log(rest.size);
rest.set(document.querySelector('h1'), 'Heading');

rest.set(arr, 'test');
// console.log(rest.size);

// console.log(rest.get(arr));

// Maps: lesson 2 // creating a maps, new method

const question = new Map([
  // Fierst position is a key and the secound is value
  ['question', 'What is the best programing language in the World?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
// console.log(question);

// // Maps : same structure as Object.entries, and there is easy way to convert frome object to maps.
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Loop over maps

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// Convert map to the array
// console.log(...questionMap);

// console.log(...question.entries());
// console.log(...question.keys());
// console.log(...question.values());

/// /// New lesson /// SETS ///
//
/*
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

console.log(new Set('Jonas'));
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// In normal code base main use case of sets is actually to remove duplicate vales of arrays.
// Exmample

const staff = ['Waiter', 'Chef', 'Waiter', 'Maneger', 'Chef', 'Waiter'];
console.log(new Set(staff).size);
// And if we want wo have a unique array of this, without of duplicates.

const staffUnique = [...new Set(staff)];
// const staffUnique = new Set(staff);
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Maneger', 'Chef', 'Waiter']).size
);
*/

/// New leson /// Looping Objects: Object Keys, Values, and Entries ///

// Looping over property names, they are also called keys.

// Object.keys overview

// 1. Property NAMES

// We can use this for compute how many properties are in the object.

// let openStr = `we are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// 2. Property VALUES

const values = Object.values(openingHours);
// console.log(values);

// 3. Entries object - is names, plus the values together they returned the index number and the element itself.

const entries = Object.entries(openingHours);
// console.log(entries);

// If there was a simple ocject we could just write [key, value]
// for (const [day, { open, close }] of entries) {
// //   console.log(`On ${day} we open at ${open} and close at ${close}`);
// // }

// Optional chaining '?.' Optional chaining operator (?.) -  if a certain property doesn't  exist, then it will return undefined.

// With out optional chaining

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// With Optional chaining

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// optional chaining example, real World example: we want to loop over this array and then log to the console whether the restournt is open or close on each of the days.

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // Create all days, separate variable*
  // console.log(day); // Only this without rest.
  const open = restaurant.openingHours[day]?.open ?? 'closed '; // If we want to use the variable name as the property name, we need to use the brackers notation.
  // console.log(`on ${day}, we open at ${open}`);
  // This is the same as we write: openingHours.mon.tue.wed... But we get day frome days* array dynamically
}

// ( Methods ) Optional chaining / Nullish coalescing at methods

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// ( Array ) Optional chaining / Nullish coalescing work even at array, we can check if array does exist.

const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// console.log(users[0]?.name ?? 'No');

/// Loping Arrays: The for-of-loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for (const item of menu) console.log(item); // In this loop you could use continue and break.

// And if you need to get corrent indeks:

for (const item of menu.entries()) {
  // console.log(`${item[0] + 1}: ${item[1]}`); // + 1 is for, array don't start with zero. Menu and numbers.
}
//Same resoult, but below is better way.
for (const [i, el] of menu.entries()) {
  // console.log(`${i + 1}: ${el}`); // + 1 is for, array don't start with zero. Menu and numbers.
}

// console.log([...menu.entries()]);

// The nullish coalescing operator //

//( Operator null'owego scalania ) - (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
// console.log(guests);

const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);
// “nullish”: null and undifined (NOT 0 or ' ' - empty string)

// Short circuiting // - means that in JavaScript when we are evaluating an AND expression (&&), if the first operand is false, JavaScript will short-circuit and not even look at the second operand.
// console.log('---- OR -----');
// // Logical operators //
// // Use ANY data data type, return ANY data type, short-circuting
// console.log(3 || 'Jonas'); // Short circuiting evaluation (ocena)
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Print " hello " its because hello here is fierst truthy value in this chain of OR operation.

restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// This is the same
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// console.log('---- AND ----');
// It If the first one is false it means that the entire result of the AND operation is will already be false anyway. And so there is no need to even look at any of the other operands. (argumentów)
// console.log(0 && 'Jonas'); // Print o
// console.log(7 && 'Jonas'); // Print 7

// console.log('Hello' && 23 && null && 'jonas'); // Print null

// Practical example

if (restaurant.orderPizza) {
  restaurant.orderPizza('mashrooms', 'spinach');
}
// It is the same as:if we just want to check if it sertain property or value exists.
restaurant.orderPizza && restaurant.orderPizza('mashroms', 'spinach');

// SUmmarize

// OR - will return the first truthy value of all the operands, or simply the last value if all of them are falsie.

// AND - will return the first false value or the last value if al of them are truthy.

// OR - to set default values.

// AND - execute code in the second operand if the first one is true.

// Short circuiting // - means that in JavaScript when we are evaluating an AND expression (&&), if the first operand is false, JavaScript will short-circuit and not even look at the second operand.
/*
// 1) Distructuring
// Spread, because of RIGHT side of " = " .
const newArr2 = [1, 2, ...[3, 4]];
console.log(newArr2);

// REST, because on LEFT side of " = ".

// Rest pattern - it's call rest because it will take the rest of the elements, remaining (pozostałe) of the array and then but them into a new array.

const [a, b, ...otherElement] = [1, 2, 3, 4, 5];
console.log(a, b, otherElement);

// Function below, just at the fierst part, before " = " sign take the exeption and then take all element, but not exeption into new array.
*/

const [Pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu /*Take all elements out and put it into a new array*/,
  ...restaurant.starterMenu,
];
// console.log(Pizza, Risotto, otherFood);

// OBJECTS distructuring - will collect into a new object.

// const { sat, ...otherDays } = restaurant.openingHours;
// console.log(otherDays);
/*
//. Distruction objects.
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainMenu: 2,
  starterIndex: 2,
  mainIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
}); // Rest values will defined as default

// To destructuring objects we use curly braces. We create object the same. Then we provide the variable names that exactly match the property names that we want to retrieve from the object.
// In ocjects the order of elements does not matter.
const { name, openingHours, categories } = restaurant;
// It's creates 3 new variables based on this restaurant object.
console.log(name, openingHours, categories);

// If we wanted the variable names to be different frome the property names...

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values, when we try to read the property that doesn't exest on the object. Usualy we get undefined. " Menu" - dosn't exist.

// WE declare the value to empty array, and change the name fo "starterMenu" and declare to empty array to, but "StarterMenu" does exist so this empty string will not apply, but it shoud apply to "menu" *
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

/// Mutating variables while distructuring objects ///
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// We can't say const or let
// We can't assign anytjing to a code block, so we wrap all this into parenthesis.
({ a, b } = obj);
console.log(a, b); // Print 23 7

/// Nested objects ///
// If we want to create two variables, open and close,and this sooud contain the open and close hours for friday. This is: friday in openingHours in restaurant ocject.
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

// 2) Function - distructuring
// Rest parameters (in this case rest arguments) is represent by function below
// What that function does ? ... It's create a loop and run her as long the counter is below the lenght of the array and in eath iteration we simple add the current number to the current sum value basically.
const add = function (...numbers) {
  /* This way is beter then just takes an array as an argument because then the function can accept both an array and simply values */
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  // console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

// Next level

const x = [23, 5, 7];
add(...x);

// Orther pizza

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

restaurant.orderPizza('mushroooms');
/// The spread operator ///
// This is useful when we write an array and then we need to pass multiplu elements into a function.
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
//console.log(badNewArr);

const newArr = [1, 2, ...arr];
//console.log(newArr);
// Spread operator does is basicly take all the values out of this arr. array and then write them individualy.

//console.log(...newArr);


/// New example, add new element to array
const newestaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};
const newMenu = [...newestaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // Create new array *
// Spread operator vs destructuring. SP - takes all the element from the array and it also doesn't create new variables. We can only use it in places separated by commas.

/// Two cases where we use spread operator ///
// Firest - create shallow copies of arrays //
// Second - merge two arrays together //

// Copy array

const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays

const newMenu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(newMenu2);

// Iterables: arrays, strings, maps, sets. NOT objects.

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`); // NOT

// Real-World example, extend array arraye
const ingredients = [
  // prompt("Let's make pasta! Ingredients 1?"),
  // prompt('Ingredients 2?'),
  // prompt('Ingredients 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

restaurant.orderPasta(...ingredients);

// Objects - spread operator, shallow copie of object.

const newRestaurant = { foundedIn: 1998, ...restaurant, funder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // New name don't change the original object.
console.log(restaurant.name);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app. 
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2') 
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// 1. Create one player array for each team (variables 'players1' and 'players2')

// My try **
const myPlayers1 = [...game.players[0]];
// console.log(myPlayers1);

const myPlayers2 = [...game.players[1]];
// console.log(myPlayers2);

// Teacher solution** Below

const [players1, players2] = game.players;
// console.log(players1, players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// My / don't correct
const mygk = [players1[0], players2[0]];
// console.log(gk);
const [gka, ...myfieldPlayers] = [...game.players[0], ...game.players[1]];
// console.log(gka, myfieldPlayers);

// Teacher

const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// 3. 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// My // correct )))
const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// My correct )))
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

// Teacher, and this is nested destructuring*

const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(team1, draw, team2);

// console.log(team1, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// Teacher
const printGoals = function (...players) {
  // console.log(`${players.length} goals were scored`);
  // console.log(players);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored); // We need to take the pleyers out of the array, separated values.

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// Logical operator we use

// team1 < team2 && console.log('Team 1 is more likely to win');

// team1 > team2 && console.log('Team 2 is more likely to win');

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
*/
// I //  made this by myself :)

const entriesFootbollPlayers = Object.entries(game.scored);
// console.log(entriesFootbollPlayers);

// If there was a simple ocject we could just write [day, value]
for (const [value, playerName] of entriesFootbollPlayers) {
  // console.log(playerName);
  // console.log(`Goal ${value}: ${playerName}`);
}

// Teacher

for (const [i, player] of game.scored.entries()) {
  // Notice!
  // 1. In array we use entries method*
  // for (const [i, player] of game.scored.entries()) {}
  // 2. But in the object: object.entries
  // for (const [team, odd] of Object.entries (game.odds)) {}
  // console.log(`Goal ${i + 1}: ${player}`);
}

/*
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
*/
// //  Don't know how to do that :(
// // Teacher
const odds = Object.values(game.odds);
let avarage = 0;
for (const odd of odds) {
  avarage += odd;
}
avarage /= odds.length;
// console.log(avarage);
// /*
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
// */

const gameOdds = Object.entries(game.odds);
// console.log(gameOdds);

for (const [teamNameOdds, valueOdds] of gameOdds) {
  // console.log(teamNameOdds);
  // console.log(`Odd of victory ${teamNameOdds}: ${valueOdds}`);
}

// Teacher

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  // HINT: Note how the odds and the game objects have the same property names 😉
  // console.log(`Odd of ${teamStr} ${odd}`);
  // Notice!
  // 1. In array we use entries method*
  // for (const [i, player] of game.scored.entries()) {}
  // 2. But in the object: object.entries
  // for (const [team, odd] of Object.entries (game.odds)) {}
}
// And now we want to create a string ... with this values

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {b
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// Coding Challenge #3

// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
// 1. Create an array 'events' of the different game events that happened (no duplicates)
// console.log(gameEvents.values());
// const events = new Set(gameEvents.values()); /// Creating array frome Set
const events = [...new Set(gameEvents.values())];
// console.log(events);
gameEvents.delete(64); // Use the key "64"

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
const timeOfGame = [...gameEvents.keys()].pop; // pop will take the last element out of the array.
// console.log(
//   `An event happened, on average, every ${timeOfGame / gameEvents.size} minutes`
// );
// console.log(timeOfGame);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? ' FIRST ' : ' SECOUND ';
  // console.log(`[${half}HALF] ${min}:${event}`);
}
// GOOD LUCK 😀

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;

document
  .querySelector('button')
  .addEventListener('click', function name(params) {
    const text = document.querySelector('textarea').value;
    // 1. We split all the elements by enter character
    const rows = text.split('\n');
    console.log(rows);

    // 2. Convert to camel case:

    for (const [i, row] of rows.entries()) {
      const [first, second] = row.toLowerCase().trim().split('_');
      const output = `${first}${second.replace(
        second[0],
        second[0].toUpperCase()
      )}`;
      console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
  });

//   underscore_case > underscoreCase
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure
*/

// Coding Challenge #5
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

console.log(flights.split('+'));

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, frome, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )}${getCode(frome)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36); // We put all output in separate variables so we can easely use them. 1. Replace : with h 2. Replace _ with " " empty space.
  console.log(output);
}
