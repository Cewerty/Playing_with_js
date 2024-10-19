'use strict';


const blackjackValues = [
    { card: '2', value: 2 },
    { card: '3', value: 3 },
    { card: '4', value: 4 },
    { card: '5', value: 5 },
    { card: '6', value: 6 },
    { card: '7', value: 7 },
    { card: '8', value: 8 },
    { card: '9', value: 9 },
    { card: '10', value: 10 },
    { card: 'J', value: 10 },
    { card: 'Q', value: 10 },
    { card: 'K', value: 10 },
    { card: 'A', value: [1, 11] }
  ];

//создание колоды с картами четырёх мастей
function create_deck(deck_object = []){
    let new_deck_array = Array(); 
    for (let value of deck_object) {
        let pades = value;
        let hearts = value;
        let diamonds = value;
        let clubs = value;
        new_deck_array.push(pades, hearts, diamonds, clubs);
    }
    return new_deck_array;
}


function get_random_number(max) {
    return Math.floor(Math.random() * max);
}


//Перемешивание карт рекурсией
function shuffle(deck_object = [], shuffled_deck_array=[]){
    let flat = deck_object.flat();
    let deck_length = deck_object.length;
    if (deck_object.length === 0) {
        return shuffled_deck_array;
    }
    else {
        let picked_random_card = get_random_number(deck_length);
        let [picked_card] = flat.splice(picked_random_card, 1);
        shuffled_deck_array.push(picked_card);
    }
    return shuffle(flat, shuffled_deck_array);
}


// let arr = create_deck(blackjackValues);
// let shuffles = shuffle(arr);
// let user_hands = Array(); 
// user_hands.push(shuffles.pop());
// user_hands.push(shuffles.pop());
// console.log(user_hands);
// let summs = hand_sum(user_hands);
// console.log(summs);


function balance_checker(bet_amount = 0, user_balance = 0) {
    return bet_amount > user_balance
}


function hand_sum(user_hand = []) {
    let hand_sum = 0;

    if (user_hand.length === 0) {
        console.log("Hand is empty!");
        return hand_sum;
    }

    let aces_count = 0;

    for (let card of user_hand) {
        let { card: card_type, value: card_value } = card;

        if (card_type === 'A') {
            aces_count++;
            hand_sum += 11;
        } else {
            hand_sum += card_value;
        }
    }

    while (hand_sum > 21 && aces_count > 0) {
        hand_sum -= 10;
        aces_count--;
    }

    return hand_sum;
}


function dealer_action(dealer_sum) {
    const stand_threshold = 17;

    function is_soft_17(dealer_sum, dealer_hand) {
        let has_ace = dealer_hand.some(card => card.card === 'A');
        return has_ace && dealer_sum === 17;
    }

    if (dealer_sum < stand_threshold || is_soft_17(dealer_sum, dealer_hand)) {
        return 'hit';
    } else {
        return 'stand';
    }
}

function win_or_lose(user_hand, dealer_hand) {

    function hand_comparison(user_hand, dealer_hand) {
        if (hand_sum(user_hand) > hand_sum(dealer_hand)) {
            return "player_win";
        }
        else if (hand_sum(user_hand) == hand_sum(dealer_hand)) {
            return "equal";
        }
        else {
            return "player_lose";
        }
    }

    switch (hand_comparison(user_hand, dealer_hand)) {
        case 'player_win':
            return 1
        case 'equal':
            return 0
        case 'player_lose':
            return -1
    }
}

let starting_deck = create_deck(blackjackValues);
let basic_user_budget = 200;

while (true){
    let grabbed_card = 0;
    let user_hand = [];
    let dealer_hand = [];
    let shuffled_deck_array = shuffle(starting_deck);

    if (grabbed_card === 0) {
    let user_bet = parseInt(prompt(`Write your bet amount!\nYour balance is ${basic_user_budget}`));
    if (balance_checker(user_bet, basic_user_budget)) {
        alert('Sorry, but you can\'t make bet, that bigger than your budget.')
        continue;
    }

    user_hand.push(shuffled_deck_array.pop());
    user_hand.push(shuffled_deck_array.pop());
    dealer_hand.push(shuffled_deck_array.pop());
    dealer_hand.push(shuffled_deck_array.pop());
    }
    let user_action = prompt(`Pick your action!\n1.Hit a card\n2.Double a bet\n3.Stay\n Your hand sum is ${hand_sum(user_hand)}`);
    switch (user_action){
        case '1':
            user_hand.push(shuffled_deck_array.pop());
            if (hand_sum(user_hand) > 21) {
                alert("Sorry, you had take too much, mate!");
                basic_user_budget -= user_bet;
                break;
            }
            if (hand_sum(user_hand) === 21) {
                alert("Blackjack! What a luck!");
                basic_user_budget += user_bet * 1.5;
                break;
            }
            grabbed_card = 1;
            continue;
        case '2':
            user_hand.push(shuffled_deck_array.pop());
            if (hand_sum(user_hand) > 21) {
                alert("Sorry, you had take too much, mate!");
                basic_user_budget -= user_bet * 2;
            }
            else if (hand_sum(user_hand) === 21) {
                alert("Blackjack! What a luck!");
                basic_user_budget += (user_bet * 2) * 1.5;
            }
            else {
                if (win_or_lose(user_hand, dealer_hand) == 0) {
                    alert('Equal, nobody wins!');
                }
                else if (win_or_lose(user_action, dealer_hand) == 1) {
                    alert("You win!");
                    basic_user_budget += user_bet * 2;
                }
                else {
                    alert('You lose!');
                    basic_user_budget -= user_bet * 2;
                }
            }
            break;
        case '3':
            if (win_or_lose(user_hand, dealer_hand) == 0) {
                alert('Equal, nobody wins!');
            }
            else if (win_or_lose(user_action, dealer_hand) == 1) {
                alert("You win!");
                basic_user_budget += user_bet;
            }
            else {
                alert('You lose!');
                basic_user_budget -= user_bet;
            }
            break;    
    }
    shuffled_deck_array = shuffle(starting_deck);
    grabbed_card = 0;
}