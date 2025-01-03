function add(num1,num2){
    let result = num1 + num2;
    return result
}
function subtract(num1,num2){
    let result = num1 - num2;
    return result
}
function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}
function divide(num1, num2){
    let result = num1/num2;
    return result;
}

function calculator(a,b,operation){
    if(operation === 'add'){
        let result = add(a,b);
        return result
    }
    else if(operation === 'subtract'){
        let result = subtract(a,b);
        return result;
    }
    else if(operation === 'multiply'){
        let result = multiply(a,b);
        return result;
    }
    else if(operation=== 'divide'){
        let result = divide(a,b);
        return result
    }
    else{
        return "only 'add','sub','multi','divide' allowed"
    }
}
let result = calculator(2,3,'divide');
console.log(result);