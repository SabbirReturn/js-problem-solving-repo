let products = [
    {name:'Laptop', Price: 35000},
    {name:'Tablet', Price: 15000},
    {name:'Mobile', Price: 20000}
]
function calculateElectronicsBudget(products){
    let total = 0;
    for(let product of products){
        total = total + product.Price;
    }
    return total;
}
let Price = calculateElectronicsBudget(products);
console.log(Price);