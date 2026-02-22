

//  const value not reassigned  or redefined 
// It has block scoped.


const x = 20;
console.log(x);

// x = 30;
// console.log(x);

const person = {
    name: 'Nancy',
    age: 16
};
console.log(person.name);
console.log(person.age);

// person.push(8);                ----->>   It occurs Error because of reassign the value of variable.
// console.log(person);