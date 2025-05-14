let people = [
    {name:'Meena', age:20},
    {name:'Rina', age:15},
    {name:'Suchorita', age:22}
]

let sum = people.reduce( (p,c)=>p+c.age,0);
// console.log(sum);

// function counter(x){
//     return function(){
//         x++
//     }
// }
// let result = counter(12);
// console.log(result())

// // let number = 10;
// for(let i = 10; i<13; i++){
//     let nextNumber = i+0;
//     nextNumber++
//     // console.log(nextNumber);
// }

// function min(nums) {
//      return Math.min(nums) 
// }
// console.log(min( [1,3,2 ]));

let [a,b] = [1,2,3,4,5];
// console.log(a)
const {x, y, z} = {x: 1, y1: 2, z: 3};
// console.log(y)
const nums = [1,2,3,4,5];
// let output = nums.filter(n => n%2==1);
// console.log(output);

const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
let output = friends.find(x=>x.length==5)
// console.log(output)

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}

let {price} = product;
console.log(price);
  