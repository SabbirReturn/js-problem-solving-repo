// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
let statement = 'I am a hard working person';
// let reverse = '';
// for( let i=0; i<statement.length; i++){
//     // console.log(statement[i]);
//     reverse =statement[i]+reverse ;
    
// }
// console.log(reverse);
let reverse = statement.split(' ').reverse().join(' ')
console.log(reverse);