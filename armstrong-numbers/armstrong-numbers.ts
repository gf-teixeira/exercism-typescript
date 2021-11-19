export function isArmstrongNumber(num: number): boolean {
	const stringNum = num.toString();
	let sum = 0;
	[...stringNum].forEach((digit) => {
		sum += Number(digit) ** stringNum.length;
	})

	return sum === num;

}
