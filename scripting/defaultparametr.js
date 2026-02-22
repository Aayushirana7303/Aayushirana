//Default parameters-->  Allow to use functions with default parameters.



function getAge()  {
        return 120;
}
 

function utility(name = "Love", age = getAge())
{
      console.log(name, age);
}

utility("Love", 20);   
// utility();     --->> By default function call krega.




// function solve(value = "Rahul")
// {
//         console.log("HELLO JI", value);
// }



// solve(null);        ----->>> this will print the null.
// solve(undefined);   ---->>>   this will print the default value.




// Method of inserting the default Array.-->>

// function arr ( name = ["Aayushi", "Aastha", "Vinita"])
// {
//         console.log("HELLO JI", name);
// }

// arr();


// this is the method of inserting default objects.-->>

// function solve(value = {age: 15, wt:50, ht: 190})
// {
//         console.log("HELLO JI", value);
// }

// solve();



// method of inserting default parameters --->>

// function sayName(fName = "Aayushi", lName = "Rana") 
// {
//     console.log("My name is:", fName,"",lName );
// }

// sayName("Aastha");