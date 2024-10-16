'use strict';

let input = parseInt(prompt("Input value"));
let regimes = prompt("What you waht to transform: celsius, faringeit, kelvin");
let picked_translation = prompt("In what you waht to transform: celsius, faringeit, kelvin");

regimes.toLowerCase();
picked_translation.toLowerCase();

let user_info = new Object({input: input, regime: regimes, translation: picked_translation})

function get_Kel({input = 0, regime = 'celsius'}) {
    if (regime === 'celsius') {
        return input + 273
    }
    else if (regime === 'faringeit') {
        return (9 * (input - 273) / 5) - 32 
    }
    else {
        return input
    } 
}

function get_Far({input = 0, regime = 'celsius'}) {
    if (regime === 'celsius') {
        return (9 * input / 5) - 32
    }
    else if (regime == 'kelvin') {
        return ((input - 32) * 5/9) + 273 
    }
    else {
        return input
    }
}

function get_cel({input = 0, regime='kelvin'}) {
    if (regime === 'kelvin') {
        return input + 273
    }
    else if (regime === 'faringeit') {
        return ((input - 32) * 5/9)
    }
    else {
        return input
    }
}

switch (user_info.translation) {
    case 'kelvin':
        alert(get_Kel(user_info));
    case 'faringeit':
        alert(get_Far(user_info));
    case 'celsius':
        alert(get_cel(user_info));
    default:
        alert("Error!");
}