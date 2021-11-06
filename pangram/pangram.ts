export function isPangram(sentence: string) {
	const regex = /[a-z]/g;
	let lowerCaseSentence = sentence.toLowerCase();
	let lettersOfSentence = new Set();
	lowerCaseSentence.match(regex)?.forEach(letter => {
		lettersOfSentence.add(letter);
	})
	return lettersOfSentence.size === 26;
}

