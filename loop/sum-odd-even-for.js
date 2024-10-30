// Display sum of all the odd numbers from 91 to 129.

let oddSum = 0;
let evenTotal = 0;
for( let i = 91; i<=129; i++){
    if(i % 2 ===0){
        console.log('Even number',i);
        evenTotal = evenTotal + i;
        console.log('Even sum', evenTotal);
    }
    else if ( i % 2 !==0){
        console.assert('Odd Number',i);
        oddSum = oddSum + 1;
        console.log('Odd sum', oddSum);
    }
    else{
        console.log('General number',i);
    }
}