var mysql = require("mysql");
var inquirer = require("inquirer");

//connecting the database
var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "bamazonDB"
});

//now connecting and checking connection of database
connection.connect(function (err) {
   // if (err) throw err;
    //console.log("connection as id " + connection.threadId + "\n");
    readProducts();
});

//this will log the products to the terminal
function readProducts() {
    console.log("Welcome to Bamazon... \n");
    var query = connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        //console.log(res);
        console.log("ID | Product | Department | Price | Quantity ");
        console.log("---------------------------------------------------------------------------------------");
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].products_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }
        console.log("---------------------------------------------------------------------------------------\n");
        purchase();
    });
    console.log(query.sql);

};

//this will prompt the buyer to select their purchase options
function purchase() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "product",
                message: "What is the ID of the product you wish to purchase?"
            },
            {
                type: "input",
                name: "units",
                message: "How many units of the product you wish to purchase?"
            },
        ])
        //this will update the database and inform the buyer of their purchase
        .then(function (purchase) {
            var product = purchase.product;
            var amount = purchase.units;

            connection.query("SELECT * FROM products ", function (err, res) {
            
                //if (err) throw err;
                if (res.stock_quantity === 0) {

                    console.log("Bamazon apologizes, this product is currently out of stock.");

                } else if(amount < res.stock_quantity) {
                    "UPDATE products SET stock_quantity = " + (res.stock_quantity - amount) + " WHERE id = " + product;

                    console.log("Your purchase has been made your total is: ");

                    console.log(price * amount);
                 } 
            })
        })
    
};

