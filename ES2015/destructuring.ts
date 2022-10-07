let movies = ['Mersal', 'Thuppakki', 'Sura']
let [blockbuster, hit, flop] =  movies;

console.log(flop)
console.log(blockbuster)

//objects---

let films = {
    Vijay : 'Master',
    Ajith : 'Mangatha',
    Surya : 'Rolex'
};

let { Vijay : V, Ajith : A, Surya : S} = films;

console.log(S)