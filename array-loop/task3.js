// Use a for...of loop to concatenate all the elements of an array into a single string.
var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
let word = '';
for(let number of numbers){
    console.log(number);
    word = word + number;
}
console.log(word)

