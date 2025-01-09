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
let freshArray = deleteInvalids({num: [ 1 , 2 , 3 ]})
console.log(freshArray);