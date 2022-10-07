class person{
    constructor(nAme){
        this.nAme = nAme;
        console.log(this.nAme + 'vinoban');
        
    }
static staticMethod() {
    console.log("Static mathod");   
}
greet(){
    console.log('hello ' + this.nAme);
    
}
}
let p = new person("Deva");
person.staticMethod();
p.greet();