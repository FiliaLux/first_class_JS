console.log("Hey you! We have in store:");

let stock = "";
const product = "T-shirt";
let quantity = 10, price = 15, shirts = 0;

stock += `${quantity} ${product}s`;

const cap = "Cap";
let capQuantity = 23, capPrice = 950/100, caps = 0;

stock += `\n${capQuantity} ${cap}s`;

const sock = "Socks";
let sockQuantity = 45, sockPrice = 8, socks = 2;

stock += `\n${sockQuantity} ${sock}`;

const discount = 20;
let discountReach = 20;
let coupon =`We have a ${discount}% discount if you reach ${discountReach}€`;

let selectedProduct = prompt("Enter a product: ").trim().toLowerCase();
let selectedQuantity = parseInt(prompt("Enter quantity: "));
selectedQuantity = isNaN(selectedQuantity) ? 0 : selectedQuantity;

let shoppingCart = "===================";
if (selectedProduct === product.toLowerCase()) {
    shirts = selectedQuantity
    if (selectedQuantity >= 2) {
        shoppingCart += `\nYou recieve 10% on your next ${product}\n`
    }
} else if (selectedProduct == cap){
    caps = selectedQuantity
    if (selectedQuantity >= 3) {
        shoppingCart += `\nYou get a free ${cap} for buying 3!\n`
    }
} else if (selectedProduct == sock) {
    socks = selectedQuantity
} else {
    shoppingCart += `\nThere's no discount for that selection\n`
}
if (shirts > 0) {
    shoppingCart += `\n${shirts} ${product} x ${price}€ = ${shirts * price}€`
} 
if (caps > 0) {
    shoppingCart += `\n${caps} ${cap} x ${capPrice}€ = ${caps * capPrice}€`
}
if (socks > 0) {
    shoppingCart += `\n${socks} ${sock} x ${sockPrice}€ = ${socks * sockPrice}€`
}
let total = shirts * price + caps * capPrice + socks * sockPrice;

let canApply = total > discountReach;

let message = ""
if (canApply) {
    total -= total * discount/100
    message = `\nYou have a ${discount}% discount!\n`
} else {
    message = `\nReach ${discountReach}€ to apply for a ${discount}% discount!\n`
}
console.log(stock, `\n${shoppingCart}`,`\n${message}`,`\nTotal = ${total}€`)
