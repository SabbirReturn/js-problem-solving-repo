function calculateMoney(number){
    if(number<0){
        return 'Give me a positive number'
    }
    let ticketPrice = 120;
    let expenditure = 500+(8 * 50);
    let profit = (number * ticketPrice) - expenditure;
    return profit
}


function checkName(name){
    let safeEnding = ['a', 'y', 'i' , 'e' , 'o' , 'u', 'w']
    let lastCharacter = name[name.length-1];
    if(typeof name !=='string'){
        return 'Invalid'
    }
    if(safeEnding.includes(lastCharacter)){
        return 'Good Name'
    }
    else{
        return 'Bad name'
    }
}


function deleteInvalids(arrays){
    let number =[];
    if(Array.isArray(arrays)== false){
        return'"Input is not an array!"'
    }
    for(let array of arrays){
        if( typeof array === 'number' && !isNaN(array)){
            number.push(array);
        }
    }
    return number;
}


function password(object){
    if(object.birthYear.toString().length !==4){
        return 'Invalid'
    }
    if(!object.name || !object.birthYear || !object.siteName){
        return 'Invalid'
    }
    let siteName = object.siteName;
    let formattedSiteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);
    let passkey = formattedSiteName +'#'+object.name + '@' + object.birthYear
    return passkey
}


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