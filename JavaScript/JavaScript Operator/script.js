// Types of Operator

// Arithmetic Operator (+,-,*,/)
// Assignment Operator (=)
// Comparison Operator (==, != or <>, <, >, >=, <= )
// String Operator     (<,>,+,!)
// Logical  Operator   (&&, ||, !)
// Bitwise Operator    (&,|, ~, ^, <<, >>, >>>)
// Ternary Operator


// example
let a = 7; //assignment operator
console.log(a);

a += 5; //assignment operator

let b = 5;
console.log(b);

let c;

c = a + b;
console.log(c) // Arithmetic operator +, -, *, /

if(a == b){
    console.log("Number are same") // Comparison operator
}

let s1 = "B";
let s2 = "T";

let r = s1 + " " + s2;
console.log(r);

let text1 = "20";
let text2 = "5";
let result = text1 < text2;

console.log(result);

let text3 = "What a very ";
text3 += "nice day";

console.log(text3);

let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;

console.log(x, y, z);

// Arithmetic operation 

// number are operend eg 7
// operation is perfrom between two numbers eg. +

let t1 = 5;
let t2 = Math.pow(t1,2);

console.log(t1, t2);

// Operator precedence
// let t3 = 100 + 50 * 3;

// Is the result of example above the same as 150 * 3, or is it the same as 100 + 150?

// Is the addition or the multiplication done first?

// As in traditional school mathematics, the multiplication is done first.

// Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).

// And (as in school mathematics) the precedence can be changed by using parentheses.

// When using parentheses, the operations inside the parentheses are computed first:


// When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right:

// Shift Assignment Operators

let num1 = 5; // Binary: 0101
num1 <<= 1;   // Shift left by 1 bit → Binary: 1010 (Decimal: 10)
console.log(num1); // Output: 10


let num2 = -10; // Binary (32-bit): 11111111111111111111111111110110
num2 >>= 1;     // Arithmetic right shift → Binary: 11111111111111111111111111111011 (Decimal: -5)
console.log(num2); // Output: -5