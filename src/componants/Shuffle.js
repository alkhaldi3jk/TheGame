import React from 'react'
function Shuffle() {

// Fisher Yates Shuffle
function swap(CardB, i, j) {
    const temp = CardB[i];
    CardB[i] = CardB[j];
    CardB[j] = temp;
 }
 function shuffleCards(CardB) {
    const length = CardB.length;
    for (let i = length; i > 0; i--) {
       const randomIndex = Math.floor(Math.random() * i);
       const currentIndex = i - 1;
       swap(CardB, currentIndex, randomIndex)
    }
    return CardB;
 }
    return (
        <div>
            {shuffleCards}
        </div>
    )
}

export default Shuffle
