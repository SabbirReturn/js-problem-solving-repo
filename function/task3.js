// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers){
    let len = numbers.length;
    console.log('length',len);
    let sum = 0;
    for( let number of numbers){
        console.log('mark',number);
        sum = sum + number; 
    }
    let avg = sum / len;
    return avg;
}
let numbers =[93,80,85,90,81,84];
let avg = make_avg(numbers);
console.log('Avg mark',avg);
