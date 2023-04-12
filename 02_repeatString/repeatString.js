const repeatString = function(string,num) {
    if (num === 0){
        return "";
    }
    
    else if (num < 0) {
        return "ERROR"
    }

    let newstring = string;
    for (let i = 1; i < num; i++) {
        newstring += string;
    }

    return newstring;
};

// Do not edit below this line
module.exports = repeatString;
