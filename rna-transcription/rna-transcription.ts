
const transcription: {[key: string]: string} = {
	'G': 'C',
	'C': 'G',
	'T': 'A',
	'A': 'U'
};

export function toRna(dna: string): string{

	let rna = '';
/*	let regex = /(^[GCTA]+$)/g;
	let validInput = regex.test(dna);
	if(!validInput) throw new Error('Invalid input DNA.');
*/
	
	dna.split('').forEach((dna) => {
		if(!transcription[dna]) throw new Error('Invalid input DNA.');
		rna += transcription[dna];
	});
	return rna;
}

