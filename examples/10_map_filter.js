const numbers = [1,2,3,4,5];
// Usamos paréntesis en la arrow function porque así el return va implícitio
// A estos métodos se les pueden concatenar otros propios de arrays.
const double = numbers.map(number => (number * 2)).join(" | ");
console.log(double);
const lowerThan5 = numbers.filter(number => number < 5);
console.log(lowerThan5);

/* From the example on 07_practice.js
const titles2000 = books.filter(({year}) => year > 2000).map(({title}) => title).join(", ")

books = books.map(book => {
    if (book.title === "Twilight") {
        return {...book, stock: 0};
    }
        return {...book, stock: 10};
});

const setStock = (title, quantity) => {
    const book = books.find(book => book.title === title);
    if (!book) {
        throw new Error(`Book ${title} not found`);
    }
    books = books.map(book => {
        if (book.title === title) {
            return {...book, stock: quantity};
        }
    });
    return {...books};
};

try {
    setStock("JS",100);
} catch (error) {
    console.error(error);
}
*/
// From the example at 06_practice.js
const evenOdd = (numbers) => {
    validNum = numbers.filter(number => number);
    const even = validNum.filter(number => number % 2 === 0);
    const odd = validNum.filter(number => number % 2 !== 0);
    return {even, odd};
};

const {even, odd} = evenOdd(numbers);
console.log(even, odd);

const total = numbers.reduce((acc,number) => {
    const result = acc + number;
    return result
}, 0);
console.log(total);