import { createStore } from "https://cdn.skypack.dev/redux@4.0.5";


// on trouve les éléments dans le document HTML
const score = document.getElementById("score");
const player1Button = document.getElementById("player-1");
const player2Button = document.getElementById("player-2");
const resetButton = document.getElementById("reset");
const pauseButton = document.getElementById("pause");

player1Button.addEventListener("click", () => {
	// Ce code s'exécute lorsque le bouton "Point Joueur 1" est cliqué
});

player2Button.addEventListener("click", () => {
	// Ce code s'exécute lorsque le bouton "Point Joueur 2" est cliqué
});

resetButton.addEventListener("click", () => {
	// Ce code s'exécute lorsque le bouton "Remettre à zéro" est cliqué
});

pauseButton.addEventListener("click", function () {
	// Ce code s'exécute lorsque le bouton "Pause / Reprendre" est cliqué
	store.dispatch(playPause());
});

/**
 * Met à jour le text qui affiche le score
 * @param {boolean} playing
 * @param {'player1' | 'player2'} winner
 * @param {number} player1Score
 * @param {number} player2Score
 * @param {'player1' | 'player2'} advantage
 */
function updateScoreText(
	playing,
	winner = null,
	player1Score = 0,
	player2Score = 0,
	advantage = null
) {
	if (winner) {
		if (winner === "player1") {
			score.innerHTML = "Joueur 1 gagne";
		} else {
			score.innerHTML = "Joueur 2 gagne";
		}
	} else if (playing === false) {
		score.innerHTML = "C'est la pause";
	} else {
		let text = "Le score est: " + player1Score + " - " + player2Score;
		if (advantage) {
			if (advantage === "player1") {
				text += " avantage joueur 1";
			} else {
				text += " avantage joueur 2";
			}
		}
		score.innerHTML = text;
	}
}

// A vous de jouer !

const initialState = {
	player1: 0,
	player2: 0,
	advantage: null,
	winner: null,
	playing: true,
}

const playPause = () => ({ type: 'playPause' });

function reducer(state, action) {
	if (action.type === 'playPause') {
		return {
			...state,
			playing: !state.playing,
		}
	}
	return state;
}

const store = createStore(reducer, initialState);

store.subscribe(() => {
		const state = store.getState();
		updateScoreText(state.playing);
	})

;

