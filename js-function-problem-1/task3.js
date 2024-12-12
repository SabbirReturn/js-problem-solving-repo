// Write a function to count the number of vowels in a string.
function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    return count;
}

// Example usage
let input = "Hello World";
let result = countVowels(input);
console.log(result); // Outputs: 3
