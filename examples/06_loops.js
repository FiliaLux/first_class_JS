const products = ["Cap", "T-Shirt", "Socks"];

const showProd = (product) => {
    console.log(`Product: ${product}`)
};

for (i = 0; i < products.length; i++) {
    showProd(products[i])
};

const nums = [1,2,3,4,5];
let doubleNums = [];
for (const num of nums) {
    doubleNums = [...doubleNums, num * 2]
};
console.log(doubleNums);

const users = [
    "yourfriendpaco@gmail.com",
    "rositasalaita@keepcoding.com",
    "quemajalapajara@hotmail.com",
    "emailestupidon4@gmail.com"
];
let gmailUsers = [];
for (const user of users) {
    if (user.includes("gmail.com")) {
        gmailUsers = [...gmailUsers, user.replace("gmail.com","********")]
    }
};

console.log(gmailUsers)

const userProducts = [
    ["Cap","TV","Ball"],
    ["Cat tree","Apple seeds","Garden hose"],
    ["Sofa","Table","Ball"]
];
let message = ""
for (const user of userProducts) {
    message = `${message} Products: `
    for (const product of user) {
        message = `${message} ${product},`
    }
    message = `${message}\n`
};
console.log(message);

const tree = [
    ["-","-","*","-","-"],
    ["-","*","*","*","-"],
    ["*","*","*","*","*"]
];
let XmasTree = "";
for (const row of tree) {
    XmasTree = `${XmasTree}${row.join("")}\n`
};
console.log(XmasTree)