// void, never, any, undefined

// Any: Disables all type checking, Unsafe (no compile-time safety)
// do not use any in typescript, because typescript don't work on any. it will be then like javascript code
let abc;
abc = 16;
abc = "Mohsin"; // no error

abc = abc.toUpperCase(); // no error

// unknown: Safer version of any, Prevents runtime errors and it Must checks the type before use
let def: unknown;
def = 17;
def = "Ronaldo";

// def.toUpperCase();       // throws error because 17 is number and it cannot access string functions(.toUpperCase)

// type safety
if (typeof def === "string") {
  def = def.toUpperCase();
}

// void and never are special TypeScript data types used mainly for function return types.
// They are neither primitive nor non-primitive.
// void → Function returns nothing
// never → Function never returns at all

// void
function printMsg(): void {
  console.log("Hello World!!!");
}

console.log(abc);
console.log(def);
printMsg();

// never
function throwError(): never {
  throw new Error("Something went wrong");
}

// throwError()                     // gives error at runtime

// function func(): never {
//   while (true) {}
// }

// func();
// console.log("Hello"); // it will never execute bcz of infinite loop. so by writing never, it's colout turns grey.
