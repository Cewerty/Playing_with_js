'use strict';

function get_random_number(max) {
    return Math.floor(Math.random() * max);
}

let user_interaval = parseInt(prompt("Choose max number for guess:"))
let random_number = get_random_number(user_interaval + 1);

while (true){
    let user_input = parseInt(prompt("Input your number!"));
    if (user_input == random_number) {
        alert('You Win!');
        break;
    }
    else if (user_input > random_number) {
        alert("Too big!");
    }
    else if (user_input < random_number) {
        alert("Too small!");
    }
    else {
        alert("Error!");
        continue;
    }
}