import * as fs from 'fs/promises'


const input = await fs.readFile('input.txt', 'utf-8')

const rucksackContents = input.split(/\r\n/)

let commonLetters = []
rucksackContents.map(item => {
	let charArray = item.split('')
	let firstHalf = charArray.slice(0, charArray.length / 2)
	let secondHalf = charArray.slice(charArray.length / 2, charArray.length)
	let flag = true
	firstHalf.forEach(letter => {
		if(secondHalf.includes(letter)) {
			if(flag) {
				flag = false
				commonLetters.push(letter)
			}
		}
	})
})

let sumOfPriority = 0

commonLetters.forEach(letter => {
	if(letter === letter.toUpperCase()) {
		let currentPriority = letter.charCodeAt(0) - 65 + 27
		sumOfPriority += currentPriority
	}
	if(letter === letter.toLowerCase()) {
		let currentPriority = letter.charCodeAt(0) - 96
		sumOfPriority += currentPriority
	}
})

console.log(sumOfPriority)