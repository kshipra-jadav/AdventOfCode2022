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

let allCalories = []

for(let i = 0; i < parentArray.length; i ++) {
	let currentCalories = parentArray[i].reduce((x, y) => parseInt(x) + parseInt(y), 0)
	allCalories.push(currentCalories)
}

let revArr = allCalories.sort((a, b) => a - b).reverse()
let topThreeSum = revArr.slice(0, 3).reduce((x, y) => x + y, 0)

console.log(`Calories From Top Three Elves :- ${topThreeSum}`)
