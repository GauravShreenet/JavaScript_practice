
// console.log('hello World!');

// // ============== variables

// // var, let, const

// var firstName; //creating variable name
// firstName = "Gaurav"
// let lastName = "Shreenet"
// const dob = "07-07-1997"

// console.log(firstName, lastName, dob)
//  firstName = "Bidhya"
//  lastName = "Shahi"

// console.log(firstName, lastName, dob)

// // ============= js-operator
// // let a = 5;
// // console.log(a);
// // const b = a;
// // a = 10;
// // console.log(a, b);





// const a = {
//     fistName: "Gaurav",
//     lastName: "Shreenet",
// };
// console.log(a);
// const b = a;
// a.lastName = "smith";

// console.log(a, b);


// const pet = "cow"
// // if (pet === "cat") {
// //     console.log("meow")
// // }
// // else if (pet === "dog") {
// //     console.log("bark")
// // }
// // else if (pet === "cow") {
// //     console.log("Moo")
// // }else{
// //     console.log("no animal detected")
// // }

// switch (pet) {
//     case "cat":
//         console.log("meow");
//         break;

//         case "dog":
//         console.log("bark");
//         break;

//         case "cow":
//         console.log("moo");
//         break;

//         // case "":
//         // console.log("");
 
//         default:
//         console.log("no animal detected");
//         break;
// }


// try {
//     //code
//     console.log(first);
// }catch (error) {
//     //what you want to do when there is an error
//     console.log(error.message);
// }finally {
//    console.log("this code was executed at " + Date.now());
// }

// setTimeout (() => {
//     console.log("i am from settimeout")
// }, 3000);

// let i = 0
// const counter = setInterval (() => {
// console.log("it is " + i++);

// if (i === 10) {
//     clearInterval(counter);
//     console.log("it stopped");
// }
// }, 1000)


// JS - ES6
// Template literals

// const a = 5;
// const b = 6;
// const str = `when we add  ${a} and ${b} the total would be ${a+b}`;

// console.log(str);


// Arrow function
// function add() {
//     console.log("from add funciton")
// }

// add();

// let add = (a, b) => {
//     const total = a + b;
//     return total;
// }

// let add = (a, b) => {
    
//     return a + b;
// }

// let add = (a, b) => a + b

// const ans = add(4234574, 1000);
// const ans2 = add(44, 533);
// const ans3 = add(34, 5);
// console.log(ans, ans2, ans3);

// Loops

// for loops
// let string = "";
// for(i=1; i <= 5; i++){
//     for(j=0; j < i; j++){
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }
// i%2
// i%2===0
/// continue, in loop to ext 1 loop

// let i = 0;
// let j = 1;
// let num;
// let number;
// while (i <= 10) {
//     num = i
//     i = i+2;
//     console.log(`this is even ${num}`)
//     while (j < i) {
//         number = j;
//         console.log(`this is odd ${number}`)
//         j = j + 2;
        
//     }
// }

const num = "045678976s";
// const val = Number(num);

const val = parseInt(num)

console.log(typeof val, val);