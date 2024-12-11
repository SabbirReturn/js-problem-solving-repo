// function countOccurrences(arr, target) {
//     return arr.filter(num => num === target).length;
// }

// // Sample input
// let numbers = [5, 6, 11, 12, 98, 5];
// let target = 5;

// // Find occurrences
// let result = countOccurrences(numbers, target);
// console.log(result); // Outputs: 2


function countOccurrences(num1, num2){
    let unique = [];
    let countNumber = [];
    for(let number of num1){
        unique.push(number);
        if(unique.includes(num2)===false){
            countNumber.push(unique);
            console.log(countNumber);
        }
    }
}
countOccurrences(([5,6,11,12,98, 5]),5)