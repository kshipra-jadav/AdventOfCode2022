import * as fs from 'fs/promises'

const input = await fs.readFile('input.txt', 'utf-8')
const individualPairs = input.split(/\r\n/)

let totalOverlappingPairs = 0
individualPairs.forEach(pair => {
	let assignmentPairs = pair.split(',')
	
	let firstPair = assignmentPairs[0].split('-')
	let secondPair = assignmentPairs[1].split('-')
	// console.log(`first pair :- ${firstPair}`)
	// console.log(`second pair :- ${secondPair}`)
	let firstSectionStart = parseInt(firstPair[0])
	let firstSectionEnd = parseInt(firstPair[1])
	let secondSectionStart = parseInt(secondPair[0])
	let secondSectionEnd = parseInt(secondPair[1])
	
	if(!(firstSectionEnd < secondSectionStart || secondSectionEnd < firstSectionStart)) {
		totalOverlappingPairs ++
	}
	
})

console.log(totalOverlappingPairs)