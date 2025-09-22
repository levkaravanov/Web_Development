const http = require('http');

let server = http
    .createServer((req, res) => {
        console.log("Thanks for the awesome http request");
    })
    .listen(1234, () => {
        console.log("I'm listening. You betcha. Ya.");
    });

