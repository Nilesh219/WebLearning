// difference between var and let

// var(Function Scope)
if(true){
    var x = 10;
}

console.log(x);

// are not block scoped 
// are accessible outside the block they're declare in

// let and const (Block Scope)
if(true){
    let y = 7;
    const z = 5;
}

// console.log(y);
// console.log(z);

// Are block-scoped
// Are only accessible within their block

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 100); // Logs 3, 3, 3
// }

// for (let j = 0; j < 3; j++) {
//     setTimeout(() => console.log(j), 100); // Logs 0, 1, 2
// }

let a, b, c;
a= 5;
b=7;


c = a+b;
console.log(c);

let person="Nil";
console.log(person);