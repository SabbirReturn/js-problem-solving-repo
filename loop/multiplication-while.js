let i = 0;
let num = 5;
let sum = 0;
while(i <= 10){
    // console.log(i);
    const result = i * 5;
    console.log(`${i} * ${num} = ${result}`)
    sum = sum + result;
    console.log('Total',sum);
    i++
}