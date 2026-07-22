
// var a;
// let b = 12; // changable
// let x = "wert";
// const c = 23; // constant 

// const str = "hello";        // string — text, in quotes
// const num = 42;              // number — JS has ONE number type, no int/float split
// const isActive = true;       // boolean — true or false
// const nothing = null;        // null — deliberate "no value"
// let notSet;                  // undefined — declared but never assigned

// typeof "hello"
// typeof 12;
// typeof null;
// typeof true;
// typeof undefined;

// const r = "5";
// const y = 5;

// console.log(r == y);
// console.log(r === y);


// const a = 10, b = 3;

// a + b;   // 13 — addition
// a - b;   // 7  — subtraction
// a * b;   // 30 — multiplication
// a / b;   // 3.333... — division
// a % b;   // 1  — modulus (remainder). Used constantly for "is this even/odd", cycling through arrays, etc.
// a ** b;  // 1000 — exponentiation (a ^ b)


// "5" + 3    // "53" (string) — number gets coerced to string
// 5 + "3"    // "53" (string) — same thing, order doesn't matter
// 5 + 3      // 8 (number)

// let count = 5;
// count++;   // count is now 6 (post-increment)
// count--;   // back to 5

// 5 > 3    // true
// 5 < 3    // false
// 5 >= 5   // true
// 5 <= 4   // false
// 5 == "5"   // true  — loose, avoid (from last topic)
// 5 === "5"  // false — strict, use this
// 5 !== "5"  // true

// true && false   // AND — false only if both are true does it return true
// true || false   // OR — true if at least one is true
// !true           // NOT — flips the boolean, becomes false

// const score = 75;

// if (score >= 90) {
//   console.log("A");
// } else if (score >= 75) {
//   console.log("B");
// } else {
//   console.log("C");
// }

// const day = "Mon";

// switch (day) {
//   case "Mon":
//     console.log("Start of week");
//     break;
//   case "Fri":
//     console.log("Almost weekend");
//     break;
//   default:
//     console.log("Midweek");
// }

// var a;
// let b = 12; // changable
// let x = "wert";
// const c = 23; // constant 

// const str = "hello";        // string — text, in quotes
// const num = 42;              // number — JS has ONE number type, no int/float split
// const isActive = true;       // boolean — true or false
// const nothing = null;        // null — deliberate "no value"
// let notSet;                  // undefined — declared but never assigned

// typeof "hello"
// typeof 12;
// typeof null;
// typeof true;
// typeof undefined;

// const r = "5";
// const y = 5;

// console.log(r == y);
// console.log(r === y);


// const a = 10, b = 3;

// a + b;   // 13 — addition
// a - b;   // 7  — subtraction
// a * b;   // 30 — multiplication
// a / b;   // 3.333... — division
// a % b;   // 1  — modulus (remainder). Used constantly for "is this even/odd", cycling through arrays, etc.
// a ** b;  // 1000 — exponentiation (a ^ b)


// "5" + 3    // "53" (string) — number gets coerced to string
// 5 + "3"    // "53" (string) — same thing, order doesn't matter
// 5 + 3      // 8 (number)

// let count = 5;
// count++;   // count is now 6 (post-increment)
// count--;   // back to 5

// 5 > 3    // true
// 5 < 3    // false
// 5 >= 5   // true
// 5 <= 4   // false
// 5 == "5"   // true  — loose, avoid (from last topic)
// 5 === "5"  // false — strict, use this
// 5 !== "5"  // true

// true && false   // AND — false only if both are true does it return true
// true || false   // OR — true if at least one is true
// !true           // NOT — flips the boolean, becomes false

// const score = 75;

// if (score >= 90) {
//   console.log("A");
// } else if (score >= 75) {
//   console.log("B");
// } else {
//   console.log("C");
// }

// const day = "Mon";

// switch (day) {
//   case "Mon":
//     console.log("Start of week");
//     break;
//   case "Fri":
//     console.log("Almost weekend");
//     break;
//   default:
//     console.log("Midweek");
// }



// function square(n) {
//   return n * n;
// }

// const squeare = (n) => n * n;

// console.log(square(4));


// function greetUser(name , greeting = "Hello"){
//   return  name +" , "+ greeting;
  
// }

// console.log(greetUser("RV", "Welcome"));
// console.log(greetUser("VE"));

// function isEven(n) {
//   n % 2 === 0;
// }
// console.log(isEven(4));

const fruits = ["apple", "banana", "mango"];

fruits[0];        // "apple"
fruits[2];        // "mango"
fruits.length;     // 3
fruits[fruits.length - 1];   // "mango" — last item, common pattern

const nums = [1, 2, 3];
nums.push(4);      // works fine — array itself isn't reassigned
nums = [5, 6];      // ERROR — this reassigns the variable, blocked by const

const arr = [1, 2, 3];

arr.push(4);        // adds to end → [1,2,3,4]
arr.pop();           // removes from end → [1,2,3], returns removed item (4)
arr.unshift(0);      // adds to start → [0,1,2,3]
arr.shift();          // removes from start → [1,2,3], returns removed item (0)'

const nums = [1, 2, 3];
nums.forEach(n => console.log(n * 2));   // logs 2, 4, 6 — nothing returned/stored

const doubled = nums.map(n => n * 2);   // [2, 4, 6] — nums itself unchanged

const evens = nums.filter(n => n % 2 === 0);   // [2]

const found = nums.find(n => n > 1);   // 2

const bad = nums.forEach(n => n * 2);   // bad is undefined — forEach doesn't return anything useful
const good = nums.map(n => n * 2);       // good is [2, 4, 6]

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (const fruit of fruits) {
  console.log(fruit);
}

fruits.includes("banana");   // true
fruits.indexOf("mango");     // 2 (index), or -1 if not found