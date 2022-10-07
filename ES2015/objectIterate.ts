let pErson = {
    fname : 'Deva',
    lname : 'vinoban'
};

pErson[Symbol.iterator] = function(){
    let properties = Object.keys(pErson);
    let count = 0;
    let isDone = false;
    let next = () => {
        if(count >= properties.length){
            isDone = true;
        }
        return{done: isDone, value: this[properties[count++]]};
    }
    return {next};
};

for(let x of pErson){
    console.log(x);
    
}
