let details={
    name: "sabbir",
    birthYear:2000,
    siteName:"google"
}
function password(object){
    if(object.birthYear.toString().length !==4){
        return 'Invalid'
    }
    if(!object.name || !object.birthYear || !object.siteName){
        return 'Invalid'
    }
    let siteName = object.siteName;
    let formattedSiteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);
    let passkey = formattedSiteName +'#'+object.name + '@' + object.birthYear
    return passkey
}
let pass = password(details)
console.log(pass);