function sumFromString(str) {
    const nums = str.match(/\d+/g);

    const res = nums ? nums.reduce((sum, num) => sum + Number(num), 0) : 0;
    return res;
}

const input = "foo8bar8cat2tc2";
console.log(sumFromString(input));