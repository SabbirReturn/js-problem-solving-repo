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


// function fullName ( first, second){
//     if(typeof first !== 'string'){
//         return 'First name should be a string'
//     }
//     else if (typeof second !== 'string'){
//         return 'Second name should be a string'
//     }
//     let result = first + ' ' +second;
//     return result;
// }
// let firstName = 'Sabbir'
// let lastName = 7
// let full = fullName(firstName,lastName)
// console.log(full)

// function getPrice(product){
//     if(typeof product !=='object'){
//         return 'Give me a object'
//     }
//     let cost = product.price;
//     return cost;
// }
// // let price = getPrice({name:'Samsung',price:5});
// let price = getPrice(5)
// console.log(price)

function getSecond(numbers){
    if(Array.isArray(numbers)==false){
        return 'Give me a Array'
    }
    let number = numbers[1];
    return number;
}

// let number = getSecond([1,2,3,4,5,6])
let number = getSecond(4)
console.log(number);