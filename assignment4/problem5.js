function monthlySavings(payments, livingCost){
    let liquidMoney =0;
    if(Array.isArray(payments)=== false || typeof livingCost !=='number'){
        return 'Invalid'
    }
    for(let payment of payments){
        if(payment>=3000){
            let afterPayTex = payment -(payment*20/100);
            liquidMoney = liquidMoney + afterPayTex;
        }
        else{
            liquidMoney = liquidMoney + payment;
        }
    }
    let savingsMoney = liquidMoney -livingCost;
    
    if(savingsMoney<0){
        return "Earn More"
    }
    else{
        return `Total Savings: ${savingsMoney}`;
    }
}
let moneyAmount = monthlySavings(100, [ 900 , 2700 , 3400])
console.log(moneyAmount);