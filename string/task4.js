// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
let text = 'Exam will come';
let word = text.split('')
console.log(word)
console.log(word.indexOf('x'));
word[1] = 'y';
console.log(word);