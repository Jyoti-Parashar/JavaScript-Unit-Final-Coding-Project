
class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }

    describe() {
        return `Suit: ${this.suit},Rank: ${this.rank} ,Value: ${this.value}`;
    }

}
class Deck {
    constructor() {
        this.Cards = [];
    }

    createDeck() {
        let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.Cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }

    }
    shuffleDeck() {
        let location1, location2, tmp;
        for (let i = 0; i < 1000; i++) {
            location1 = Math.floor((Math.random() * this.Cards.length));
            location2 = Math.floor((Math.random() * this.Cards.length));
            tmp = this.Cards[location1];
            this.Cards[location1] = this.Cards[location2];
            this.Cards[location2] = tmp;
        }
    }

}
class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCard = [];
        this.point = 0;
    }
}

class Board {
    constructor() {

        this.players = [];
    }
    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck();
        this.players[0].playerCards = d.Cards.slice(0, 26);
        this.players[1].playerCards = d.Cards.slice(26, 52);
    }


    deal() {


        do {

           // for (let index = 0; index >= this.players[0].playerCards.length ; index++) {

                let firstPlayerCard = this.players[0].playerCards.shift();
                let secondPlayerCard = this.players[1].playerCards.shift();
                if (firstPlayerCard.value > secondPlayerCard.value) {
                    this.players[0].point++;
                } else if(firstPlayerCard.value < secondPlayerCard.value){
                    this.players[1].point++;
                }
                else {
                    continue;
                }
           // }
       } while (this.players[0].playerCards.length > 0 );
        console.log(`Player 1 Score : ${this.players[0].point}`);
        console.log(`Player 2 Score : ${this.players[1].point}`);
        if (this.players[0].point>this.players[1].point) {
            console.log(`(Player 1) : ${this.players[0].playerName} won the WAR!!!  `);
        }
        else if (this.players[0].point<this.players[1].point){
            console.log(`(Player 2) : ${this.players[1].playerName} won the WAR!!!  `);
        }
        else{
            console.log(`It's a tie. `);
        }


    }
}


let gameBoard = new Board();
gameBoard.start('A', 'B');
console.log(gameBoard.players);
gameBoard.deal();



