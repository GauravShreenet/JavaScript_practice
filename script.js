const person = (name, add) => {
    return {
        personName: name,
        address: add,
        bio () {
            // console.log
            return `Hey this person name is ${this.personName} and lives at ${this.address}`;
        },
    };
};

const p = person("Gaurav", "Hillsdale");
console.log(p, p.bio());

const p2 = person("Sam", "Rockdale");
console.log(p2, p2.bio());