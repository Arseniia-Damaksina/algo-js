// Create a function factorial(a) that returns the factorial of a number.
// That function must be recursive.

const factorial = (num) => {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

console.log(factorial(1));
console.log(factorial(0));
console.log(factorial(3));
console.log(factorial(7));