let input = 23;
let regimes = 'faringeit';

let testing_object = new Object({input: input, regime: regimes})

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

console.log(get_Kel(testing_object));