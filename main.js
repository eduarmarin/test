//create a test with jest for this function

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalizeFirstLetter("hello"))

//A reverseString function that takes a string and returns it reversed.
function reverse(s){
    return s.split("").reverse().join("");
}

console.log(reverse('Hello'))


export {capitalizeFirstLetter, reverse}
//module.exports = capitalizeFirstLetter()
   