function ticketCost(quantity){
    let first100Price = 100;
    let second100Price = 90;
    let abovePrice = 70;

    if(quantity<=100){
        let total = first100Price * quantity;
        return total
    }
    else if(quantity <=200){
        let first100Cost = first100Price * 100;
        let remainQuantity = quantity - 100;
        let remainCost = remainQuantity * second100Price;
        let total = first100Cost + remainCost;
        return total
    }
    else{
        let first100Cost = first100Price * 100;
        let second100Cost = second100Price * 100;
        let remainQuantity = quantity - (100+100);
        let remainCost = remainQuantity * abovePrice;
        let total = first100Cost + second100Cost + remainCost;
        return total;
    }
}

let ticketPrice = ticketCost(250);
console.log(ticketPrice)