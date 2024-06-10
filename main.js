//create a test with jest for this function

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalizeFirstLetter("hello"))

export {capitalizeFirstLetter}
//module.exports = capitalizeFirstLetter()
   