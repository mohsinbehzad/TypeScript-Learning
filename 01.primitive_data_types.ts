// 1. Number
let num: number = 20;
// num = "khan";                        // it will give error because you assign number to it
let price: number = 99.99;

// 2. String
let username: string = "Mohsin";
let message: string = "Welcome to TypeScript";

// 3. Boolean
let isLoggedIn: boolean = true;
let hasAccess: boolean = false;

// 4. Undefined
let x: undefined = undefined;
let y: number | undefined;
y = 10;

// 5. Null
let z: null = null;
// z = 19;                          // throws error

// unknown
let def: unknown;
def = 17;
def = "Khan";

// Output
console.log(num, price);
console.log(username, message);
console.log(isLoggedIn, hasAccess);
console.log(y);
console.log(z);
console.log(def);
