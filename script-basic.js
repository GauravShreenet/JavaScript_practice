
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

// const num = "045678976s";
// // const val = Number(num);

// const val = parseInt(num)

// console.log(typeof val, val);

// const vals = ["prem", 654, true, null, undefined, NaN, [234, 456], {}];


const fruits = ["banana", "apple", "orange", "mango"];
// fruits.push("mango"); //add at the last
// fruits.shift("kiwi");
// // fruits.
// // fruits.pop(); //remove from the last
// // fruits.upshift(); //remove from the begining

// console.log(fruits);

// fruits.forEach((item)=>{
//     console.log(item, " is yummyt");
// });

// const newArg = fruits.map((item, i)=>{
//     console.log(item, i);
//     return item.toUpperCase();
// });

// console.log(newArg);

// const newArg = fruits.filter((fruit)=>{
// return !fruit.includes("e")
// });
// console.log(newArg);

// const newArg = fruits.find((fruit) => fruit.includes("e"));
// console.log(newArg)

// const money = [3456, 2456, 23785, 334]
// const total = money.reduce((subTtl, item) => {
//     return subTtl + item;
// }, 10)

// console.log(total);

// const arg = Array(100).fill("❤");
// console.log(arg)

// challenge #1

// const array = Array(50).fill((Math.floor(Math.random()*100)));
// console.log(array);

// let randomArry = [];
// let even = [];
// let odd = [];

// for (let i = 0; i < 50; i++){
//     randomArry.push(Math.floor(Math.random()*100) + 1);
// }

// console.log(randomArry);
// console.log(randomArry.sort((a, b) => b - a));

// const total = randomArry.reduce((subTtl, item)=> {
//     return subTtl + item;
// }, 0);

// console.log(total);

// for (const num of randomArry) {
//     if (num % 2 === 0){
//         even.push(num);
//     }else{
//         odd.push(num);
//     }
// }

// console.log(even);
// console.log(odd);

// const noDuplicate = randomArry.filter((item, index) => randomArry.indexOf(item) === index);
// console.log(noDuplicate);

// // 1,3,4,11,6,5,2

// let uniquesRandom = [];
// for (let i = 0; i < 50; i++) {
//     const n = Math.floor(Math.random()*100) + 1;
//     if (!uniquesRandom.includes(n)){
//         uniquesRandom.push(n);
//     }
    
// }
// console.log(uniquesRandom.sort());


// const person = {
//     _fName: "Gaurav",
//     _lname: "Shreenet",
//     _address: "Sydney",
//     lazy: false,
//     number: 614332834,
//     skills: ['java', 'js', 'react'],
    
// }

// console.log(person._fName);
// person.number = "736353";

// console.log(person);
// delete person.parent;
// for(let key in person) {
//     console.log(person[key]);
// }
// const p = Object.entries(person);
// const p = Object.keys(person);
// const p = Object.values(person);
// console.log(p);

// Destruction
// Default + Rest + Spread

// console.log(person);
// const { _fname, _address } = person;

// console.log(_fname, _address);

// const bio = ( {name = "NA", add}) => {
//     const str = `hi there my name is ${name}
//     and i live in ${add}`

//     return str;
// };

// const sam = {
//     name: "sam",
//     add: "AU",
// };

// const prem = {
//     name: "prem",
//     add: "AU",
// };
// const data = bio(sam);
// console.log(data);

// const p = {
//     name: 'sam',
//     add: 'sydney',
//     g: {
//         sex: "male",
//     }
// }

// const career = {
//     education: "MSCS",
//     year: 2012
// }

// const samobj = Object.assign({}, p, career);
// p.name = "harry";

// // const samobj = {
// //     ...p,
// //     ...career,
// // }
// console.log(samobj);

// const { name, ...rest } = samobj;
// console.log(samobj, name, rest);

// const a = ["a", 22, true];
// const b = ["b", 34, false];

// const c = Object.assign([], (a, b));
// console.log(c);

// ======== date

// const today = Date();
// const today = Date.now();
// console.log(typeof today, today);


// const today = new Date('2023-08-29');

// // const data = today.toLocaleTimeString();
// // const data = today.get();

// today.setDate(today.getDate() + 5);
// console.log(today);

// #1: Create a function that takes foods and the expires data and returns one of the followings:
// 1. if expired: AB is expired 4 days ago.
// 2. if not expired: you have 10 days to use this product.

// Function to check if a number is a covering number

// function CoveringNumbers(num) {
//     const str = num.toString();
//     let counter = 0;

//     for (let i =0; i < str.length; i++) {
//         const char = str[i];

//         if (char === '0') {
//             counter++;
//         }


//         if (char !== '0' && i !== str.indexOf(char)){
//             return -1;
//             break;
//         }
//     }
//     return counter;
//     // console.log(str);

// }

// console.log(CoveringNumbers(3456000));

