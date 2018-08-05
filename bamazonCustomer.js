var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Wubbs#2557",
    database: "bamazon"
});

connection.connect(function(err) {
    if(err) throw err;
    welcomeToBamazon();
});


function welcomeToBamazon() {
    connection.query("SELECT * FROM bamazon.products", function(err, res) {
        displayItems();
    })
};

    
    
    
    //FUNCTIONS
    function displayItems() {
        var query = "SELECT * FROM bamazon.products";
        connection.query(query, function(err, res) {
            for (var i = 0; i < res.length; i++) {
                    console.log("\n Item ID: " + res[i].item_id + " " + "\n Name: "  + res[i].product_name + " " + "\n Price: $" + res[i].price);
            }
            inquirer.prompt([
                {
                name: "item",
                type: "input",
                message: "Hello, please tell me the item ID for the item you seek.",
                
            },
            {
                name: "units",
                type: "input",
                message: "How many units do you wish to purchase?"
            }
    
            ]).then(function(answer) {
                //CHECK STOCK
                for(i = 0; i < 10; i++) {
                    if(answer.item == res[i].item_id && answer.units > res[i].stock_quantity) {
                        console.log("Insufficient Quantity!");
                        //Prevent order from processing (do nothing, don't overthink it)
                    }
                    else if(answer.item == res[i].item_id && answer.units <= res[i].stock_quantity) {
                        console.log("Let me go get that for you!");
                        //SHOW PRICE
                        console.log("Your total will be" + " $" + answer.units * res[i].price);
                        newStockNumber = res[i].stock_quantity - answer.units;
                        //UPDATE DATABASE
                        connection.query("UPDATE products SET ? WHERE ?", [
                            {
                                stock_quantity: newStockNumber
                            },
                            {
                                item_id: answer.item 
                            }
                        ], function(err) {
                            if(err) throw err;
                            console.log("Press Ctrl + C to exit, and come again!");
    
                            //welcomeToBamazon();
                        });
    
                        //Show customer total price of purchase price * units
                        //showPrice();
                    }
                    else {
                        //console.log("That's not it!");
                    }
                }
        
                
                
        
            })
    
        });
    
      }
    
   /* function checkStock() {
        for(i = 0; i < 10; i++) {
            if(answer.item_id =  bamazon.products[i].item_id && answer.units > bamazon.products[i].stock_quantity) {
                console.log("Insufficient Quantity!");
                //Prevent order from processing (do nothing, don't overthink it)
            }
            else if(answer.item_id =  bamazon.products[i].item_id && answer.units <= bamazon.products[i].stock_quantity) {
                console.log("Let me go get that for you!");
                //Update database sqlQuantity - answer.units
                //updateDatabase();
                //Show customer total price of purchase price * units
                //showPrice();
            }
            else {
                console.log("That's not it!");
            }
        };
    }; 
    
    });
};*/
   
/*function updateDatabase() {
connection.query("SELECT * FROM bamazon.products WHERE product_name = " + answer.intro + 
                 "UPDATE bamazon.products" +
                 "SET stock_quantity = stock_quantity - " + answer.units);
};



function showPrice() {

};


Update database should turn the terminal arguments into a variable that mySql can accept.
Should be one function that depends entirely on user input. 
example logic (
    if(arg1 != null) {
        var userInputItem = argv1 
        var userInputQuantity = argv2

        UPDATE bamazon.products WHERE product_name === userInputItem
        stock_quantity = stock_quantity - answer.units;


    }
)
*/

