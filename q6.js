const myProfile = {
    name: "Azeez",
    age: 25,
    country: "Nigeria",
    hobby: "Singing"
};

function displayProfile(person) {
    console.log(`${person.name} is ${person.age} years old from ${person.country} and loves ${person.hobby}.`);
}

displayProfile(myProfile);