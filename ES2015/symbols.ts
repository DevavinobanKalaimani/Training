let sym = Symbol('Deva');
console.log(sym.toString());

let nam = Symbol('Deva');
let Person = {
    [nam]: 'Vinoban'
};
console.log(Object.getOwnPropertyNames(Person));
console.log(Object.getOwnPropertySymbols(Person));

