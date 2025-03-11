let username = "    AnGie ";
let password = " WhatABurger  ";
let message = "";

username = username.trim().toLowerCase();
password = password.trim();


if (username === "angie" && password === "WhatABurger") {
    message = "Welcome back!"
} else {
    message = "Wrong username or password, try again."
}
console.log(message, "*" * password.length);