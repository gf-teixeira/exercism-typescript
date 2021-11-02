export function decodedValue(array: string[]) {
	
const colors: {[key: string]: number} = {		
    "black": 0,
    "brown": 1,
    "red": 2,
    "orange": 3,
    "yellow": 4,
    "green": 5,
    "blue": 6,
    "violet": 7,
    "grey": 8,
};	
    
    const resistanceValue: string = String(colors[array[0]]) + String(colors[array[1]]);
    return Number(resistanceValue);
}

