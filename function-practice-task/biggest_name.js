// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function biggestName (names){
    let bigName = names[0];
    for(let i= 0; i<names.length; i++){
        // console.log(names[i]);
        if(names[i].length > bigName.length){
            bigName = names[i];
        }
    }
    return bigName;
}
let names= biggestName(['rahim', 'robin', 'rafi', 'ron', 'rashed'])
console.log(names);