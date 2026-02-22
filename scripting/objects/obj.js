let person = {
    age:   23,
    name :  "Ananya",    
    country:   "India",
    message : function()  {
         console.log("Hello, Welcome to our country: " + this.name);
    } 
};

// DOT Notations

console.log(person.name);
console.log(person.age);
console.log(person.country);

//  Bracket Notations

console.log(person['age']);
console.log(person['name']);

// Adding a property
person.isSleeping = false;


// Modifying a property
person.age = 38;


// Deleting a property
delete person.country;

console.log(person);
person.message();
