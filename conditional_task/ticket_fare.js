const ticketFare = 800;
const age = 52;
const isStudent = false;
if(age < 10){
    console.log('Free')
}
else if( isStudent===true & age<59){
    // 50% off.................
    const discountPrice = ticketFare * 50/100;
    const ticketAmount = ticketFare - discountPrice;
    console.log(ticketAmount);
}
else if( age >= 60){
    // 15% off.................
    const discountPrice = ticketFare * 15/100;
    const ticketAmount = ticketFare - discountPrice;
    console.log(ticketAmount);
}
else{
    console.log(" Ticket Fare 800")
}