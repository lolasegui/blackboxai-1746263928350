// Uno Game JavaScript - Basic structure and initial setup

// Card colors and types
const COLORS = ['red', 'yellow', 'green', 'blue'];
const SPECIAL_CARDS = ['skip', 'reverse', 'draw_two'];
const WILD_CARDS = ['wild', 'wild_draw_four'];

// Card class
class Card {
  constructor(color, value) {
    this.color = color; // red, yellow, green, blue, or null for wild
    this.value = value; // 0-9, skip, reverse, draw_two, wild, wild_draw_four
  }

  getDisplayName() {
    if (this.color) {
      return `${this.color} ${this.value}`;
    } else {
      return `${this.value}`;
    }
  }
}

// Deck class
class Deck {
  constructor() {
    this.cards = [];
    this.initialize();
    this.shuffle();
  }

  initialize() {
    this.cards = [];
    // Number cards and special cards for each color
    COLORS.forEach(color => {
      // One 0 card per color
      this.cards.push(new Card(color, 0));
      // Two of each 1-9 and special cards per color
      for (let i = 1; i <= 9; i++) {
        this.cards.push(new Card(color, i));
        this.cards.push(new Card(color, i));
      }
      SPECIAL_CARDS.forEach(type => {
        this.cards.push(new Card(color, type));
        this.cards.push(new Card(color, type));
      });
    });
    // Wild cards (4 each)
    for (let i = 0; i < 4; i++) {
      WILD_CARDS.forEach(type => {
        this.cards.push(new Card(null, type));
      });
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  draw() {
    return this.cards.pop();
  }

  isEmpty() {
    return this.cards.length === 0;
  }
}

// Game class
class UnoGame {
  constructor() {
    this.deck = new Deck();
    this.discardPile = [];
    this.players = [];
    this.currentPlayerIndex = 0;
    this.playDirection = 1; // 1 for clockwise, -1 for counterclockwise
    this.isGameOver = false;
    this.initPlayers(4);
    this.dealCards();
    this.startGame();
  }

  initPlayers(numPlayers) {
    this.players = [];
    for (let i = 0; i < numPlayers; i++) {
      this.players.push({
        id: i,
        hand: [],
        name: `Player ${i + 1}`
      });
    }
  }

  dealCards() {
    for (let i = 0; i < 7; i++) {
      this.players.forEach(player => {
        player.hand.push(this.deck.draw());
      });
    }
  }

  startGame() {
    // Draw the first card to start the discard pile
    let firstCard = this.deck.draw();
    while (firstCard.value === 'wild_draw_four' || firstCard.value === 'wild') {
      // Cannot start with wild cards
      this.deck.cards.unshift(firstCard);
      this.deck.shuffle();
      firstCard = this.deck.draw();
    }
    this.discardPile.push(firstCard);
    this.render();
  }

  render() {
    const container = document.getElementById('game-container');
    container.innerHTML = '';

    // Show discard pile top card
    const discardTop = this.discardPile[this.discardPile.length - 1];
    const discardDiv = document.createElement('div');
    discardDiv.className = 'mb-4 text-center';
    discardDiv.innerHTML = `
      <h2 class="text-xl font-bold mb-2">Discard Pile</h2>
      <div class="inline-block px-6 py-4 rounded-lg shadow-lg text-white font-bold text-2xl ${discardTop.color ? discardTop.color : 'black'}-600 bg-opacity-90" style="background-color: ${discardTop.color ? discardTop.color : 'black'};">
        ${discardTop.getDisplayName()}
      </div>
    `;
    container.appendChild(discardDiv);

    // Show current player hand
    const currentPlayer = this.players[this.currentPlayerIndex];
    const handDiv = document.createElement('div');
    handDiv.className = 'mb-4';
    handDiv.innerHTML = `<h2 class="text-xl font-bold mb-2">${currentPlayer.name}'s Hand</h2>`;
    const cardsDiv = document.createElement('div');
    cardsDiv.className = 'flex space-x-2 overflow-x-auto';
    currentPlayer.hand.forEach((card, index) => {
      const cardDiv = document.createElement('div');
      cardDiv.className = `cursor-pointer rounded-lg shadow-md px-4 py-6 text-white font-bold text-lg ${card.color ? card.color : 'black'}-600 bg-opacity-90`;
      cardDiv.style.backgroundColor = card.color ? card.color : 'black';
      cardDiv.textContent = card.getDisplayName();
      cardDiv.onclick = () => this.playCard(index);
      cardsDiv.appendChild(cardDiv);
    });
    handDiv.appendChild(cardsDiv);
    container.appendChild(handDiv);

    // Show draw card button
    const drawButton = document.createElement('button');
    drawButton.className = 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
    drawButton.textContent = 'Draw Card';
    drawButton.onclick = () => this.drawCard();
    container.appendChild(drawButton);

    // Show game status
    const statusDiv = document.createElement('div');
    statusDiv.className = 'mt-4 text-center text-lg font-semibold text-gray-700';
    statusDiv.textContent = `Current turn: ${currentPlayer.name}`;
    container.appendChild(statusDiv);
  }

  playCard(cardIndex) {
    if (this.isGameOver) return;
    const currentPlayer = this.players[this.currentPlayerIndex];
    const card = currentPlayer.hand[cardIndex];
    const topCard = this.discardPile[this.discardPile.length - 1];

    // Check if card can be played
    if (this.canPlayCard(card, topCard)) {
      // Play the card
      currentPlayer.hand.splice(cardIndex, 1);
      this.discardPile.push(card);
      this.handleCardEffect(card);
      this.checkWin(currentPlayer);
      if (!this.isGameOver) {
        this.nextTurn();
      }
      this.render();
    } else {
      alert('You cannot play that card.');
    }
  }

  canPlayCard(card, topCard) {
    return (
      card.color === topCard.color ||
      card.value === topCard.value ||
      card.color === null // wild cards
    );
  }

  handleCardEffect(card) {
    switch (card.value) {
      case 'skip':
        this.nextTurn(); // skip next player
        break;
      case 'reverse':
        this.playDirection *= -1;
        break;
      case 'draw_two':
        this.nextTurn();
        this.drawCardsForPlayer(this.players[this.currentPlayerIndex], 2);
        break;
      case 'wild':
        // TODO: prompt player to choose color
        break;
      case 'wild_draw_four':
        this.nextTurn();
        this.drawCardsForPlayer(this.players[this.currentPlayerIndex], 4);
        // TODO: prompt player to choose color
        break;
    }
  }

  drawCardsForPlayer(player, count) {
    for (let i = 0; i < count; i++) {
      if (this.deck.isEmpty()) {
        this.reshuffleDeck();
      }
      player.hand.push(this.deck.draw());
    }
  }

  drawCard() {
    const currentPlayer = this.players[this.currentPlayerIndex];
    if (this.deck.isEmpty()) {
      this.reshuffleDeck();
    }
    currentPlayer.hand.push(this.deck.draw());
    this.nextTurn();
    this.render();
  }

  reshuffleDeck() {
    const topCard = this.discardPile.pop();
    this.deck.cards = this.discardPile;
    this.deck.shuffle();
    this.discardPile = [topCard];
  }

  nextTurn() {
    this.currentPlayerIndex =
      (this.currentPlayerIndex + this.playDirection + this.players.length) %
      this.players.length;
  }

  checkWin(player) {
    if (player.hand.length === 0) {
      alert(`${player.name} wins!`);
      this.isGameOver = true;
    }
  }
}

// Initialize game on page load
window.onload = () => {
  window.unoGame = new UnoGame();
};
