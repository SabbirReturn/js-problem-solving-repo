function countOccurrences(arr, target) {
    return arr.filter(num => num === target).length;
}

// Sample input
let numbers = [5, 6, 11, 12, 98, 5];
let target = 5;

// Find occurrences
let result = countOccurrences(numbers, target);
console.log(result); // Outputs: 2