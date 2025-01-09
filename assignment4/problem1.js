function calculateMoney(number){
    if(number<0){
        return 'Give me a positive number'
    }
    let ticketPrice = 120;
    let expenditure = 500+(8 * 50);
    let profit = (number * ticketPrice) - expenditure;
    return profit
}
let ticketNumber = calculateMoney(30);
console.log(ticketNumber);