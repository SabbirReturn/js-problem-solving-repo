const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
function findAveragePhonePrice(products){
    let totalPrice = 0;
    let len = phones.length;
    for(let product of products){
        totalPrice = totalPrice + product.price; 
    }
    let average = totalPrice / len;
    return average;
}
let averagePrice = findAveragePhonePrice(phones);
console.log(averagePrice);
