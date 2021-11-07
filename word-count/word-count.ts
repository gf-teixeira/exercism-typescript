export function count(sentence: string) {
	let splitedSentence = sentence.replace(/\s+/g, ' ').trim().toLowerCase().split(' ');
	let map = new Map<string, number>();
	splitedSentence.forEach((word) => {
		let oldCount = map.get(word) || 0;
		map.set(word,  oldCount+1);
	})
	return map
}

