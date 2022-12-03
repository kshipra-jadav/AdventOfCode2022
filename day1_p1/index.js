import * as fs from 'fs/promises'

const fileContents = await fs.readFile('input.txt', 'utf-8')

const splitArray = fileContents.split(/\r?\n/)

let parentArray = []
let lastIndex = 0

for(let i = 0; i < splitArray.length; i ++) {
	let currentElem = splitArray[i]
	if(currentElem.trim() === '') {
		let tempArr = splitArray.slice(lastIndex, i)
		parentArray.push(tempArr)
		lastIndex = i
		lastIndex ++
	}
}

let maxElf = {}
let maxCalories = 0

for(let i = 0; i < parentArray.length; i ++) {
	let currentCalories = parentArray[i].reduce((x, y) => parseInt(x) + parseInt(y), 0)
	if(currentCalories >= maxCalories) {
		maxCalories = currentCalories
		maxElf['maximumCalories'] = currentCalories
		maxElf['elfNumber'] = i
	}
	
}

console.log(maxElf)