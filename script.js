
console.log('hello World!');

// ============== variables

// var, let, const

var firstName; //creating variable name
firstName = "Gaurav"
let lastName = "Shreenet"
const dob = "07-07-1997"

console.log(firstName, lastName, dob)
 firstName = "Bidhya"
 lastName = "Shahi"

console.log(firstName, lastName, dob)

// ============= js-operator
// let a = 5;
// console.log(a);
// const b = a;
// a = 10;
// console.log(a, b);



const a = {
    fistName: "Gaurav",
    lastName: "Shreenet",
};
console.log(a);
const b = a;
a.lastName = "smith";

console.log(a, b);
