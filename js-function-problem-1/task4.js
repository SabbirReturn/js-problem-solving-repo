function countRepeat(nums){
    let getDoubleNumber = [];
    for(let i=0; i<nums.length; i++){
        let num = nums[i];
        if(num==12){
            getDoubleNumber.push(num);
        }
    } 
    let  result = getDoubleNumber.length;
    return result;
}
let numbers =[12,13,14,15,12,15,19,11,12];
let output = countRepeat(numbers);
console.log(output);