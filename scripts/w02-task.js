/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Jared Reynolds"
const currentYear = 2023
const profilePicture = "images/profilePicture.jpg"

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imgElement = document.querySelector("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imgElement.setAttribute("src", profilePicture)
imgElement.setAttribute("alt", `Profile image of ${fullName}`)

/* Step 5 - Array */

const favoriteFoods = ["Pasta", " Pizza"];
foodElement.innerText = favoriteFoods;
const thirdFavoriteFoodItem = " Cream Pie";
favoriteFoods.push(thirdFavoriteFoodItem);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;




