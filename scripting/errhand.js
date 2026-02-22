// Eroor --> Koi esa event by that ek code ka normal flow of execution distrupt ho jaye (run na paye) error hota h.
// Types -->
//         1. Compile time,          2. run time


// compile time error


// syntax error    --->>
// console.log(1;




// Run time error
// refference error
// console.log(x);

// handling using --> (try, catch, finally) block


try{
    // is block m vo code likhte h jisme error aa skta h
    console.log("Try block starts here");
    console.log(y);
    console.log("Try block ends here");
    // error aayega to direct catch block wali line pr aa jate error se next line print nhi hoge 
}
catch(err) {
// define krte h, error ke sath aap kya krna chahte h
// retry logic
// fallback mechanism
// logging
// custom error
console.log("I am inside catch block");
console.log("Your error is here:", err);
}

// this is finally block --> will run Every time chahe error aaye ya na aaye
finally{
    console.log("I will run EveryTime, as I am finally block");
}


// THROW keyword se hm apna ek custom error bhi create kr skte h

// lets create a custom error 
// try {
//     console.log(x);
// }
// catch(e){
// throw new Error("Bhai phle declare kro, fir print karna");
// }


let errorCode = 100;
if(errorCode ==100) {
    throw new Error("Invalid json");
}