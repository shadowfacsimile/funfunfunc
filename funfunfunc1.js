
// filter function example

console.log("Hello!");

var func = function(x) {
    return 2 * x;
};

var derp = func;

console.log(func(2));
console.log(derp(3));

var arr = [5, 3, 2, 8, 0, 1, 7, 9, 0];

var isEven = function(x) {
    return x % 2 == 0;
};

console.log(arr);
console.log(arr.filter(isEven));
console.log(arr.filter((x) => x % 2 == 0)); //ES6 arrow function