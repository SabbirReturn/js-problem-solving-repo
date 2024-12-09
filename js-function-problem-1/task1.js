function convertCelsiusToFahrenheit(degree){
    let result = degree * 9/5 +32
    return result;
}
let temperature = convertCelsiusToFahrenheit(44);
console.log(temperature);