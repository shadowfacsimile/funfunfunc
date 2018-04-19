// currying example

var ld = require('lodash');

let dragon = (name, size, element) => 
                name + ' is a ' + size + ' dragon that breathes ' + element + '!';

console.log(dragon('Glaurung', 'BIG', 'fire'));

let dragon2 = name =>
                size =>
                    element =>
                        name + ' is a ' + size + ' dragon that breathes ' + element + '!';

console.log(dragon2('Smog')('BIIIG')('ice'));

dragon = ld.curry(dragon);

console.log(dragon('Glaurung')('BIG')('fire'));

