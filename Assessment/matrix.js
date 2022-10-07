function printMatrix(n){
    let matrix = new Array(n)
    .fill()
    .map(() => new Array(n).fill(n));
    let counter = 1, startCol = 0, startRow = 0; let endCol = n-1; let endRow = n-1;
    // let string = " ", count = 0;
    
    while(startCol <= endCol && startRow <= endRow){
        for(let i = endRow; i>= startRow; i--){
            let k = i;
          for(let j = 0; j<n; j++){
            if(k>25){
                k %=26;
            }
            console.log((String.fromCharCode) (k + 'a') + " ");
            k +=n;
          }
          return matrix;
        }
}
}
let l = printMatrix(4);
console.log(l)
