const users = [
    {firstName: 'deva', lastName: 'vinoban', age: 21},
    {firstName: 'anish', lastName: 'kumar', age: 20},
    {firstName: 'aravind', lastName: 'raj', age: 22},
    {firstName: 'sri', lastName: 'ram', age: 21}
];

const output = users.reduce(function(acc, curr){
    if(curr.age < 22){
        acc.push(curr.firstName)
    }
    return acc;
    
}, [])

console.log(output);