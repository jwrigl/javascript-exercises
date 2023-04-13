const palindromes = function (string) {
    // replace any non-alphanumerics with nothing
    string = string.replace(/[^\w]/g, "");
    // split the string into an array
    let stringArray = string.split("");
    //reverse the array
    stringArray = stringArray.reverse();
    //convert array back to string
    reversedString = stringArray.reduce((accumulator, currentValue, currentIndex) => {
        return accumulator + currentValue;
    }, "");
    return string.toLowerCase() === reversedString.toLowerCase(); 
};
// Do not edit below this line
module.exports = palindromes;