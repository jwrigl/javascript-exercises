const fibonacci = function(number) {
        number = parseInt(number);
        // returns oops if number negative or zero, else it will return 1 if the number is one or two
        return number <= 0 ? "OOPS" :
            number === 1 || number === 2 ? 1 :
            // if none of these conditions are met IIFE will return the chosen fibonacci number
            (() => {
                let fibOne = 1;
                let fibTwo = 2;
                for (i=3; i<number;i++) {
                    let temp = fibTwo + fibOne;
                    fibOne = fibTwo;
                    fibTwo = temp;
                 };
                return fibTwo; })(); // after function defined, it is immediately invoked by the double brackets
                // function no longer usable after 

};

// Do not edit below this line
module.exports = fibonacci;

