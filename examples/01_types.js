console.log("Hey you! We have in store:");

const product = "T-shirt";
let quantity = 10;
let price = 15;

let stock = `${quantity} ${product}s`
console.log(stock)

const cap = "Cap"
let capQuantity = 23
let capPrice = 950/100;

stock = `${capQuantity} ${cap}s`
console.log(stock)

const discount = 225/100
let coupon =`We have a ${discount}€ discount if you reach 20€`
console.log(coupon)

let total = quantity * price + capQuantity * capPrice
