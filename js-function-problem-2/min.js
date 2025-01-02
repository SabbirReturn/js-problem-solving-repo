let height = [12,13,14,15,11,78,9,6,1];
    let min = height[0];
function getMin (numbers){
    for(let num of numbers){
        if(num < min){
            min = num
        }
    }
    return min;
}
let short = getMin(height);
console.log(short);