let object = {
    firstname: 'deva',
    lastname: 'vinoban'
}

let object1 = {
    firstname: 'sathya',
    lastname: 'baskar'
}

let fullname = function(){
    console.log(this.firstname+" "+this.lastname);
}

// fullname.apply(object);
// fullname.call(object);

let FName = fullname.bind(object1);
// console.log(FName)
FName();