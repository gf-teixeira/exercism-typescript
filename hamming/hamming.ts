export function compute(left: string, right: string): number{

	if(left.length !== right.length) throw new Error('DNA strands must be of equal length.');
	
	const leftStrand = [...left];
	const rightStrand = [...right];
	let count = 0;

	for(let i=0; i<left.length; i++){
		if(leftStrand[i] !== rightStrand[i]) count++;
	}
	return count;

}
