const palindromes = function (string) {
    stringArray = string.split("")
    if (stringArray === stringArray.reverse()) {
        return true;
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
