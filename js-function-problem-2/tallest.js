function getMax(nums){
    let max = nums[0];
    for(let num of nums){
      if(num >max){
        max = num;
      }   
    }
    return max;
}
let numbers =[12,13,14,15,16,17,18,29,11,1,2,3,4];
let max = getMax(numbers);
console.log('Max value is:',max);