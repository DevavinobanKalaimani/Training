function deepToPlain(array){
    return array.reduce((a, b) => {
        if(Array.isArray(b)){
            return[...a, ...b];
        }
        return[...a, b];
    }
    ,[]);
}

let plain = deepToPlain([1, 2, [3, 4, [5]]]);
console.log(plain);
