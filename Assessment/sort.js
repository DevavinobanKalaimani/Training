const arr = [3, 3, 3, 1, 1, 1, 8, 3, 9, 8, 7, 8, 6];

function frequencySort(arr = []){
    let map = {};
    for(let i=0; i<arr.length; i++){
        map[arr[i]] = (map[arr[i]] || 0) + 1;
    }
    return arr.sort((a,b) => map[b] - map[a] || a - b);
}
frequencySort(arr);
console.log(arr);