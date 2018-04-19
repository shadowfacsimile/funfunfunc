// reduce function example

var arr = [5, 3, 2, 8, 0, 1, 7, 9, 0];

var sum = function(x, s) {
    return s + x;
};

console.log(arr.reduce(sum, 0));
console.log(arr.reduce((x, s) => s + x ));