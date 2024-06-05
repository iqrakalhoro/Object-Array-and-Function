"use strict";
// Step 2
let product1 = {
    name: "Tesla",
    model: 2024,
    cost: 23980000,
    quantity: 10,
};
let product2 = {
    name: "iPhone 16",
    model: 2024,
    cost: 700000,
    quantity: 5,
};
let product3 = {
    name: "Honda 125",
    model: 2023,
    cost: 200000,
    quantity: 10,
};
// Step 3
let inventoryProduct = {
    Product: [product1, product2, product3]
};
// Step 4
console.log("Quantity of the third product:", inventoryProduct.Product[2].quantity);
// Step 5
let product4 = {
    name: "Rolex",
    model: 2022,
    cost: 40000,
    quantity: 12,
};
inventoryProduct.Product.push(product3);
console.log("Name of the fourth product:", inventoryProduct.Product[3].name);
console.log("Cost of the first product:", inventoryProduct.Product[0].cost);
