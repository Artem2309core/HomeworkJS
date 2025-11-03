let sortedDeck = { spades: [], diamonds: [], hearts: [], clubs: [] };

for (let card of deck) {
    if (card.cardSuit === 'spade')   sortedDeck.spades.push(card);
    else if (card.cardSuit === 'diamond') sortedDeck.diamonds.push(card);
    else if (card.cardSuit === 'heart')   sortedDeck.hearts.push(card);
    else if (card.cardSuit === 'clubs')   sortedDeck.clubs.push(card);
}

console.log(sortedDeck);
