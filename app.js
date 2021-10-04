const fs = require('fs');

const genders = ['male', 'female'];
const maleNames = ['Arek', 'Bogdan', 'Borys', 'Bartek', 'Cezary', 'Czesław', 'Dariusz', 'Eryk', 'Jacek', 'Piotr'];
const femaleNames = ['Ania', 'Asia', 'Celina', 'Dorota', 'Dagmara', 'Dominika', 'Ewa', 'Karolina', 'Paulina', 'Amelia'];
const lastNames = ['Kwiatkowska', 'Gąsiorowski', 'Roszak', 'Burczak', 'Kowalski', 'Piasecki', 'Mrągowski', 'Dobrowolska', 'Kosyl', 'Kłopotowski', 'Stachurska', 'Kowal', 'Gruszka', 'Zaręba', 'Kasprzycki', 'Tracz', 'Przybylska', 'Gardias', 'Linda', 'Gawryluk'];
const ages = [18, 23, 27, 30, 31, 35, 36, 19, 24, 28, 40, 56, 66, 22, 69, 42, 44, 55, 62, 20];

const randChoice = (arr) => arr[Math.floor(Math.random() * arr.lenght)];

const people = [];

for(let i=0; i<=20; i++) {
    const randomGender = randChoice(genders);
    const randomName = randomGender === 'female' ? randChoice(femaleNames) : randChoice(maleNames);
    const randomLastName = randChoice(lastNames);
    const randomAge = Math.floor(Math.random() * (78 - 18 + 1)) + 18;

    randomPerson = {
        gender: randomGender,
        firstName: randomName,
        lastName: randomLastName,
        age: randomAge,
    }

    people.push(randomPerson);

}

const jsonPeople = JSON.stringify(people);
console.log('people:', people);

fs.writeFile('people.json', jsonPeople, (err) => {
    if (err) throw err && console.log ('File saved');
    console.log('The file has been saved!');
  });