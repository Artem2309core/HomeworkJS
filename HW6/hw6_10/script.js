const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6','7','8','9','10','jack','queen','king','ace'];

let deck = [];
for (let suit of suits) {
    for (let value of values) {
        let color = (suit === 'diamond' suit === 'heart') ? 'red' : 'black';
        deck.push({ cardSuit: suit, value: value, color: color });
    }
}
console.log('deck', deck);

console.log('Піковий туз:', deck.find(card => card.cardSuit == 'spade' && card.value === 'ace'));

console.log('Всі шістки:', deck.filter(card => card.value === '6'));

console.log('Червоні карти:', deck.filter(card => card.color === 'red'));

console.log('Буби:', deck.filter(card => card.cardSuit === 'diamond'));

const order = ['6','7','8','9','10','jack','queen','king','ace'];
console.log('Трефи 9+ :', deck.filter(card => card.cardSuit === 'clubs' && order.indexOf(card.value) >= order.indexOf('9')));
