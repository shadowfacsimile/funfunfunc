// map function example


var arr = [5, 3, 2, 8, 0, 1, 7, 9, 0];

var plusTwo = function(x) {
    return x + 2;
};

console.log(arr.map(plusTwo));

console.log(arr.map((x) => x + 2)); //ES6 arrow function