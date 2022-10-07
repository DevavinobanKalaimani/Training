class add{
    constructor(){
         let d = 2, f = 3;
         let res = d + f;
         console.log(res)

    }
    getMethod(){
        console.log('hi!!');
        
    }
}

class sum extends add{
    constructor(){
        super();
        let g = 3, k = 6;
        let ree = g + k;
        console.log(ree)
    }
    getMethod(){
         console.log('heloo!');
        
        // return super.getMethod();
        
    }
}

let s = new sum();
s.getMethod();