// Array: Stores multiple values of same type.
// Object: Stores data in key–value form.
// Function: Reusable block of code.
// Class: Blueprint for creating objects.
// Tuple: Fixed-size typed array.
// Arrays
var numbers = [10, 20, 30];
var names = ["Marcelo", "Ronaldo", "Ramos"];
console.log(numbers[0]); // 10
console.log(names[1]); // Ronaldo
// Object
var student = {
    name: "Ali",
    age: 21,
};
console.log(student.name); // Ali
console.log(student.age); // 21
// Function
function add(a, b) {
    return a + b;
}
var result = add(5, 3);
console.log(result); // 8
// Class
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.showBrand = function () {
        console.log(this.brand);
    };
    return Car;
}());
var car1 = new Car("Toyota");
car1.showBrand(); // Toyota
// Tuple
var user = [23, "Mohsin"];
// let profile: [number, string] = ["Mohsin", 23];              // throws error
console.log(user[0]); // 23
console.log(user[1]); // Mohsin
