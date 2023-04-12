const reverseString = function(string) {
    let stringArray = string.split("");
    let newString = stringArray.reverse().join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
