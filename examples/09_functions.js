const sum = (operation, ...params) => {
    let result = 0;
    for (const param of params) {
        if (operation === "sum") result += param;
        else if (operation === "sub") result -= param;
    }
    return result
};

const counter = () => {
    let count = 0;
    const increment = () => {
        count += 1
    };
    const log = () => {
        return count
    };
    return {increment,log};
};
const player1Score = counter();
player1Score.increment();
player1Score.increment();
player1Score.increment();
player1Score.increment();
const player1Value = player1Score.log()
console.log(player1Value);

const player2Score = counter();

const storeProducts = [
    { id:"p001", name: "T-Shirt", price: 20, quantity: 2},
    { id:"p002", name: "Cap", price: 5, quantity: 1},
    { id:"p003", name: "Jeans", price: 40, quantity: 1},
];
const cart = () => {
    let products = [];
    const addProduct = (product) => {
        products = [...products, product];
    };
    const listProducts = () =>{
        return products;
    };

    return {
        addProduct,
        listProducts
    };
};

const user1 = cart();
user1.addProduct(storeProducts[1]);

const user2 = cart();
for (const product of storeProducts) {
    if (product.price <= 20){
        user2.addProduct(product);
    }
};

console.log(
    user1.listProducts(),
    user2.listProducts()
);

const suma = (num1,num2) => num1 + num2;
const resta = (num1,num2) => num1 - num2;
const mult = (num1,num2) => num1 * num2;
const div = (num1,num2) => num1 / num2;

const operation = (num1,num2,op) => {
    return op(num1,num2);
};

let result = operation(2,5,resta);
result = operation(1,2,(num1,num2) => num1 - num2);

