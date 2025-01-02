function Quantity (shirt,pant, shoe){
    let shirtPrice = 500;
    let pantPrice = 700;
    let shoePrice = 900;

    let totalShirtPrice = shirt * shirtPrice;
    let totalPantPrice = pant * pantPrice;
    let totalShoePrice = shoe * shoePrice;

    let totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
    return totalPrice;
}
let price = Quantity(2,3,4);
console.log(price);