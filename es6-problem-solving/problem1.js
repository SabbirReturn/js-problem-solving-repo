// let oddArrays = [1,3,5,7,9]
// // let evenArrays = [];
// // for(let oddArray of oddArrays){
// //     let evenNumber = oddArray+1;
// //     evenArrays.push(evenNumber);
// // }
// // console.log(evenArrays);

// function arrays(numbers){
//     let evenArrays = [];
//     for(let number of numbers){
//         let evenNumber = number +1;
//         evenArrays.push(evenNumber);
//     }
//     return evenArrays
// }

// // let evenArray = arrays(oddArrays);
// // console.log(evenArray);


// let evenArray = oddArrays.map(x=>x+1)
// console.log(evenArray);


let array = [33,60,79,78,90,101,30];
let divisibleNumbers = array.filter(x=> x % 10==0);
console.log(divisibleNumbers, divisibleNumbers.length);

let divisibleNumber = array.find(x => x % 10==0);
console.log(divisibleNumber);
