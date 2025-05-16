let product=[
    {id:1, name:'HP', price:72000},
    {id:2, name:'Lenovo', price:52000},
    {id:3, name:'Dell', price:62000},
    {id:4, name:'Mack', price:162000},
]

// using map

let name= product.map(x=>x.name);
// console.log(name);

// using filter

let price = product.filter(x=>x.price>60000);
console.log(price);