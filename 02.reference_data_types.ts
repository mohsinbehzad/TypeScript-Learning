// Array: Stores multiple values of same type.
// Object: Stores data in key–value form.
// Function: Reusable block of code.
// Class: Blueprint for creating objects.
// Tuple: Fixed-size typed array.

// Arrays
let numbers: number[] = [10, 20, 30];
let names: string[] = ["Marcelo", "Ronaldo", "Ramos"];

console.log(numbers[0]); // 10
console.log(names[1]); // Ronaldo

// Object
let student: { name: string; age: number } = {
  name: "Ali",
  age: 21,
};

console.log(student.name); // Ali
console.log(student.age); // 21

// Function
function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, 3);
console.log(result); // 8

// Class
class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  showBrand(): void {
    console.log(this.brand);
  }
}

let car1 = new Car("Toyota");
car1.showBrand(); // Toyota

// Tuple
let user: [number, string] = [23, "Mohsin"];
// let profile: [number, string] = ["Mohsin", 23];              // throws error

console.log(user[0]); // 23
console.log(user[1]); // Mohsin