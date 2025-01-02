let phones = [
    {name: 'Samsung', Price : 25000, camera : '12mp', color:'Black'},
    {name: 'Iphone', Price : 31000, camera : '12mp', color:'Black'},
    {name: 'Walton', Price : 12000, camera : '12mp', color:'Black'},
    {name: 'Htc', Price : 28000, camera : '12mp', color:'Black'},
    {name: 'Oppo', Price : 22000, camera : '12mp', color:'Black'},
]

function getExpensivePhone(phones){
    let max = phones[0];
    for(let phone of phones){
        if(phone.Price >max.Price){
            max = phone
        }
    }
    return max;
}
 let expensive = getExpensivePhone(phones)
 console.log("Expensive Phone of the Year:", expensive);