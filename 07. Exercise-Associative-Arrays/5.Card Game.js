function solve(input) {
    const colors = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }
    const cards = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }
    let players = {};

    for (let line of input) {
        let [name, hand] = line.split(': ');
        hand = hand.split(', ');

        if (!players.hasOwnProperty(name)) {
            players[name] = [];
        }
        players[name].push(...hand);
    }

    Object.keys(players).forEach(key => {
        let cardsArr = new Set(players[key]);
        let total = 0;
        Array.from(cardsArr).forEach(card =>{
            let elements = card.split('');
            let color = elements.pop();
            let cardNum = elements.join('');
            if (isNaN(cardNum)){
                cardNum = cards[cardNum];
            }
            total += colors[color] * Number(cardNum);
        
        });
        console.log(`${key}: ${total}`);
    })
       
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)
function solve(input) {
    const colors = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }
    const cards = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }
    let players = {};
    for (let line of input) {
        let [name, el] = line.split(': ');
        let cards = el.split(', ');
        if (!players.hasOwnProperty(name)) {
            players[name] = [];
        }
        players[name].push(...cards);
    }
    let arrPlayer = Object.keys(players);
   
    for (let key of arrPlayer) {
        let total = 0;
        let newPlayers = new Set(players[key]);
        let result = Array.from(newPlayers);
        for(let el of result){
            let splited = el.split('');
            let color = splited.pop();
            let cardNum = splited.join('');
            if (isNaN(cardNum)){
                cardNum = cards[cardNum];
            }
            total += colors[color] * Number(cardNum);
        }
        console.log(`${key}: ${total}`);
    }
    
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)