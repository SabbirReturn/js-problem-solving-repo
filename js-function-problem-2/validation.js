// function sum(a,b){
//     if(typeof a !== 'number'){
//         return 'Please give me a number'
//     }
//     else if(typeof b !== 'number'){
//         return 'Please give me  Number'
//     }
//     let result = a + b;
//     return result;
// }
// let result = sum(5, 'seven');
// console.log(result);


function fullName ( first, second){
    if(typeof first !== 'string'){
        return 'First name should be a string'
    }
    else if (typeof second !== 'string'){
        return 'Second name should be a string'
    }
    let result = first + ' ' +second;
    return result;
}
let firstName = 'Sabbir'
let lastName = 7
let full = fullName(firstName,lastName)
console.log(full)