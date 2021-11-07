export function count(sentence: string) {
	let splitedSentence = sentence.replace(/\s+/g, ' ').trim().toLowerCase().split(' ');
	let map = new Map();
	splitedSentence.forEach((word) => {
		map.set(word, map.get(word)+1 || 1);

	})
	return map
}

