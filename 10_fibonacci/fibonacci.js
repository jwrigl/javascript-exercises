const fibonacci = function(number) {
        return number <= 0 ? "OOPS" :
            number === 1 || number === 2 ? 1 :
            (() => {
                let fibOne = 1;
                let fibTwo = 2;
                for (i=3; i<number;i++) {
                    let temp = fibTwo + fibOne;
                    fibOne = fibTwo;
                    fibTwo = temp;
                 };
                return fibTwo; })();

};

// Do not edit below this line
module.exports = fibonacci;

