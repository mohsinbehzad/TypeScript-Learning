// Type Annotation: Manually specifying the data type.
// Type Inference: TypeScript automatically determines the data type.

// type annotation
let age: number = 22;        
let myName: string = "Khan";  

// type inference
let count = 10;      // inferred as number
let city = "Islamabad"; // inferred as string

// Function example
function add(a: number, b: number):number {   // annotation
  return a + b;                        // return type inferred as number
}

console.log(add(5,8));
