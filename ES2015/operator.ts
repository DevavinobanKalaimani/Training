let displayNames = function(list, ...names){
    console.log(list);
    console.log(names);

    for(let i in names){
        console.log(names[i])
    }
}

let list = 'List of Names'

displayNames(list, 'Deva');
displayNames(list,'anish', 'sriram')

//spread------

let array = ['deva', 'aravind', 'subbu'];
let displayName = function(list, ...names){
    console.log(list);

    for(let i in names){
        console.log(names[i])
    }
}
displayName(list, ...array)
