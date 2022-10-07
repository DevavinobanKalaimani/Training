function* createGenerator() {
    yield 1;
    console.log('After 1st yield');
    yield 2;
    console.log('After 2nd yield');
    yield 3;
}
let myGen = createGenerator();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
//# sourceMappingURL=generators.js.map