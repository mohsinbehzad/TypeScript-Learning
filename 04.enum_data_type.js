// Enum: user defined data type or special TypeScript data type
// Numeric Enum: Stores numeric values with auto-increment.
// String Enum: Stores fixed string values with better readability and safety.
// Numeric Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Left;
console.log(move); // 2
// String Enum
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "abandoned status code 501";
    StatusCodes["NOTFOUND"] = "not found status code 404";
    StatusCodes["SUCCES"] = "200";
    StatusCodes["ACCEPTED"] = "202";
})(StatusCodes || (StatusCodes = {}));
var state = StatusCodes.NOTFOUND;
console.log(state); // not found status code 404
// Enumerations
// Enums are a feature added to JavaScript in TypeScript which makes it easier
// to handle named sets of constants. By default an enum is number based,
// starting at zero, and each option is assigned an increment by one.
