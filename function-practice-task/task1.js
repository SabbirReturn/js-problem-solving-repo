// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function minNumber(numbers){
    let minimum = numbers[0];
    for(let number of numbers){
        if(number<minimum){
            minimum = number;
        }
        
    }
    return minimum;
}
let lowestNumber = minNumber([167, 190, 120, 165, 137]);
console.log('The lowest number is:',lowestNumber);