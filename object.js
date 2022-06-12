const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};

//Object.prototype.valueOf()
Object.valueOf(book); // [Function: Object]

//Object.keys()
const keys = Object.keys(book); //[ 'title', 'author', 'rating' ]
//Object.entries();
const entries = Object.entries(book); // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]
entries.forEach(([key, value]) => console.log(`${key}:${value}`));
//Object.values()
const values = Object.values(book); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

//Object.assign()
const first = { name: "Tony" };
const last = { lastName: "Stark" };
const ironMan = Object.assign(first, last); // {name: 'Tony', lastName: 'Stark'}
// first = {name: 'Tony', lastName: 'Stark'}

const fruits = Object.assign(
  { fruit: "apple" },
  { price: 5 },
  { color: "green" }
); // { fruit: 'apple', price: 5, color: 'green' }

const color = Object.assign(
  { color: "red" },
  { color: "blue" },
  { color: "green" }
); // { color: 'green' }

const personData = { person: "Thor Odinson" };
const clone = Object.assign({}, personData); // {person: 'Thor Odinson'}

//Object.create()
const person = {
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
descriptors = { firstName: { value: "Tony" }, lastName: { value: "Stark" } };
const alex = Object.create(person, descriptors);
alex.fullName();

//Object.defineProperties()
let object = {};
Object.defineProperties(object, {
  property1: {
    value: true,
    writable: true,
  },
  property2: {
    value: "Hello",
    writable: false,
  },
});
console.log(object); // {property1: true, property2: "Hello"}

//Object.defineProperty(), Object.getOwnPropertyDescriptor()
const objectProperty = {};
Object.defineProperty(objectProperty, "name", {
  value: "Tony Stark",
  configurable: true,
});
console.log(Object.getOwnPropertyDescriptor(objectProperty, "name")); // { value: 'Tony Stark',writable: false, enumerable: false, configurable: true}
for (let variable in objectProperty) console.log(objectProperty[variable]); // nothing, object.name  is not enumerable
console.log(objectProperty.name); // "Tony Stark"
objectProperty.name = "Thor Odinson"; // object.name is still "Tony Stark", (is not writable, no error)
delete objectProperty.name; //  object.name (was configurable)
objectProperty.name = "Thor Odinson"; // object.name  is "Thor Odinson"
for (let variable in objectProperty) console.log(objectProperty[variable]); // "Thor Odinson", default fields are enumerable

//Object.freeze(), Object.isFrozen(), Object.isExtensible(), Object.isSealed();
Object.isSealed(book); // false
Object.freeze(book);
Object.isFrozen(book); // true;
Object.isExtensible(book); // false
Object.defineProperty(book, "genre", { value: "adventure" }); //TypeError

//Object.fromEntries(), Object.preventExtensions();
const descriptions = [
  ["title", "The Last Kingdom"],
  ["author", "Bernard Cornwell"],
  ["rating", 8.38],
];
const book1 = Object.fromEntries(descriptions);
Object.preventExtensions(book1);
Object.isExtensible(book1); //false

//Object.getOwnPropertyDescriptors()
const avengers = {
  name1: "Tony Stark",
  name2: "Thor Odinson",
};
const descriptor = Object.getOwnPropertyDescriptors(avengers);
descriptor.name1.enumerable; // true
descriptor.name2.enumerable; //true
descriptor.name1.value; //"Tony Stark"
descriptor.name2.value; //"Thor Odinson"

//Object.getOwnPropertyNames(obj)
Object.getOwnPropertyNames(avengers).forEach((avenger) =>
  console.log(`${avenger}:${avengers[avenger]}`)
);

//Object.getOwnPropertySymbols()
const objectSymbols = {};

let symbol1 = Symbol("Local Symbol");
let symbol2 = Symbol.for("Global Symbol");

objectSymbols[symbol1] = "symbol 1 assigned to abj1";
objectSymbols[symbol2] = "symbol 2 assigned to abj2";

Object.getOwnPropertySymbols(objectSymbols); // [ Symbol(Local Symbol), Symbol(Global Symbol) ]

//Object.getPrototypeOf(), Object.setPrototypeOf(), Object.prototype.hasOwnProperty(), Object.prototype.isPrototypeOf()
//Object.prototype.propertyIsEnumerable(), Object.seal();
const animal = {
  legs: 4,
};

let rabbit = Object.create(animal);
rabbit.name = "Poly";
animal.isPrototypeOf(rabbit); // true
rabbit.propertyIsEnumerable("name"); //true
rabbit.propertyIsEnumerable("legs"); //false
rabbit.hasOwnProperty("name"); // true
rabbit.hasOwnProperty("legs"); // false
Object.getPrototypeOf(rabbit) === animal; // true
Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}
Object.seal(animal); //{ legs: 4 }
Object.isSealed(animal); // true

//Object.is()
let objA = { a: 1 };
let objB = { a: 1 };
let a = "app";
let b = "app";

Object.is(a, b); // true
Object.is(objA, objB); //false
Object.is(objA, objA); // true
Object.is(undefined, undefined); //true
Object.is(null, null); //true
Object.is(0, -0); //false
Object.is(-0, -0); //true
Object.is(NaN, 0 / 0); //true

//Object.prototype.toString()
function Book(title, author, rating) {
  this.title = title;
  this.author = author;
  this.rating = rating;
}

const theBook = new Book("The Last Kingdom", "Bernard Cornwell", 8.38);

Book.prototype.toString = function bookToString() {
  return `Title: ${this.title}, Author: ${this.author}, Rating: ${this.rating} `;
};

theBook.toString(); //Title: The Last Kingdom, Author: Bernard Cornwell, Rating: 8.38
