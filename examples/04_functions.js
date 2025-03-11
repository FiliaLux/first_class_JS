const product = "T-shirt";
let quantity = 10, price = 15, shirts = 1;

const cap = "Cap";
let capQuantity = 23, capPrice = 950/100, caps = 3;

const sock = "Socks";
let sockQuantity = 45, sockPrice = 8, socks = 2;

// Estas 3 funciones hacen lo mismo
const itemTotalPrice = (price = 0, quantity = 0) => { /* Podemos añadir valor por 
                                                         defecto a los parámertos */ 
    result = price * quantity
    return result
};

// Cuando son sencillas podemos resumirlas en una línea de retorno directa
const itemTotalPriceTwo = (price, quantity) => price * quantity;

// También podemos incluir el return y hacerla multilínea
const itemTotalPriceThree = (price, quantity) => (
    price * quantity
);

let totalShirtPrice = itemTotalPrice(price,shirts);
let totalCapsPrice = itemTotalPriceTwo(capPrice,caps);
let totalSocksPrice = itemTotalPriceThree(sockPrice,socks);

const itemPromotion = (item, quantity = 0) => {
    let shoppingCart = "";
    if (!item) {
        throw new Error("Non valid item")
    }
    if (item === product.toLowerCase()) {
    shirts = quantity
    if (quantity >= 2) {
        shoppingCart += `You recieve 10% on your next ${product}`
    }
    } else if (item == cap.toLowerCase()){
    caps = quantity
    if (quantity >= 3) {
        shoppingCart += `You get a free ${cap} for buying 3!`
    }
    } else if (item == sock.toLowerCase()) {
    socks = quantity
    } else {
    shoppingCart += `There's no discount for that selection`
    } return shoppingCart
};
totalPromotion = itemPromotion(cap, );
console.log(totalShirtPrice, totalCapsPrice, totalSocksPrice, totalPromotion);