DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  products_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);
INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("PS4", "Video Games", 299.99, 295);

INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch", "Video Games", 399.99, 300);

INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("Galaxy Nintendo 3DS XL", "Video Games", 299.99, 100);

INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("Assasins Creed Ezio Collection PS4 remaster", "Video Games", 39.99, 9);

INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("Legend of Zelda Links Awakening", "Video Games", 29.99, 15);

INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("Legend of Zelda Breath of The Wild", "Video Games", 49.99, 22);

INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("C-type Charger", "Phone accessories", 18.99, 1000);

INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("55 inch Flat Screen", "Electronics", 699.99, 256);

INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("Black Panther on blu-ray", "Movies and TV", 25.99, 156);

INSERT INTO products (products_name, department_name, price, stock_quantity)
VALUES ("The Arrow seasons 1-4 on blu-ray", "Movies and TV", 35.99, 36);