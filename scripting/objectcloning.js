let obj = {
    age:15,
    wt:45,
    ht:135
};

console.log(obj);
obj.color = "white";
/* we can add a new property in any object isiliye object ko dynamically natured khte h */
console.log(obj);

// cloning in object --> 
// there are three types of object cloning -->
// 1. spread operator(...), 
//2. using assign method -->
//3. itiration method


//this is spread method
let src = {
    age: 15,
    color: "Black and White",
    ht: 120,
    wt: 160
};

let src2 = {
    value:101,
    name:"Aastha"
}

let dest = {...src};

// src.age = 90;

console.log("src:", src);
console.log("dest:", dest);


// this is assign method
// let dest = Object.assign({}, src, src2);

// src.age = 50;
// console.log("src:", src);
// console.log("dest:", dest);


// cloning using iteration method -->
// let dest = {};
// for(let key in src) {
    // console.log(key);
    // let newKey = key;
    // let newValue =src[key];
    // insert newKey and value in dest and create a clone
    // dest[newKey]  = newValue;
// }

// src.age = 30;

// console.log("src:", src);
// console.log("dest:", dest);


//Garbage collector  --> in js vo memory jo no longer in use h usko free krne ke liye garbage collector ka use krte h mtlb jo memory free honi chahiye thi vo free nhi h usko free krne k liye garbage collector ka use krte h
// normally iska use unwanted memory ko htana, ye background m hmesha run(chlta)krta h.