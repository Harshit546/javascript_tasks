function sumFromString(str) {
    const result = str.split(',').map(res => parseFloat(res.trim())).reduce((acc, num) => acc+num, 0);

    return result;
}

const str = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";
console.log(sumFromString(str));