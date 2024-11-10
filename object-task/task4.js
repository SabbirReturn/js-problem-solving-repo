// Count the number of properties
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
const keys = Object.keys(student);
for(let key of keys){
    console.log(key);
}
// console.log(keys);
const propertyCount = Object.keys(student).length;
console.log(propertyCount);