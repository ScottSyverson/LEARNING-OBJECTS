
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
