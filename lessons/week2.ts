

/**
 * Functions!
 */

 function addTwoNumbers(a, b) {
   return a + b;
 }

 const addTwoNumbersAlternate = (a, b) => {
   return a + b;
 }

function createAddFunction() {
  return (a, b) => a + b
}

const addFunction = createAddFunction();
addFunction(5, 10); // 15