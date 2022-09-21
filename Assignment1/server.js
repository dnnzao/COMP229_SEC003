const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));


/*
    Middleware functions pass the control of the flow to the next function.
    GET - happens when the user gets information from the server, it is encrypted.
    POST - happens when the user posts information to the server, it is not encrypted.
*/

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/home.html"));
});

app.use("/about_me", function(req, res) {
    res.sendFile(path.join(__dirname, "/about_me.html"));
});

/*
    example of how to make a login page with GET and POST
*/
/*
app.get("/user_login", function(req, res) {
    res.send("GET: Username : " + username + "\nPassword: " + password);
});
*/
app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "/login.html"));
});

app.post("/user_login", function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    //res.redirect("/admin_dashboard");
    res.send("POST: Username : " + username + "\nPassword: " + password);
});
// admin_dashboard page
app.get("/admin_dashboard", function(req, res) {
    var obj={username: "denio", password: "123"};

    res.json({obj});
});


/*
    param example
*/
// localhost:3000/product/14578
app.get("/product/:id", function(req, res) {
    var product_id = req.params.id;

    res.send("Product ID: " + product_id);
});

/*
    example of redirect function
*/


/*
app.route("/login")
    .get(function(req, res) {
        res.sendFile(path.join(__dirname, "/login.html"));
    })
    .post(function(req,res) {
        res.sendFile(path.join(__dirname, "/login_success.html"));
    });
*/


var port = process.env.PORT || 3000;
app.listen(port);