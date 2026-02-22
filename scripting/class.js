
class Human {
    // properties
    age = 13;    //public
    #wt = 80;    //private
    ht = 180;
    col;         // we can initialise these values in a class using constructor.

  constructor(newAge, newHeight, newWeight) {
    this.age= newAge;
    this.ht = newHeight;
    this.#wt = newWeight;
}
    // behaviour

walking(){
        console.log("I am Walking");           // this keyword is used to access the private mamber.
    }

running() {
    console.log("I am running")
}
get fetchWeight ()
{
    return this.#wt;
}
set modifyWeight (val)
{
    this.#wt = val;
}
}

let obj = new Human(50, 190, 105);
console.log(obj.fetchWeight);
console.log(obj.ht)
console.log(obj.age);
obj.walking();

