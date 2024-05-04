const print = (a, b, arr = []) => {
    if (a > b) return arr;
    arr.push(a);
    return print(a + 1, b, arr);
};

console.log(print(1, 10));
