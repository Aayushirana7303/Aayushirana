// classes --> it is a blue print of an actual thing[object] which define the data members, functions, it is a box which define their property & functionalities.
// object is the group of key value pairs or also an entity 
// we use getter and setter for access a private member outside the class
// getter setter encapsulation k liye use hota h.
// class Human{
    // properties
   // agar koi member ham define nhi krte to vo public mark ho jate h
   //  this is marked as private using #
   // private member bss class ke andr hi acsess hota h bahr nhi agr access krne h ti getter or setter create kro
   //  age = 19;
    // age; 
    // #wt = 45;
    // height = 66;



    // jab ham kisi member ki value define nahi karte h tb ham constructor ki help s value dete h.
    // constructor(newAge, newWeight, newHeight) {
    //   this.age = newAge;
    //   this.height = newHeight;
    //   this.#wt = newWeight;
    // }

    // behaviour
//  walking()
//  {
//     console.log("I'm walking", this.#wt);
//  }
//  running(){
//     console.log("I'm running");
//  }
//  get fetchWeight(){
//    return this.#wt;
//  }
//  set modifyWeight(val) {
//    this.#wt = val;
//  }
// }
// console.log(obj.age);
// console.log(obj.fetchWeight);
// obj.walking();
// console.log(obj.height)

// Default Parameters --> allow to use functions default values, jb ham function calling ke time parameters pass krna bhul gye ho.

// FUNCTIONS  -->
function sayName(FName = "Aayushi", LName = "Rana") {
  console.log("My Name is: ", FName);
  console.log("My Last Name is:", LName);
  console.log("My Full name is:", FName + " " + LName);
}
sayName();

function Case(name = "Uday", lname = name.toUpperCase()) 
{
  console.log("My name is:", name + " " + lname);
}
Case();


// function solve(value = {age:15, wt:20, ht:180}) {
//   console.log("Hello Jii", value);
// }
// solve();


function solve(value = ["Aayushi", "Aastha", "Uday", "Eakta"]) {
  console.log("Welcome to javascript tutorial", value);
}
solve();


function emp(m = "Vinita") {
  console.log("Hello ->", m);
}
emp(null);


function meet(n = "Sarvesh") {
  console.log("I am", n);
}
  meet(undefined); /* undefined ke case m undefined print nhi hoga value pass hogi jo function m di h */


  // Default parameters

  function getAge() {
    return 15;
  }


  function utility(name = "Aastha", age = getAge()) {
    console.log(name," ", age);
  }
  utility();


  //  utility("Kamlesh", 20);
   
   /*  Agar age ya name kisi ki value pass na kre to uske place pr undefined print hota h iske place pr hm default parameters de sakte h */