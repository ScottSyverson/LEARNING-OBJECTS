/*
let favoritePerson = {

    firstName: "Bob",
    lastName: "Ross",
    hobbies: ["painting", "animal rescue"],
    occupations: ["Drill Sargeant", "TV Personality"],
    age: 52,
    currentHealth: "dead",
    catchPhrase: quoter()
};

console.log(favoritePerson); //this calls all object data
console.log(`My favorite person's first name is ${favoritePerson.firstName}.`);//calls a specific property
console.log(`One of his hobbies was ${favoritePerson.hobbies[1]}.`);//calls a specific property from an array

favoritePerson.currentHealth = "Alive and well"
console.log(favoritePerson.currentHealth);

favoritePerson.paintingSkills = 'He was so good!';

console.log(favoritePerson);
function quoter(){
    let quote = "There are no mistakes, only happy accidents."
    return quote;
}
*/

let listOfMusic = [
    {
        title: 'Never Gonna Give You Up',
        artist: 'Rick Astley',
        year: 1987
    },
    {
        title: 'Black Magic Woman',
        artist: 'Santana',
        year: 1970
    }
]

console.log(listOfMusic[0]);
console.log(listOfMusic[0].title);
console.log(listOfMusic[1]);
let currentObjectLength = Object.keys(listOfMusic[0]).length;
console.log(`${currentObjectLength} is the number of properties`);

console.log("***************");
console.log("Personal Contact Book");
//! Personal Contact Book
//? Create a simple contact book where you can add, view, and search for contacts by name.
//TODO Define a Contact Object: Each contact should be represented as an object with properties like name, phone number, and email.
//TODO Store Contacts in an Array: Use an array to store multiple contact objects.

let contactList = [
    {
        name: 'Rick Astley',
        phone: '555-5555',
        email: 'rick@astley.com'
    },
    {
        name: 'Bob Ross',
        phone: '555-5556',
        email: 'bob@ross.com'
    },
    {
        name: 'Kurt Vile',
        phone: '555-5557',
        email: 'kurt@vile.com'
    },
];

//TODO Create Functions: Create functions to add a contact, view all contacts, and search for a contact by name.
//* Output Results: Use console.log to display the contacts and search results.

let newContact = {
    name: 'Buck Tuddrussel',
    phone: '555-5558',
    email: 'buck@tuddrussel.com',
};

displayContacts();
addContact(newContact);
displayContacts();

let lookName = 'Bob Ross';
findContact(lookName);
lookName = 'Sam Brown'
findContact(lookName);

function addContact(newCon) {
    contactList.push(newCon);
    return contactList;
};

function displayContacts() {
    console.log(contactList);
};

function findContact(who) {
    let isContact = false;

    for (i = 0; i < contactList.length; i++) {

        if (who == contactList[i].name) {
            console.log(who + " is a contact");
            console.log(contactList[i]);
            isContact = true;
        }
    }

    if (isContact == false) {
        console.log(who + " is not a contact.")
    }
};

console.log("***************");
console.log("Student Grade Management");

//! Student Grade Management
//? Create a program to manage student grades, where you can calculate the average grade for the class and identify students who need to improve.

//TODO Predefine Student Objects: Each student should be an object with properties like name and grade, stored inside an array.
let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 76 },
    { name: "Charlie", grade: 92 },
    { name: "David", grade: 63 },
    { name: "Eve", grade: 78 }
];

console.log(getAverage(students));
let average = getAverage(students);
belowAverage(students);

//TODO Calculate Average Grade: Write a function to calculate the average grade of the class.

function getAverage(input) {
    let total = 0;
    for (i = 0; i < input.length; i++) {
        total = total + input[i].grade;
    }
    let average = total / input.length;
    return average;
}
//TODO Identify Students Below Average: Write a function to find and list students with grades below the class average.

function belowAverage(input) {
    for (i = 0; i < input.length; i++) {

        if (input[i].grade < average) {
            console.log(input[i].name + " needs help.");
        }
    }
};

console.log("***************");
console.log("Movie Collection Tracker");

//! Movie Collection Tracker
//? Create a program that allows you to manage a collection of movies, including adding movies, rating them, and viewing your collection.
//TODO Define a Movie Object: Each movie should be represented as an object with properties like title, genre, and rating.
//TODO Store Movies in an Array: Use an array to store multiple movie objects.

let movies = [
    {
        title: 'Mad Max: Fury Road',
        genre: 'adventure',
        rating: 'R',
    },
    {
        title: 'The Witch',
        genre: 'horror',
        rating: 'R',
    },
    {
        title: 'The Big Lebowski',
        genre: 'comedy',
        rating: 'R',
    },

];

let newMovie = { title: 'The Contender', genre: 'drama', rating: 'R' };

//* Output Results: Use console.log to display the movie collection and ratings.
displayMovies();
addMovie(newMovie);
displayMovies();
reviewMovie("The Contender", "10/10");
reviewMovie("Cool Hand Luke", "Great Film!");
newMovie = { title: 'Cool Hand Luke', genre: 'drama', rating: 'PG' };
addMovie(newMovie);
reviewMovie("Cool Hand Luke", "Great Film!");
displayMovies();
displayTitleAndRatingOnly();

//TODO Create Functions: Create functions to add a movie, rate a movie, and view your entire collection.
function addMovie(film) {
    movies.push(film);
    return movies;
};

function displayMovies() {
    console.log(movies);
}

function displayTitleAndRatingOnly() {
    for (i = 0; i < movies.length; i++) {
        console.log(movies[i].title + " Rated: " + movies[i].rating);
    }
};

function reviewMovie(what, rank) {
    let haveFilm = false;

    for (i = 0; i < movies.length; i++) {

        if (what == movies[i].title) {
            movies[i].review = rank;
            console.log(movies[i]);
            haveFilm = true;
        }
    }

    if (haveFilm == false) {
        console.log(what + " is not a movie we have.")
    }
};

console.log("***************");
console.log("Library Book Tracker");
//! Library Book Tracker
//? Create a program to manage a small library, where you can check which books are available or borrowed, and filter the books by their status.
//TODO Predefine Book Objects: Each book should be an object with properties like title and status (available or borrowed), stored inside an array.

let books = [
    { title: "The Great Gatsby", status: "available" },
    { title: "1984", status: "borrowed" },
    { title: "To Kill a Mockingbird", status: "available" },
    { title: "The Catcher in the Rye", status: "borrowed" },
    { title: "Moby Dick", status: "available" }
];

displayBooks()
borrowed();
available()

function displayBooks() {
    console.log(books);
}

//TODO Filter Borrowed Books: Write a function to list all borrowed books.
function borrowed() {

    for (i = 0; i < books.length; i++) {
        if (books[i].status == "borrowed") {
            console.log(books[i].title + ' is currently unavailable.');
        }
    }
};

//TODO Filter Available Books: Write a function to list all available books.
function available() {

    for (i = 0; i < books.length; i++) {
        if (books[i].status == "available") {
            console.log(books[i].title + ' is available.');
        }
    }
};

console.log("***************");
console.log("Recipe Organizer");
//! Recipe Organizer
//? Create a program to manage recipes, where some recipes are predefined, and the user can add or update recipes.

//TODO  Each recipe should have properties like title, ingredients (an array of strings), and instructions.
let recipes = [
    { title: "Pancakes", ingredients: ["Flour", "Eggs", "Milk"], instructions: "Mix and cook on a griddle." },
    { title: "Salad", ingredients: ["Lettuce", "Tomatoes", "Cucumbers"], instructions: "Chop and toss with dressing." }
];

let newThing = { title: "Burger", ingredients: ["Hamburger", "Bun"], instructions: "Form hamburger into patties, grill, and place on bun." };

displayRecipes();
addRecipe(newThing);
displayRecipes();
updateInstructions('Burger', "Form hamburger into patties, grill, and place on bun. Add toppings of your choice.");
displayRecipes();

//TODO Add a New Recipe: Allow the user to input a new recipe's title, ingredients, and instructions, then add it to the list.
function addRecipe(newRecipe) {
    recipes.push(newRecipe);
    return recipes;
};

//* Display All Recipes: Write a function to display all recipes with their details.
function displayRecipes() {
    console.log(recipes);
};

//TODO Update Recipe Instructions: Enable the user to update the instructions of an existing recipe.
function updateInstructions(what, directions) {
    let haveRecipe = false;
    for (i = 0; i < recipes.length; i++) {
        if (what == recipes[i].title) {
            recipes[i].instructions = directions;
            console.log(recipes[i]);
            haveRecipe = true;
        }
    }
    if (haveRecipe == false) {
        console.log(what + " is not a recipe we have.")
    }

};

console.log("***************");
console.log("Car Dealership Inventory");

//! Car Dealership Inventory
//? Create a program to manage a car dealership inventory, where some cars are predefined, and the user can add or update car details.
//TODO Each car should have properties like make, model, year, and price.
let cars = [
    { make: "Toyota", model: "Camry", year: 2020, price: 24000 },
    { make: "Honda", model: "Civic", year: 2019, price: 22000 }
];
let car = { make: "Jeep", model: "Wrangler", year: 2021, price: 31000 }
displayCars();
addCar(car);
displayCars();
updatePrice('Jeep', 32000);
displayCars();
fancyDisplayCars();

//TODO Add a New Car: Allow the user to input a new car's make, model, year, and price, then add it to the inventory.
function addCar(car) {
    cars.push(car);
    return cars;
};

//* Display All Cars: Write a function to display all cars in the inventory.
function displayCars() {
    console.log(cars)
};

function fancyDisplayCars() {
    for (i = 0; i < cars.length; i++) {
        console.log(`${cars[i].year} ${cars[i].make} ${cars[i].model}`);
        console.log(`Available for ${cars[i].price}`);
        console.log(" ");
    }
}

//TODO Update Car Price: Enable the user to update the price of an existing car.
function updatePrice(what, amount) {
    let haveCar = false;
    for (i = 0; i < cars.length; i++) {
        if (what == cars[i].make) {
            cars[i].price = amount;
            console.log(cars[i]);
            haveCar = true;
        }
    }
    if (haveCar == false) {
        console.log(what + " is not a car we have.")
    }
};

console.log("***************");
console.log("Pet Names with Details");
//! Pet Names with Details
//TODO Create a program that manages a list of pet names, where each pet has a name, type (e.g., dog, cat), and age.
//TODOEach object should contain name, type, and age.

let pets = [
    {
        petName: "Pomegranate",
        petType: "Dog",
        petAge: 11
    }
];

displayPets();
let Jeff = { petName: "Jeff", petType: "Dog", petAge: 16 };
addPet(Jeff);
displayPets();
fancyDisplayPets()

//TODO  Add a New Pet: Allow the user to input a new pet's name, type, and age, then add it to the list.
function addPet(pet) {
    pets.push(pet);
    return pets;
};

//* Display All Pet Names: Write a function to display all pets with their details.
function displayPets() {
    console.log(pets);
};

function fancyDisplayPets() {
    for (i = 0; i < pets.length; i++) {
        console.log(`${pets[i].petName} is a ${pets[i].petType} who is ${pets[i].petAge} years old `);
        console.log(" ");
    }
};

console.log("***************");
console.log("Not part of any lesson. Just me screwing around with the concepts.");
let testArray = [];

let testObject = { first: "first thing", second: "second thing" };
let testObject2 = { first: "first thing 2", second: "second thing 2" }

addThing(testObject, testArray);
displayArray(testArray);
addThing(testObject, testArray);
displayArray(testArray);

function addThing(thing, list) {
    list.push(thing);
    return list;
};

function displayArray(yourArray) {
    console.log(yourArray);
};

displayArray(contactList);
displayArray(students);
displayArray(movies);
displayArray(books);
displayArray(recipes);
displayArray(cars);
displayArray(pets);

