'use strict';

//task 1
const student = {
    name: 'Максим',
    age: 20,
    grade: 75
};
console.log('Початкові дані студента:', student);

student.grade = 85;
student.course = 'Programming';
console.log('Оновлені дані студента:', student);

//task 2
const book = {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937
}
console.log('Початкові дані книги:', book);

book.publisher = {
    name: 'Allen & Unwin',
    location: 'London'
}
console.log('Оновлені дані книги (з вкладеним об\'єктом):', book);

//task 3
const movie = {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    director: 'Peter Jackson',
    year: 2001,
    budget: '93 million',
    genre: 'Fantasy'
}
console.log('Інформація про фільм:');

for (let property in movie) {
    console.log(`${property}: ${movie[property]}`);
}
console.log(movie);

//task 4
const person1 = {
    name: 'John',
    age: 25,
    city: 'New York'
};
const person2 = {
    name: 'John',
    age: 25,
    city: 'New York'
};
function areObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}
if (areObjectsEqual(person1, person2)) {
    console.log('Об\'єкти person1 та person2 однакові за структурою.');
} else {
    console.log('Об\'єкти person1 та person2 відрізняються за структурою.');
}

//task 5
const animals = [
    { type: 'cat', name: 'Tiger'},
    { type: 'dog', name: 'Spot' },
    { type : 'rabbit', name: 'Fluffy' },
    { type: 'hamster', name: 'Hammy' },
]
console.log('Початковий масив animals:', animals);

const newAnimal = { type: 'Fish', name: 'Nemo' };
animals.push(newAnimal);

console.log('Оновлений масив animals (з новим об\'єктом):', animals);