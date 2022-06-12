const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};

// //Object.assign()
// const first = { name: "Tony" };
// const last = { lastName: "Stark" };
// const ironMan = Object.assign(first, last); // {name: 'Tony', lastName: 'Stark'}
// // first = {name: 'Tony', lastName: 'Stark'}

// const fruits = Object.assign(
//   { fruit: "apple" },
//   { price: 5 },
//   { color: "green" }
// ); // { fruit: 'apple', price: 5, color: 'green' }

// const color = Object.assign(
//   { color: "red" },
//   { color: "blue" },
//   { color: "green" }
// ); // { color: 'green' }

// const personData = { person: "Thor Odinson" };
// const clone = Object.assign({}, personData); // {person: 'Thor Odinson'}

// //Object.create()
// const person = {
//   fullName: function () {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };
// descriptors = { firstName: { value: "Tony" }, lastName: { value: "Stark" } };
// const alex = Object.create(person, descriptors);
// alex.fullName();

//Object.defineProperties()
// let object = {};
// Object.defineProperties(object, {
//   property1: {
//     value: true,
//     writable: true,
//   },
//   property2: {
//     value: "Hello",
//     writable: false,
//   },
// });
// console.log(object); // {property1: true, property2: "Hello"

//Object.defineProperty()
// const objectProperty = {};
// Object.defineProperty(objectProperty, "name", {
//   value: "Tony Stark",
//   configurable: true,
// });
// console.log(Object.getOwnPropertyDescriptor(objectProperty, "name")); // { value: 'Tony Stark',writable: false, enumerable: false, configurable: true}
// for (let variable in objectProperty) console.log(objectProperty[variable]); // nothing, object.name  is not enumerable
// console.log(objectProperty.name); // "Tony Stark"
// objectProperty.name = "Thor Odinson"; // object.name is still "Tony Stark", (is not writable, no error)
// delete objectProperty.name; //  object.name (was configurable)
// objectProperty.name = "Thor Odinson"; // object.name  is "Thor Odinson"
// for (let variable in objectProperty) console.log(objectProperty[variable]); // "Thor Odinson", default fields are enumerable

//Object.entries()
// const entries = Object.entries(book); // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]
// entries.forEach(([key, value]) => console.log(`${key}:${value}`));

//Object.freeze()
