DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon; 

USE bamazon;

CREATE TABLE products (
item_id INT NOT NULL,
product_name VARCHAR(70) NULL,
department_name VARCHAR(70) NULL,
price DECIMAL(7,2) NULL,
stock_quantity INT UNSIGNED NULL,
PRIMARY KEY(item_id)
);
INSERT INTO products
VALUES(1, 'foot hammock', 'home accessories', 8.20, 700),
(2, 'keybord waffle iron', 'kitchen', 49.00, 1000),
(3, 'bracelet flask', 'kitchen', 21.00, 500),
(4, 'sushi pushpins', 'home accessories', 16.00, 2000),
(5, 'TriceraTaco Holder', 'kitchen', 11.71, 370),
(6, 'Dachshund Ice Cube Tray', 'kitchen', 8.87, 2000),
(7, 'Camera Lens Thermos Cup/Mug', 'kitchen', 9.99, 3000),
(8, 'Soylent: Coffiest','food', 34.00, 4000 ),
(9, 'Dripo', 'kitchen', 29.95, 2000),
(10, 'Haribo World Mix', 'food', 15.00, 5000);