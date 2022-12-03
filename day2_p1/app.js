import * as fs from 'fs/promises'

const ROCK_SCORE = 1
const PAPER_SCORE = 2
const SCISSOR_SCORE = 3
const LOOSE_SCORE = 0
const DRAW_SCORE = 3
const WIN_SCORE = 6

const evaluateScore = (playerMove, elfMove) => {
	// A -> rock |  B -> paper | C -> scissor
	// X -> rock |  Y -> paper | Z -> scissor
	let currentScore = 0
	
	switch (elfMove) {
		case "A":
			if(playerMove === "X") currentScore = DRAW_SCORE + ROCK_SCORE
			if(playerMove === "Y") currentScore = WIN_SCORE + PAPER_SCORE
			if(playerMove === "Z") currentScore = LOOSE_SCORE + SCISSOR_SCORE
			break
		case "B":
			if(playerMove === "X") currentScore = LOOSE_SCORE + ROCK_SCORE
			if(playerMove === "Y") currentScore = DRAW_SCORE + PAPER_SCORE
			if(playerMove === "Z") currentScore = WIN_SCORE + SCISSOR_SCORE
			break
		case "C":
			if(playerMove === "X") currentScore = WIN_SCORE + ROCK_SCORE
			if(playerMove === "Y") currentScore = LOOSE_SCORE + PAPER_SCORE
			if(playerMove === "Z") currentScore = DRAW_SCORE + SCISSOR_SCORE
			break
	}
	
	return currentScore
}

const input = await fs.readFile('input.txt', 'utf-8')

const cleanArray = input.split(/\s/gm).filter(elem => elem !== '')

const playerMoves = []
const elfMoves = []

cleanArray.forEach((move, index) => index % 2 === 0 ? elfMoves.push(move) : playerMoves.push(move) )

let totalScore = 0
for(let i = 0; i < playerMoves.length; i ++) {
	let playerMove = playerMoves[i]
	let elfMove = elfMoves[i]
	totalScore += evaluateScore(playerMove, elfMove)
}

console.log(`The total Score Of the Player is :- ${totalScore}`)

