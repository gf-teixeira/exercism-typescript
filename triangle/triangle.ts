export class Triangle {
	side1: number;
	side2: number;
	side3: number;

  constructor(side1: number, side2:number, side3: number) {
	  this.side1 = side1;
	  this.side2 = side2;
	  this.side3 = side3;
  }

  isATriangle(): boolean{
	
	  if(this.side1 <= 0 || this.side2 <= 0 || this.side3 <=0){
		return false;
	  }
	  if((this.side1 + this.side2) < this.side3 || 
	     (this.side1 + this.side3) < this.side2 || 
	     (this.side2 + this.side3) < this.side1) return false;
	return true
  }

  get isEquilateral(): boolean {
	  if(!this.isATriangle()) return false;

	  if((this.side1 === this.side2) && (this.side1 === this.side3)){
		return true;
	  }
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
