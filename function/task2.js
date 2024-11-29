// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function differentNum(number){
    if(number % 2 ===1){
        let result = number * 2;
        return result;
    }
    else{
        let result = number /2;
        return result;
    }
}
console.log(differentNum(4))
console.log(differentNum(5))