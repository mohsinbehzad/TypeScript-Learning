// An interface defines the structure of an object.
// It is used for type-checking.
// Interfaces do not exist in JavaScript after compilation, they are only for TypeScript.

interface User {
  name: string;
  email: string;
  password: string;
  gender?: string; // optional property
}

function createUser(obj: User): User {
  console.log("User created: ", obj);
  return obj;
}

// createUser()                     gives error because it expects three arguments

let user1 = createUser({
  name: "Mohsin",
  email: "mohsin@gmail.com",
  password: "1234",
});

// it will work without gender, because gender is optional

// interface is blueprint for object structure.
// Optional properties use ?.
// Can be used in objects, functions, and classes.