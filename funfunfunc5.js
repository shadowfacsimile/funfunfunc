// closures example

var func = function(outp){
    var infunc = function(inp){
        return outp + inp;
    };
    return infunc;
};

var a = func(20);

console.log(a(3));