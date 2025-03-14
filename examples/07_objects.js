const shirt = {
    name: "T-shirt",
    quantity: 10,
    price: 15,
    sizes: ["XS","S","M","L","XL","XXL"]
};
const cap = {
    name: "Cap",
    quantity: 23,
    price: 950/100,
    sizes: "One size"
};
const socks = {
    name: "Socks",
    quantity: 65,
    price: 8,
    sizes: ["34-37","38-41","42-45"]
};
const getProductInfo = (product,attr) => {
    return product[attr]
};
console.log(getProductInfo(shirt,"name"));

const myShows = [
    {
        id: 1,
        name: "Under the dome",
        genres: ["Drama", "Thriller"],
        rating: 32/10
    },
    {
        id: 2,
        name: "This is us",
        genres: ["Romance","Drama","Comedy"],
        rating: 89/10
    },
    {
        id: 3,
        name: "Shamless",
        genres: ["Drama","Comedy"],
        rating: 97/10
    }
];
myRatings = ""
const showRating = (shows) => {
    for (const show of shows) {
        myRatings = `${myRatings}${show.name}: ${show.rating}/10\n`
    }
    return myRatings
};
console.log(showRating(myShows));

const renderShow = (show) => {
    return `
    <h2>${show.name}</h2>
    <p>${show.genres.join(", ")}</p>
    `;
};
let template = "";
for (const show of myShows) {
    template += renderShow(show);
};
document.write(template);

const user = {
    email: "user@email.com",
    role: "USER",
    app: "keepcoding",
    info: {
        company: null,
        location: null
    },
    modules: ["js","html","react"]
};

const admin = JSON.parse(JSON.stringify(user));

admin.email = "admin@email.com";
admin.role = "ADMIN";
admin.info.company = "keepcoding";

const admin2 = {
    ...user,
    info: {
        ...user.info
    }
};

admin2.email = "admin2@email.com";
admin2.role = "ADMIN2"
admin2.info.company = "techco";
admin2.info.location = "Santa Monica";

console.log(user, admin, admin2);
