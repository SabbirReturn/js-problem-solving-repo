// Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumber = [];
for(let number of numbers){
    // console.log(number);
    if(number % 2 ===0){
        // console.log('even number:',number)
        evenNumber.push(number);
        
    }
}
console.log(evenNumber);

// for( let i=0; i<numbers.length; i++){
//     // console.log(numbers[i]);
//     if( numbers[i] % 2===0){
//         // console.log('Even number:',numbers[i]);
//         evenNumber.push(numbers[i]);
       
//     } 
// }
// console.log(evenNumber)

