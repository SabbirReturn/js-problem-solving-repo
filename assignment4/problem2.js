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
let name = checkName('sabbir');
console.log(name);