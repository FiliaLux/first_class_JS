let books = [
    {title: "1984", author: "George Orwell", year:1949},
    {title: "One Hundred Years of Solitude", author: "Gabriel Gª Marquez", year:1967},
    {title: "Harry Potter and the PS", author: "J.K.Rowling", year:1997},
    {title: "The Davinci Code", author: "Dan Brown", year:2003},
    {title: "Twilight", author: "Stephanie Meyer", year:2005},
    {title: "The Hunger Games", author: "Suzanne Collins", year:2008},
];
const books2000 = (books) => {
    modernBooks = "Books of the 2000's:\n\n";
    for (const book of books) {
        if (book.year > 2000) {
            modernBooks += `Title: ${book.title}\nAuthor: ${book.author}\nYear: ${book.year}\n\n`
        }
    }
    return modernBooks;
};

const titles2000 = books.filter(({year}) => year > 2000).map(({title}) => title).join(", ")

console.log(books2000(books));
console.log(titles2000);

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

console.log(books);