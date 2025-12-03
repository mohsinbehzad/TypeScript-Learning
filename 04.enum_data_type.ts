// Enum: user defined data type or special TypeScript data type
// Numeric Enum: Stores numeric values with auto-increment.
// String Enum: Stores fixed string values with better readability and safety.

// Numeric Enum
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

let move: Direction = Direction.Left;
console.log(move); // 2

// String Enum

enum StatusCodes {
  ABANDONED = "abandoned status code 501",
  NOTFOUND = "not found status code 404",
  SUCCES = "200",
  ACCEPTED = "202",
}

let state: StatusCodes = StatusCodes.NOTFOUND;
console.log(state); // not found status code 404

// Enumerations
// Enums are a feature added to JavaScript in TypeScript which makes it easier
// to handle named sets of constants. By default an enum is number based,
// starting at zero, and each option is assigned an increment by one.
