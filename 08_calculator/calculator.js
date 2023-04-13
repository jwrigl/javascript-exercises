const add = function(addOne,addTwo) {
	return addOne + addTwo;
};

const subtract = function(subtractOne,subtractTwo) {
  return subtractOne - subtractTwo;
	
};

const sum = function(sumArray) {
  let total = 0;
  for (i=0;i<sumArray.length;i++) {
    total += sumArray[i];
  }
  return total;
};

const multiply = function(multiplyarray) {
  result = multiplyarray[0]
  for (i=1;i<multiplyarray.length;i++) {
    result = result*multiplyarray[i];

  }
  return result;
};

const power = function(base,exponent) {
  return base**exponent;
	
};

const factorial = function(factorialNumber) {
  if (factorialNumber === 0) {
    return 1
  }
  let result = factorialNumber;
  for (i=factorialNumber-1;i>1;i--) {
    result = result*i;
  }
  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
