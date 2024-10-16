'use struct';

let user = {
    name: 'John',
    age: 30,
};

let {name, age, isAdmin = false} = user;
// isAdmin = isAdmin ?? false;

let salaris = {
    Josh: 200,
    Mash: 300,
    Greg: undefined,
    Josh: 150,
}

// let salaris = {};

function Top_salaris(Getted_object) {
    if (Object.keys(Getted_object) == 0) {
        alert('Is null!');
        return null;
    }
    let biggest_salari = 0;
    let biggest_name = '';  
    for (let [name, salari] of Object.entries(Getted_object)){
        if (biggest_salari < salari) {
            biggest_name = name;
        }
    }
    return biggest_name;
}

alert(Top_salaris(salaris));