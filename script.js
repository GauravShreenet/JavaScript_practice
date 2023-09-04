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

class Person{
    constructor(n, a) {
        this.personName = n;
        this.address = a;
    }

    bio () {
        // console.log
        return `Hey this person name is ${this.personName} and lives at ${this.address}`;
    }

    upper() {
        this.personName = this.personName.toUpperCase();
        this.address = this.address.toUpperCase();
    }
}


const p = new Person("Gaurav", "Sydney");
p.upper();
p.number = "000987"
console.log(p, p.bio());

