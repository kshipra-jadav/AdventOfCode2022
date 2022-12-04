import * as fs from 'fs/promises'


const input = await fs.readFile('input.txt', 'utf-8')

const rucksackContents = input.split(/\r\n/)

let commonLetters = []
let groupContents = []
for(let i = 0; i < rucksackContents.length - 3; i += 3)	groupContents.push(rucksackContents.slice(i, i+3))


groupContents.map(item => {
	let firstGroup = item[0]
	let secondGroup = item[1]
	let thirdGroup = item[2]
	
	let firstGroupCharArray = firstGroup.split('')
	let flag = true
	
	firstGroupCharArray.forEach(letter => {
		if(secondGroup.includes(letter) && thirdGroup.includes(letter)) {
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