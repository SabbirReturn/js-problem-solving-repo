const booksName = ['Physics','Math','biology','ICT'];
const verifyName = booksName.includes('Biology');
console.log(verifyName);
if(booksName.includes('Biology')){
    console.log('I will got A+')
}
else{
    console.log('Obosta valo na');
}
const verifyArray = Array.isArray(booksName);
console.log(verifyArray);
// console.log(Array.isArray(booksName));