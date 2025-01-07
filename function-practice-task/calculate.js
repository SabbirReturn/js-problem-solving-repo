let products = [
    {name : 'Laptop', price:35000},
    {name : 'tablet', price:15000},
    {name : 'mobile', price:20000},
]
function calculateElectronicsBudget(){
    let total = 0;
    for( let product of products){
        total = total + product.price;
    }
    return total;
}
let cost = calculateElectronicsBudget(products);
console.log(cost);