// Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let reverse = [];
for(let i=0; i<colors.length; i++){
    // console.log(colors[i]);
    reverse.unshift(colors[i]);
    
}
console.log(reverse);