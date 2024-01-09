'use strict';

const yearOfBirth = prompt("Введіть рік народження:");
const city = prompt("Введіть місто, в якому ви живете:");
const favoriteSport = prompt("Введіть ваш улюблений вид спорту:");

if (yearOfBirth === null || city === null || favoriteSport === null) {
    alert("Шкода, що Ви не захотіли ввести свій(ю) ...");
} else {
    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(yearOfBirth);

    let cityMessage;
    if (['Київ', 'Вашингтон', 'Лондон'].includes(city)) {
        const countries = {
            'Київ': 'Україна',
            'Вашингтон': 'США',
            'Лондон': 'Велика Британія',
            'Париж': 'Франція',
            'Рим': 'Італія',
            'Берлін': 'Німеччина'
        };
        cityMessage = `Ти живеш у столиці ${countries[city]}...`;
    } else {
        cityMessage = `Ти живеш у місті ${city}...`;
    }

    const sportsChampions = {
        'футбол': 'Ліонель Мессі',
        'бокс': 'Майк Тайсон',
        'баскетбол': 'Леброн Джеймс',
    };
    let sportMessage = "";
    if (sportsChampions[favoriteSport.toLowerCase()]) {
        sportMessage = `Круто! Хочеш стати ${sportsChampions[favoriteSport.toLowerCase()]}?`;
    }

    const informationText = `Ваш вік: ${age}\n${cityMessage}\nТвій улюблений вид спорту: ${favoriteSport}\n${sportMessage}`;
    alert(informationText);
}