// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(names){
    let small= names[0]
    for(i=0; i<names.length; i++){
        if(names[i].length<small.length){
            small = names[i];
        }  
    }
    return small;
}
let smallName = smallestName(['rahim', 'robin', 'rafi', 'ron', 'rashed'])
console.log(smallName);