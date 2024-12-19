let sabbir = 50;
let hasan = 500;
let misu = 5000;
if(sabbir>hasan && sabbir> misu){
    // console.log('Sabbir is the boss')
}
else if(hasan > sabbir && hasan>misu ){
    // console.log('Hasan is the boss')
}
else{
    // console.log('Misu is the boss')
}


function getTheMaxNumber (num1,num2,num3){
    let result;
    if(num1 > num2 && num1>num3){
        result = `The biggest is num is:${num1}`;
    }
    else if(num2>num1 && num2>num3){
        result = `The biggest is num is:${num2}`;
    }
    else{
        result = `The biggest is num is:${num3}`;
    }
    return result
}
let result = getTheMaxNumber(23,32,33);
// console.log(result);

function getMaxNUmber(num1,num2,num3,num4,num5,num6,num7,num8){
    let max = Math.max(num1,num2,num3,num4,num5,num6,num7,num8);
    return max;
}
let output = getMaxNUmber(1,11,12,122,1333,122,1334,1345567)
console.log(output);