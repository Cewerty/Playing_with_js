'use strict';

let first_number  = parseInt(prompt("Enter first number"));
let second_number = parseInt(prompt("Enter second number"));
let selected_operator = prompt("Enter operator");

alert(select_operation(selected_operator));

function select_operation(selected_operator) {
    switch (selected_operator) {
        case "+":
            return first_number + second_number;
        case "-":
            return first_number - second_number;
        case "/":
            if (second_number != 0){
                return first_number / second_number;
            }
            else {
                return "Invalid second number";
            }
        case "*":
            return first_number * second_number;
        default:
            return "Invalid operator";
    }
}