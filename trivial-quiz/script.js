// Juego de Trivial - JavaScript

const levels = {
  easy: [
    {
      question: "¿Quién es el creador de la serie 'Los Simpson'?",
      choices: ["Matt Groening", "Seth MacFarlane", "Trey Parker", "Matt Stone"],
      answer: 0,
      image: "https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿En qué año se estrenó la película 'Titanic'?",
      choices: ["1995", "1997", "2000", "1990"],
      answer: 1,
      image: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Quién canta la canción 'Thriller'?",
      choices: ["Prince", "Michael Jackson", "Madonna", "Elton John"],
      answer: 1,
      image: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Cuál es la serie de televisión más larga de la historia?",
      choices: ["Doctor Who", "Los Simpson", "Friends", "Grey's Anatomy"],
      answer: 0,
      image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Quién interpretó a Jack Sparrow en 'Piratas del Caribe'?",
      choices: ["Johnny Depp", "Orlando Bloom", "Leonardo DiCaprio", "Brad Pitt"],
      answer: 0,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Cuál es el nombre del mago en la serie de libros 'Harry Potter'?",
      choices: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"],
      answer: 0,
      image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Cuál es la capital de Francia?",
      choices: ["París", "Londres", "Berlín", "Madrid"],
      answer: 0,
      image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Cuál es el río más largo del mundo?",
      choices: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
      answer: 1,
      image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Cuál es la capital de España?",
      choices: ["Barcelona", "Madrid", "Sevilla", "Valencia"],
      answer: 1,
      image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿En qué continente se encuentra Egipto?",
      choices: ["Asia", "África", "Europa", "Oceanía"],
      answer: 1,
      image: "https://images.pexels.com/photos/164338/pexels-photo-164338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  ],
  medium: [
    {
      question: "¿Quién dirigió la película 'El Padrino'?",
      choices: ["Francis Ford Coppola", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino"],
      answer: 0,
      image: "https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Cuál es el nombre real de Lady Gaga?",
      choices: ["Stefani Germanotta", "Adele Adkins", "Beyoncé Knowles", "Rihanna Fenty"],
      answer: 0,
      image: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿En qué año se lanzó el primer álbum de The Beatles?",
      choices: ["1960", "1963", "1965", "1967"],
      answer: 1,
      image: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Quién ganó el premio Oscar a Mejor Actor en 2020?",
      choices: ["Joaquin Phoenix", "Leonardo DiCaprio", "Brad Pitt", "Tom Hanks"],
      answer: 0,
      image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Cuál es la serie de televisión más vista en Netflix?",
      choices: ["Stranger Things", "La Casa de Papel", "The Witcher", "Bridgerton"],
      answer: 1,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Quién es conocido como el Rey del Pop?",
      choices: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"],
      answer: 1,
      image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Cuál es la capital de Canadá?",
      choices: ["Toronto", "Ottawa", "Montreal", "Vancouver"],
      answer: 1,
      image: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Cuál es el desierto más grande del mundo?",
      choices: ["Sahara", "Gobi", "Kalahari", "Antártico"],
      answer: 0,
      image: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿En qué país se encuentra la Torre Eiffel?",
      choices: ["Italia", "Francia", "España", "Alemania"],
      answer: 1,
      image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Cuál es el océano más grande del mundo?",
      choices: ["Atlántico", "Pacífico", "Índico", "Ártico"],
      answer: 1,
      image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  ],
  hard: [
    {
      question: "¿Quién ganó el premio Nobel de Literatura en 2020?",
      choices: ["Louise Glück", "Bob Dylan", "Kazuo Ishiguro", "Toni Morrison"],
      answer: 0,
      image: "https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Cuál fue la primera película en ganar el Oscar a Mejor Película?",
      choices: ["Wings", "Casablanca", "Lo que el viento se llevó", "Ciudadano Kane"],
      answer: 0,
      image: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Quién compuso la Novena Sinfonía?",
      choices: ["Mozart", "Beethoven", "Bach", "Chopin"],
      answer: 1,
      image: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Cuál es el nombre del actor que interpretó a 'El Joker' en 2019?",
      choices: ["Joaquin Phoenix", "Heath Ledger", "Jared Leto", "Jack Nicholson"],
      answer: 0,
      image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Cuál es la serie de televisión con más premios Emmy?",
      choices: ["Game of Thrones", "Breaking Bad", "The Simpsons", "Friends"],
      answer: 2,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Quién es conocido como el 'Rey del Rock and Roll'?",
      choices: ["Elvis Presley", "Chuck Berry", "Little Richard", "Buddy Holly"],
      answer: 0,
      image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Cuál es la montaña más alta del mundo?",
      choices: ["K2", "Everest", "Kangchenjunga", "Lhotse"],
      answer: 1,
      image: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿En qué país se encuentra la Gran Muralla China?",
      choices: ["Japón", "China", "Corea del Sur", "Vietnam"],
      answer: 1,
      image: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Cuál es el lago más grande de agua dulce del mundo?",
      choices: ["Lago Superior", "Lago Victoria", "Lago Baikal", "Lago Tanganica"],
      answer: 0,
      image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      question: "¿Cuál es la capital de Australia?",
      choices: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      answer: 2,
      image: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  ]
};

const emoticons = ["😀", "😎", "🤓", "🧐", "😇", "🤠", "👻", "🤖", "👽", "🐱"];

class QuizGame {
  constructor(levels) {
    this.levels = levels;
    this.currentLevel = null;
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.playerName = '';
    this.playerEmoticon = '';
    this.container = document.getElementById('quiz-container');
    this.ranking = this.loadRanking();
    this.renderNameEmoticonScreen();
  }

  loadRanking() {
    const ranking = localStorage.getItem('trivialRanking');
    return ranking ? JSON.parse(ranking) : [];
  }

  saveRanking() {
    localStorage.setItem('trivialRanking', JSON.stringify(this.ranking));
  }

  addScoreToRanking(name, emoticon, score, level) {
    this.ranking.push({ name, emoticon, score, level });
    // Sort descending by score
    this.ranking.sort((a, b) => b.score - a.score);
    if (this.ranking.length > 10) {
      this.ranking = this.ranking.slice(0, 10);
    }
    this.saveRanking();
  }

  renderNameEmoticonScreen() {
    this.container.innerHTML = `
      <div class="text-center space-y-4">
        <label for="name" class="block text-lg font-semibold">Ingresa tu nombre:</label>
        <input type="text" id="name-input" class="border border-gray-400 rounded px-3 py-2 w-full max-w-xs mx-auto" />
        <label class="block text-lg font-semibold mt-4">Selecciona un emoticono:</label>
        <div class="flex justify-center space-x-3 flex-wrap max-w-xs mx-auto">
          ${emoticons.map((emoticon, i) => `
            <button class="emoticon-btn text-3xl p-2 rounded hover:bg-yellow-200" data-index="${i}">${emoticon}</button>
          `).join('')}
        </div>
        <label class="block text-lg font-semibold mt-4">Selecciona nivel:</label>
        <div class="flex justify-center space-x-4 max-w-xs mx-auto">
          <button class="level-btn bg-gray-300 hover:bg-gray-400 rounded px-4 py-2" data-level="easy">Fácil</button>
          <button class="level-btn bg-gray-300 hover:bg-gray-400 rounded px-4 py-2" data-level="medium">Medio</button>
          <button class="level-btn bg-gray-300 hover:bg-gray-400 rounded px-4 py-2" data-level="hard">Difícil</button>
        </div>
        <button id="start-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-6" disabled>
          Comenzar Quiz
        </button>
      </div>
    `;
    const nameInput = document.getElementById('name-input');
    const startBtn = document.getElementById('start-btn');
    let selectedEmoticonIndex = null;
    let selectedLevel = null;

    nameInput.addEventListener('input', () => {
      startBtn.disabled = !(nameInput.value.trim() && selectedEmoticonIndex !== null && selectedLevel !== null);
    });

    this.container.querySelectorAll('.emoticon-btn').forEach(btn => {
      btn.onclick = (e) => {
        this.container.querySelectorAll('.emoticon-btn').forEach(b => b.classList.remove('bg-yellow-200'));
        e.target.classList.add('bg-yellow-200');
        selectedEmoticonIndex = parseInt(e.target.getAttribute('data-index'));
        startBtn.disabled = !(nameInput.value.trim() && selectedEmoticonIndex !== null && selectedLevel !== null);
      };
    });

    this.container.querySelectorAll('.level-btn').forEach(btn => {
      btn.onclick = (e) => {
        this.container.querySelectorAll('.level-btn').forEach(b => b.classList.remove('bg-yellow-400'));
        e.target.classList.add('bg-yellow-400');
        selectedLevel = e.target.getAttribute('data-level');
        startBtn.disabled = !(nameInput.value.trim() && selectedEmoticonIndex !== null && selectedLevel !== null);
      };
    });

    startBtn.onclick = () => {
      this.playerName = nameInput.value.trim();
      this.playerEmoticon = emoticons[selectedEmoticonIndex];
      this.currentLevel = selectedLevel;
      this.questions = this.levels[this.currentLevel];
      this.renderStartScreen();
    };
  }

  renderStartScreen() {
    this.container.innerHTML = `
      <div class="text-center space-y-4">
        <p class="text-lg">¡Pon a prueba tus conocimientos generales con este divertido quiz, ${this.playerEmoticon} ${this.playerName}!</p>
        <p class="text-md font-semibold">Nivel seleccionado: ${this.currentLevel.charAt(0).toUpperCase() + this.currentLevel.slice(1)}</p>
        <button id="start-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
          Comenzar Quiz
        </button>
        <button id="ranking-btn" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">
          Ver Ranking
        </button>
      </div>
    `;
    document.getElementById('start-btn').onclick = () => this.startQuiz();
    document.getElementById('ranking-btn').onclick = () => this.renderRanking();
  }

  startQuiz() {
    this.currentIndex = 0;
    this.score = 0;
    this.renderQuestion();
  }

  renderQuestion() {
    const q = this.questions[this.currentIndex];
    this.container.innerHTML = `
      <div>
        <img src="${q.image}" alt="Imagen relacionada" class="w-full max-w-md mx-auto rounded-lg mb-4 shadow-lg" />
        <h2 class="text-2xl font-bold mb-4">${q.question}</h2>
        <div class="flex flex-col space-y-3">
          ${q.choices.map((choice, i) => `
            <button class="choice-btn bg-gray-200 hover:bg-gray-300 rounded py-2 px-4 text-left" data-index="${i}">
              ${choice}
            </button>
          `).join('')}
        </div>
        <div class="mt-6 text-gray-700 font-semibold">
          Pregunta ${this.currentIndex + 1} de ${this.questions.length}
        </div>
      </div>
    `;
    this.container.querySelectorAll('.choice-btn').forEach(btn => {
      btn.onclick = (e) => this.handleAnswer(parseInt(e.target.getAttribute('data-index')));
    });
  }

  handleAnswer(selectedIndex) {
    const correctIndex = this.questions[this.currentIndex].answer;
    if (selectedIndex === correctIndex) {
      this.score++;
    }
    this.currentIndex++;
    if (this.currentIndex < this.questions.length) {
      this.renderQuestion();
    } else {
      this.renderResults();
    }
  }

  renderResults() {
    this.container.innerHTML = `
      <div class="text-center space-y-4">
        <h2 class="text-3xl font-bold mb-4">¡Quiz Completado!</h2>
        <p class="text-xl flex items-center justify-center space-x-2">
          <span>Tu puntuación: ${this.score} / ${this.questions.length}</span>
          <span>${this.score === this.questions.length ? '👑' : ''}</span>
        </p>
        <button id="save-score-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
          Guardar Puntuación y Ver Ranking
        </button>
        <button id="restart-btn" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">
          Reiniciar Quiz
        </button>
      </div>
    `;
    document.getElementById('save-score-btn').onclick = () => {
      this.addScoreToRanking(this.playerName, this.playerEmoticon, this.score, this.currentLevel);
      this.renderRanking();
    };
    document.getElementById('restart-btn').onclick = () => this.renderNameEmoticonScreen();

    // Automatically click the save-score-btn to show ranking immediately
    document.getElementById('save-score-btn').click();
  }

  renderRanking() {
    this.container.innerHTML = `
      <div class="text-center space-y-4">
        <h2 class="text-3xl font-bold mb-4">Ranking de Puntuaciones</h2>
        <ol class="list-decimal list-inside text-left max-w-xs mx-auto">
          ${this.ranking.length === 0 ? '<li>No hay puntuaciones aún.</li>' : this.ranking.map(entry => `
            <li>${entry.emoticon} ${entry.name} (${entry.level}): ${entry.score} ${entry.score === this.levels[entry.level].length ? '👑' : ''}</li>
          `).join('')}
        </ol>
        <button id="back-btn" class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded">
          Volver
        </button>
      </div>
    `;
    document.getElementById('back-btn').onclick = () => this.renderNameEmoticonScreen();
  }
}

window.onload = () => {
  window.quizGame = new QuizGame(levels);
};
