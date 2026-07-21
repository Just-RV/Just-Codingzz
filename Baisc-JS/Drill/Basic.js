
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