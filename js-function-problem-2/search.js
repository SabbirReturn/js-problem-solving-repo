let products=[
    {id: 1, name :'walton phone', price : 200000},
    {id: 2, name :'Iphone Phone', price : 200000},
    {id: 3, name :'phone', price : 200000},
    {id: 4, name :' Samgsung Phone', price : 200000},
    {id: 5, name :'Hp Laptop', price : 200000},
    {id: 6, name :'MI Monitor', price : 200000},
    {id: 7, name :'j8 phone', price : 200000},
    {id: 8, name :'keyboard', price : 200000},
    {id: 9, name :'mouch', price : 200000},
    {id: 10, name :'monitor', price : 200000},
    {id: 11, name :'tab phone', price : 200000},
    {id: 12, name :'mike', price : 200000},
]

function matchProducts(products, search){
    let matched = [];
    for(let product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched
}
let result = matchProducts(products,'laptop')
console.log(result);