const exp = require("express");
const app = exp();
const path = require("path")

function test(req, res, next) {
    console.log("Testing middleware function");
    next();
}

// methods to call function
app.use(test);

// http:localhost.8080/
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

// http:localhost.8080/about_us
app.get("/about_us", function(req, res) {
    res.send("About Us Page");
});

// http:localhost.8080/products
app.get("/products", function(req, res) {
    res.send("Products");
});

// http:localhost.8080/login
app.get("/register", function(req, res) {
    res.send("Form page:");
});

// http:localhost.8080
var port = process.env.PORT || 3000;
app.listen(port);


/*
const t = require('./test');



if (true) {
    let i = 11;
    console.log(i);
}

t.test();
console.log(t.msg);
*/