// let firstName = 'Deva';
// let secondName = 'Vinoban';

// let obje = {
//     firstName,
//     secondName
// };

// console.log(obje.firstName)

function createName(firstName, secondName, age){
    let fullName = firstName + ' ' + secondName;
    return {
        firstName, 
        secondName, 
        fullName,
        isAdult(){
            return age > 20;
        }
    }
}

let FullName = createName('Deva','Vinoban', 21);
console.log(FullName. fullName, FullName.isAdult());