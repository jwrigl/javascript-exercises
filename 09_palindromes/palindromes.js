const palindromes = function (string) {
    let stringArray = string.split("");
    console.log(stringArray);
    stringArray = stringArray.reverse();
    console.log(stringArray);
    reversedString = stringArray.reduce((accumulator, currentValue, currentIndex) => {
        return accumulator + (currentValue.includes(" ",",",".","!") ? "" : currentValue);
    }, "");
    console.log(reversedString);
    return string === reversedString; 
};

palindromes('Animal loots foliated detail of stool lamina.')
// Do not edit below this line
module.exports = palindromes;
