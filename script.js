// const person = (name, add) => {
//     return {
        // personName: name,
        // address: add,
        // bio () {
        //     // console.log
        //     return `Hey this person name is ${this.personName} and lives at ${this.address}`;
        // },
        // upper() {
        //     this.personName = this.personName.toUpperCase();
        //     this.address = this.address.toUpperCase();
        // }
//     };
// };

// const p = person("Gaurav", "Hillsdale");
// p.upper();
// console.log(p.bio());

// const p2 = person("Sam", "Rockdale");
// console.log(p2, p2.bio());

// class Person{
//     constructor(n, a) {
//         this.personName = n;
//         this.address = a;
//     }

//     bio () {
//         // console.log
//         return `Hey this person name is ${this.personName} and lives at ${this.address}`;
//     }

//     upper() {
//         this.personName = this.personName.toUpperCase();
//         this.address = this.address.toUpperCase();
//     }
// }


// const p = new Person("Gaurav", "Sydney");
// p.upper();
// p.number = "000987"
// console.log(p, p.bio());

// Encapsulation
// dont have to know the algrothm or fuction of the specific

// Abstraction
// Private dont give access outside of it's class(javascript private is written starting #)

// Inheritance
// get the variable of one class or method from other.

// polymorphism.
// using the same blueprint to make more

// class Human {
//     constructor({name, dob, pet}) {
//         this.name= name;
//         this.dob = dob;
//         this.pet = pet;
//     }
//     bio() {
//         return `hi iam ${this.name} and was born in ${this.dob} and ${this.pet}`;
//     }

//     petBio() {
//         return `My pet name is ${this.pet}`;
//     }
// }


// const addAndSquare = (a, b) => {
//     const ttl = a + b;
//     const square = (multiplier) => {
//         return ttl ** multiplier;
//     };
//     return square;
// }

// // const result = addAndSquare(2, 3)(2);
// const result = addAndSquare(2, 3);
// console.log(result(2));

// Resursion 

// let i = 0;
// const increase = () => {
//     i++
//     console.log(i)

//     if ( i === 10){
//         return;
//     }

//     increase();
// }

// increase();


const money = [323, 12312, 12344, 43231, 145344]
let sum = 0;
const total = (money) => {
    sum += money.pop();
    if(!money.length){
        return sum
    }
    return total(money)
};

const ttl = total(money)
console.log(ttl)