let height = [62,65,63,61,67,17,67,78,72,73,74]
    let max = height[0]
function getMax (numbers){
    for(let num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

let tallest = getMax(height);
console.log(tallest);