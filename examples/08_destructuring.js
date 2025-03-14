const [book1, book2, book3, book4, book5, book6]= [
    {title: "1984", author: "George Orwell", year:1949},
    {title: "One Hundred Years of Solitude", author: "Gabriel Gª Marquez", year:1967},
    {title: "Harry Potter and the PS", author: "J.K.Rowling", year:1997},
    {title: "The Davinci Code", author: "Dan Brown", year:2003},
    {title: "Twilight", author: "Stephanie Meyer", year:2005},
    {title: "The Hunger Games", author: "Suzanne Collins", year:2008},
];
console.log(book2);

const books = [
    {title: "1984", author: "George Orwell", year:1949},
    {title: "One Hundred Years of Solitude", author: "Gabriel Gª Marquez", year:1967},
    {title: "Harry Potter and the PS", author: "J.K.Rowling", year:1997},
    {title: "The Davinci Code", author: "Dan Brown", year:2003},
    {title: "Twilight", author: "Stephanie Meyer", year:2005},
    {title: "The Hunger Games", author: "Suzanne Collins", year:2008},
];
const books2000 = (books) => {
    let titles = [];
    for (const { year, title } of books ) {
        if (year > 2000) titles = [...titles,title];
        }
    return titles
}
console.log(books2000(books))

//Usando el ejemplo anterior del array de películas
const renderShow = ({name,genres}) => {
    return `
    <h2>${name}</h2>
    <p>${genres.join(", ")}</p>
    `;
};

const useState = () => {
    return ["hello", 1];
};
const [key,value] = useState(); // ["hello",1]

const getAdminUser = () => {
    return {name: "name", role: "ADMIN", email: "adminuser@email.com"};
};
const {role} = getAdminUser(); // ADMIN

const csvProducts = "T-Shirt,10,Amazon\nCap,5,Google\nPants,15,Amazon\nShoes,20,Google";
const processCSV = (csv) => {
    let products = [];
    const lines = csv.split("\n");
    for (line of lines) {
        const [name,price,store]= line.split(",")
        products = [...products, {
            name: name, // name,
            price: parseInt(price),
            store // Si el nombre de la propiedad es el mismo que el de la variable se omite
        }];
    };
    return products
};

const products = processCSV(csvProducts);
console.log(products);