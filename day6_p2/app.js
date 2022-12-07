import * as fs from 'fs/promises'
const input = await fs.readFile('input.txt', 'utf-8')

let arr = input.split('')
let latestUniqueIndex
for (let i = 0; i <= arr.length; i ++) {
	const currentArr = arr.slice(i, i+14)
	const characterSet = new Set(currentArr)
	if(characterSet.size === currentArr.length) {
		latestUniqueIndex = i+14
		break
	}
}

console.log(`latest index ${latestUniqueIndex}`)

