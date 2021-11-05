export class Triangle {
	side1: number;
	side2: number;
	side3: number;
	
	constructor(...sides: number[]) {
		[this.side1, this.side2, this.side3] = sides;
	}

	private isATriangle(): boolean{
		return (((this.side1 + this.side2) > this.side3 && 
	     		(this.side1 + this.side3) > this.side2 && 
	     		(this.side2 + this.side3) > this.side1)) &&  
	  		(this.side1 > 0 && this.side2 > 0 && this.side3 > 0)
	}

	get isEquilateral(): boolean {
		if(!this.isATriangle()) return false;
		if((this.side1 === this.side2) && (this.side1 === this.side3)) return true;
		return false;
	}
	get isIsosceles(): boolean {
		if(!this.isATriangle()) return false;
		if(this.side1 === this.side2 || this.side2 === this.side3 || this.side3 === this.side1) return true;
		return false;
	}

	get isScalene() {
		if(!this.isATriangle()) return false;
		if((this.side1 !== this.side2) && (this.side1 !== this.side3)) return true;
		return false;
	}
}
