// temporal Dead zone -- vo zone jisme hm kisi variable ko access nhi kar skte h 
console.log(marks); 
console.log("Aayushi");
console.log("Rana");
// line no. 2-4 tak temporal dead zone h
// best practice is that don't use global variable and must be use of let and const don't be use var keyword
// let marks = 100;
// console.log(marks);



// variable scoping -- 1.global, 2.function, 3.Block(variables -- var, let, const)



// let or const block scop hote h
// {
//     let age = 100;
// }
// console.log(age);


// {
// const age = 100;
// }
// console.log(age);


// console.log(height);
// var ke case m only variable declation host hoti h value host nhi hot agr ham phle hi print krate h tb 
// {
//     var height =180;
// }
// console.log(height);


// function sayHello(){
//     let name ="Earth";
//     // this is function scope it also same with var and const
//     console.log("hello Duniya", name);
// }
// console.log(name);
// sayHello();


// var has a global scope 
// var age =15;
// console.log(age);
// {
//     console.log(age)
// }
// if (true){
//     console.log(age)
// }
// for(let i =0; i<2; i++) {
//     console.log(age);
// }
// function sayHello() {
//     console.log("hi", age);
// }
// sayHello();