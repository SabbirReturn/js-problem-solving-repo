let products = [
    {name:"shirt", price: 500, quantity: 7},
    {name:"pant", price: 800, quantity: 6},
    {name:"shampo",price: 200, quantity: 4},
    {name:"belt", price: 400, quantity: 6},
]

function shoppingCost(products){
    let total = 0;
    for(let product of products){
        let totalCost = product.price * product.quantity;
        total = total + totalCost;
    }
    return total;
}

let cost = shoppingCost(products);
console.log('Please pay:',cost)