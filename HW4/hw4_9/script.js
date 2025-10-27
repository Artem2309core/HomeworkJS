function minNumber(arr) {
    let min = arr[0];
    for (let num of arr) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

console.log(minNumber([10, 2, 30, -5])); // -5
