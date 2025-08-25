function factorial(num) {
    if (num == 0 || num == 1) {
        return num;
    }

    return num * factorial(num-1);
}

const input = 5;
console.log(factorial(input));