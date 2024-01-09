'use strict';

let userAgeInput = prompt('Введіть свій вік:');
let userAge = parseInt(userAgeInput);

if (!isNaN(userAge)) {
    if (userAge > 10 && userAge < 20) {
        alert(`Тобі ${userAge} років`);
    } else {
        switch (userAge) {
            case 1:
                alert(`Тобі ${userAge} рік`);
                break;
            case 2:
            case 3:
            case 4:
                alert(`Тобі ${userAge} роки`);
                break;
            default:
                alert(`Тобі ${userAge} років`);
        }
    }
} else {
    alert('Введено не число.');
}