/* LESSON 3 - Programming Tasks */

/* Profile Object  */

const myProfile =
{
    name: "Jared Reynolds",
    photo: "images/profilePicture.jpg",
    favoriteFoods: ["Pasta", "Pizza", "Cream Pies"],
    hobbies: ["Boardgames", "Videogames"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Herriman, UT",
        length: "5 years"
    }
);

myProfile.placesLived.push(
    {
        place: "Gilbert, AZ",
        length: "12 years"
    }
);


/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(
    food =>
    {
        const listItem = document.createElement("li");
        listItem.textContent = food;
        document.querySelector("#favorite-foods").appendChild(listItem);
    }
);

/* Hobbies List */

myProfile.hobbies.forEach(
    hobby =>
    {
        const listItem = document.createElement("li");
        listItem.textContent = hobby;
        document.querySelector("#hobbies").appendChild(listItem);
    }
);

/* Places Lived DataList */

myProfile.placesLived.forEach(
    placeLived =>
    {
        const place = document.createElement("dt");
        const length = document.createElement("dd");

        place.textContent = placeLived.place;
        length.textContent = placeLived.length;

        document.querySelector("#places-lived").appendChild(place);
        document.querySelector("#places-lived").appendChild(length);
    }
);
