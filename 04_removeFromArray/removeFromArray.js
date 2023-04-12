const removeFromArray = function(array,...args) {
    for (let i = 0; i < args.length; i++) {
        // if the value specified to be removed from the array does not exist
        if (array.indexOf(args[i]) === -1) {
            continue
        }
        array.splice(array.indexOf(args[i]),1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
