const fruits = [
  "apple",
  "strawberry",
  "cherry",
  "cranberries",
  "orange",
  "papaya",
];

const students = [
  { name: "Alex", courses: ["math", "physics"] },
  { name: "Tom", courses: ["informatics", "math"] },
  { name: "Bob", courses: ["physics", "biology"] },
];

// Array.prototype[@@iterator]()
const elements = fruits[Symbol.iterator]();
for (const element of elements) {
  console.log(element);
}
[...elements];

// get Array[@@species]
class MyArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}
const array = new MyArray(2, 3, 5);
const odds = array.filter((item) => item % 2 === 1);
odds instanceof Array; // true
odds instanceof MyArray; // false

// Array.prototype.at()
let index = 2;
fruits.at(index); //cherry

// Array.prototype.concat();
const newFruits = ["mango", "kiwi"];
const newFruits1 = ["coconut", "banana"];
const allFruits = fruits.concat(newFruits);
const allFruits1 = fruits.concat(newFruits, newFruits1);
const allFruits2 = fruits.concat("mango", ["coconut", "banana"]);

//Array.prototype.copyWithin();
const copyWithin = fruits.copyWithin(2, 0); //["apple", "strawberry", "apple", "strawberry"];
const copyWithin1 = fruits.copyWithin(2, 0, 2); // ['apple', 'strawberry', 'apple', 'strawberry', 'orange', 'papaya']

//Array.prototype.entries()
const iterator = fruits.entries();
for (let element of iterator) {
  console.log(element);
}

//Array.prototype.every()
[1, 2, 3, 4, 5].every((element, index, array) => element >= 0); // true
[1, 2, 3, -10, 4, 5].every((element, index, array) => element >= 0); // false

//Array.prototype.fill()
[...fruits].fill(4, 1); //["apple", 4, 4, 4, 4, 4];
[...fruits].fill("mango", 2, 4); //[ 'apple', 4, 'mango', 'mango', 4, 4 ]
Array(3).fill("mango"); //[ 'mango', 'mango', 'mango' ]

//Array.prototype.filter();
fruits.filter((item, index, array) => item.length > 6); //[ 'strawberry', 'cranberries' ]

//Array.prototype.find()
fruits.find((element, index, array) => element.length < 6); //apple

//Array.prototype.findIndex()
fruits.findIndex((element, index, array) => element === "apple"); //0
fruits.findIndex((element, index, array) => element === "pink"); //-1

//Array.prototype.flat()
const numbers = [0, 1, 2, [3, 4]];
numbers.flat(); //  [0, 1, 2, 3, 4]
const numbers2 = [0, 1, 2, [[[3, 4]]]];
numbers2.flat(2); // [0, 1, 2, [3, 4]]

// //Array.prototype.flatMap()
students.flatMap((element, index, array) => element.courses); // [ 'math', 'physics', 'informatics', 'math', 'physics', 'biology' ]

// //Array.prototype.forEach()
fruits.forEach((element, index, array) =>
  console.log(`Index ${index}, value ${element}`)
);

//Array.from()
Array.from(Array(10).keys()); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const string = "Fruits!";
const newArray = Array.from(string, (mapFn) => mapFn + "."); //['F.', 'r.','u.', 'i.','t.', 's.','!.']

//Array.prototype.includes()
const fruit = "cherry";
const hasFruit = fruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is in an array!`);
}

//Array.prototype.indexOf()
fruits.indexOf("apple"); // 0
fruits.indexOf("mango"); // -1

function updateFruits(fruits, fruit) {
  if (fruits.indexOf(fruit) === -1) {
    fruits.push(fruit);
    console.log(`New fruits collection is : ${fruits}`);
  } else {
    console.log(`${fruit} is already exists in the fruits collection.`);
  }
}

// Array.isArray();
Array.isArray(fruits); // true
Array.isArray({ name: "Tom" }); // false
Array.isArray("apple"); // false
Array.isArray(undefined); // false

//Array.prototype.join();
fruits.join(""); // "applestrawberrycherrycranberriesorangepapaya"
fruits.join(" "); // "apple strawberry cherry cranberries orange papaya"
fruits.join("-"); // "apple-strawberry-cherry-cranberries-orange-papaya"

//Array.prototype.keys()
const denseKeys = [...fruits.keys()]; // [ 0, 1, 2, 3, 4, 5 ]

// Array.prototype.lastIndexOf();
fruits.lastIndexOf("apple"); // 0
fruits.lastIndexOf("mango"); // -1

//Array.prototype.map()
students.map((element, index, array) => element.courses);
// [['math', 'physics'], ["informatics", "math"], ["physics", "biology"]]
const names = students.map((student) => student.name); // [ 'Alex','Tom', 'Bob' ]
const namesInUpperCase = names.map((name) => name.toUpperCase()); // [ 'ALEX','TOM', 'BOB', ]

//Array.of()
Array.of("apple"); // ['apple']
Array.of("apple", "strawberry", "cherry"); // ["apple","strawberry","cherry"]
Array.of(undefined); // [undefined]

// //Array.prototype.pop()
const fruitsArray = [...fruits];

fruitsArray.pop(); //  papaya
// console.log(fruitsArray); // [ 'apple', 'strawberry', 'cherry', 'cranberries', 'orange' ]

fruitsArray.pop(); //  orange
// console.log(fruitsArray); // [ 'apple', 'strawberry', 'cherry', 'cranberries']

// //Array.prototype.push()
fruitsArray.push("orange");
// console.log(fruitsArray); // [ 'apple', 'strawberry', 'cherry', 'cranberries', 'orange']

fruitsArray.push("papaya");
// console.log(fruitsArray); // [ 'apple', 'strawberry', 'cherry', 'cranberries', 'orange', 'papaya' ]

//Array.prototype.reduce()
const left = fruits.reduce(
  (accumulator, currentValue) => accumulator + currentValue
); //applestrawberrycherrycranberriesorangepapaya

const getCourses = (students) =>
  students.reduce((allCourses, student) => {
    allCourses.push(...student.courses);
    return allCourses;
  }, []);

getCourses(students); //[ 'math', 'physics', 'informatics', 'math', 'physics', 'biology' ]

//Array.prototype.reduceRight()
const right = fruits.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue
); //papayaorangecranberriescherrystrawberryapple

const getCoursesRight = (students) =>
  students.reduceRight((allCourses, student) => {
    allCourses.push(...student.courses);

    return allCourses;
  }, []);

getCoursesRight(students); //[ 'physics', 'biology', 'informatics', 'math', 'math', 'physics' ]

//Array.prototype.reverse()
const reversed = [...fruits].reverse(); // [ 'papaya', 'orange', 'cranberries', 'cherry', 'strawberry', 'apple' ]

//Array.prototype.shift()
[...fruits].shift(); //  apple

//Array.prototype.unshift()
[...fruits].unshift("mango"); //  7 // [ 'mango', 'apple', 'strawberry', 'cherry', 'cranberries', 'orange', 'papaya']

//Array.prototype.slice()
fruits.slice(1, 3); // [ 'strawberry', 'cherry' ]
fruits.slice(); // [ 'apple', 'strawberry', 'cherry', 'cranberries', 'orange', 'papaya' ]
fruits.slice(1); // [ 'strawberry', 'cherry', 'cranberries', 'orange', 'papaya' ]
fruits.slice(2); // [ 'cherry', 'cranberries', 'orange', 'papaya' ]
fruits.slice(-2); // [ 'orange', 'papaya' ]

//Array.prototype.some()
const anyAvailable = fruits.some((fruit) => fruit.length < 6); // true

//Array.prototype.sort()
const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort((a, b) => a - b); // [19, 35, 56, 61, 74, 92]
const descendingScores = [...scores].sort((a, b) => b - a); // [92, 74, 61, 56, 35, 19]
const inAlphabetOrder = [...fruits].sort((a, b) => a.localeCompare(b)); // [ 'apple', 'cherry', 'cranberries', 'orange', 'papaya', 'strawberry' ]
const inReversedOrder = [...fruits].sort((a, b) => b.localeCompare(a)); //[ 'strawberry', 'papaya', 'orange', 'cranberries', 'cherry', 'apple' ]
const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
); // [ { name: 'Alex', courses: [ 'math', 'physics' ] }, { name: 'Bob', courses: [ 'physics', 'biology' ] }, { name: 'Tom', courses: [ 'informatics', 'math' ] }]

//Array.prototype.splice()
const deletedFruits = [...fruits].splice(0, 3); // [ 'apple', 'strawberry', 'cherry' ]
// fruits = [ 'cranberries', 'orange', 'papaya' ]
[...fruits].splice(2, 0, "mango"); // ['apple','strawberry', 'mango','cherry','cranberries','orange','papaya']
[...fruits].splice(1, 1, "pineapple"); // [ 'apple', 'pineapple', 'cherry', 'cranberries', 'orange', 'papaya' ]

//Array.prototype.toLocaleString()
const number = 123456.789;
number.toLocaleString("en-US", { style: "currency", currency: "USD" }); //$123,456.79
number.toLocaleString("en-IN", { style: "currency", currency: "INR" }); //₹ 1,23,456.79
number.toLocaleString("fr-FR", { style: "currency", currency: "EUR" }); //123 456,79 €

//Array.prototype.toString()
fruits.toString(); // apple,strawberry,cherry,cranberries,orange,papaya

// //Array.prototype.values()
const iterator1 = fruits.values();
for (let element of iterator1) {
  console.log(element);
}
