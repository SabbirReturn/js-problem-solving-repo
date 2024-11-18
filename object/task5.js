// Loop through an object and print the key-value pairs with their types

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};
let keys = Object.keys(myObject);
console.log(keys)
// console.log(keys , value);
for( let key of keys){
    console.log('key:', key,'|','type:', typeof key);
}