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