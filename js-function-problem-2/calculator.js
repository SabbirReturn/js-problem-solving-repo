function add(num1,num2){
    let sum = num1 + num2;
    return sum;
}
function subtract(num1, num2){
    let sub = num1 - num2;
    return sub;
}
function multiply(num1,num2){
    let multi = num1 * num2;
    return multi;
}
function divide(num1, num2){
    let div = num1 /num2;
    return div;
}

function calculator(a, b, operation){
    if(operation === 'add'){
        let result = add(a , b)
        return result;
    }
    else if(operation=== 'subtract'){
        let result = subtract(a , b);
        return result;
    }
    else if(operation === 'multiply'){
        let result = multiply(a , b);
        return result;
    }
    else if(operation ==='divide'){
        let result = divide(a , b);
        return result;
    }
    else{
        return "only 'add', 'subtract','multiply','divide' operation is allowed"
    }
}
let result = calculator(12, 3, 'multiply');
console.log(result);
