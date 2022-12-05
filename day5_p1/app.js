import * as fs from 'fs/promises'

const allItems = [
	['T', 'P', 'Z', 'C', 'S', 'L', 'Q', 'N'],
	['L', 'P', 'T', 'V', 'H', 'C', 'G'],
	['D', 'C', 'Z', 'F'],
	['G', 'W', 'T', 'D', 'L', 'M', 'V', 'C'],
	['P', 'W', 'C'],
	['P', 'F', 'J', 'D', 'C', 'T', 'S', 'Z'],
	['V', 'W', 'G', 'B', 'D'],
	['N', 'J', 'S', 'Q', 'H', 'W'],
	['R', 'C', 'Q', 'F', 'S', 'L', 'V']
]
const input = await fs.readFile('input.txt', 'utf-8')

const allMoves = input.match(/\d+/gm)

for(let i = 0; i <= allMoves.length - 3; i += 3) {
	let numberOfItems = allMoves[i]
	let fromStack = allMoves[i+1]
	let toStack = allMoves[i+2]
	for(let i = 1; i <= numberOfItems; i ++) {
		let currentItem = allItems[fromStack-1].pop()
		allItems[toStack-1].push(currentItem)
	}
}

const topItems = []
allItems.forEach(item => {
	topItems.push(item.pop())
})
console.log(topItems.join(''))

