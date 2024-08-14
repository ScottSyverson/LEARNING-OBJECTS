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



//! Personal Contact Book
//? Create a simple contact book where you can add, view, and search for contacts by name.

//TODO Define a Contact Object: Each contact should be represented as an object with properties like name, phone number, and email.
//TODO Store Contacts in an Array: Use an array to store multiple contact objects.
//TODO Create Functions: Create functions to add a contact, view all contacts, and search for a contact by name.
//* Output Results: Use console.log to display the contacts and search results.


console.log("***************");
console.log("Personal Contact Book");

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

let newContact = {
    name: 'Buck Tuddrussel',
    phone: '555-5558',
    email: 'buck@tudrussle.com',
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

function belowAverage(input){
    for (i=0;i<input.length;i++){

        if (input[i].grade < average){
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

//TODO Create Functions: Create functions to add a movie, rate a movie, and view your entire collection.
//* Output Results: Use console.log to display the movie collection and ratings.

//! Library Book Tracker
//? Create a program to manage a small library, where you can check which books are available or borrowed, and filter the books by their status.


//TODO Predefine Book Objects: Each book should be an object with properties like title and status (available or borrowed), stored inside an array.
let books = [
    { title: "The Great Gatsby", status: "available" },
    { title: "1984", status: "borrowed" },
    { title: "To Kill a Mockingbird", status: "available" },
    { title: "The Catcher in the Rye", status: "borrowed" },
    { title: "Moby-Dick", status: "available" }
];
//TODO Filter Available Books: Write a function to list all available books.
//TODO Filter Borrowed Books: Write a function to list all borrowed books.