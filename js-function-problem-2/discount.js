function discountPrice (quantity){
    if(quantity<=100){
        let total = quantity * 100;
        return total;
    }
    else if(quantity<=200){
        let total = quantity* 90;
        return total;
    }
    else{
        let total = quantity*70;
        return total;
    }
}

let discountCost = discountPrice(201);
console.log(discountCost);