// advanced reduce function example


var fs = require('fs');

var output = fs.readFileSync("customers.txt", 'utf-8')
                .trim()
                .split('\n')
                .map(line => line.split('\t'))
                .reduce((customers, line) => {
                    customers[line[0]] = customers[line[0]] || [];
                    customers[line[0]].push(
                        {
                        item: line[1],
                        price: line[2],
                        quantity: line[3].trim()
                        }
                    );
                    return customers;
                }, {});

console.log("Output", JSON.stringify(output,  null, 2));