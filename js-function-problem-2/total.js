let products = [
    {name:"shirt", price: 500},
    {name:"pant", price: 800},
    {name:"shampo", price: 200},
    {name:"belt", price: 400},
]

function totalCost (products){
    let total = 0;
    for(let product of products){
        total = total + product.price;
    }
    return total;
}
let totalPrice = totalCost(products);
console.log("Please Pay:",totalPrice);