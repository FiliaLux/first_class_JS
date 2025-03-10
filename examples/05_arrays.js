console.log("05")

const products = ["T-Shirt", "Cap", "Socks"];
const productPrices = [15, 950/100, 8];

products.push("Pants")
productPrices.pop()
const capIndex = products.indexOf("Cap");
products.splice(capIndex, 1)

const csvItems = "PC,PS5,XBox,iPhone"
const parseCsvItems = (line) => {
    const csvProducts = csvItems.split(",")
    csvProducts.pop()
    csvProducts.shift()

    const newCsvItems = csvProducts.join(",")
    return newCsvItems
}

console.log(products.reverse(), productPrices.indexOf(8),parseCsvItems(csvItems))

let numbers = [];
numbers = ("1,2,3,4,5".split(","))
console.log(numbers)
numbers.splice(3,0,"keepcoding")
let msg = ""
if (numbers.includes("keepcoding")) console.log("This array doesn't only contain numbers");  
numbers.unshift(10)
console.log(numbers)
console.log(numbers.indexOf("keepcoding"))
numbers.splice(4,1)
console.log(numbers)
console.log(numbers.length)

/*  Los tres puntos dentro de un nuevo array nos
permite coger a otro como referencia sin mo-
dificar el nuevo array cuando el de referencia 
cambia. */
const productUser1 = ["TV", "Laptop", "PS5"];
const productUser2 = [...productUser1]; 

const productList1 = productUser1.push("Cap");
console.log(productUser1,productUser2)

const addProduct = (newProduct,productList) => {
    const newProductList = [...productList]
    newProductList.push(newProduct)
    return newProductList
};

console.log(addProduct("Socks",productUser2))



