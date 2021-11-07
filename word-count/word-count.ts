export function count(sentence: string) {
	let splitedSentence = sentence.replace(/\s+/g, ' ').trim().toLowerCase().split(' ');
	let map = new Map();
	splitedSentence.forEach((word) => {
		let aux = map.get(word);
		if(aux) aux +=1;
		map.set(word, aux || 1);
	})
	return map
}

