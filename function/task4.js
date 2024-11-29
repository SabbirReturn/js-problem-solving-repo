// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(numbers){
    // console.log(numbers);
    let singleValue = numbers.split('');
    // console.log(singleValue);
    let countZero = [];
   for( let number of numbers){
    // console.log(number);
    if(number % 2===0){
        // console.log('zero',number);
        countZero.push(number)
        
    }
   }
    // console.log(countZero); 
    let zero= countZero.length;
    return zero;
}
let output = count_zero("1000111001")
console.log('zero length',output);
